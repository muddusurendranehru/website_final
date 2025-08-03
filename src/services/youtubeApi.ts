// YouTube Data API v3 Service
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
  channelTitle: string;
}

export interface YouTubeChannel {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  subscriberCount: string;
  videoCount: string;
}

class YouTubeApiService {
  private apiKey: string;

  constructor() {
    this.apiKey = YOUTUBE_API_KEY || '';
    if (!this.apiKey) {
      console.warn('YouTube API key not found. Please set VITE_YOUTUBE_API_KEY in your environment variables.');
    }
  }

  async getChannelVideos(channelId: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
    if (!this.apiKey) {
      throw new Error('YouTube API key is required');
    }

    try {
      // First, get the uploads playlist ID
      const channelResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/channels?part=contentDetails&id=${channelId}&key=${this.apiKey}`
      );
      
      if (!channelResponse.ok) {
        throw new Error('Failed to fetch channel data');
      }

      const channelData = await channelResponse.json();
      const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylistId) {
        throw new Error('Could not find uploads playlist');
      }

      // Get videos from uploads playlist
      const playlistResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${this.apiKey}`
      );

      if (!playlistResponse.ok) {
        throw new Error('Failed to fetch playlist items');
      }

      const playlistData = await playlistResponse.json();
      const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');

      // Get detailed video information
      const videosResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${this.apiKey}`
      );

      if (!videosResponse.ok) {
        throw new Error('Failed to fetch video details');
      }

      const videosData = await videosResponse.json();

      return videosData.items.map((video: any) => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url,
        publishedAt: video.snippet.publishedAt,
        viewCount: video.statistics.viewCount || '0',
        duration: this.parseDuration(video.contentDetails.duration),
        channelTitle: video.snippet.channelTitle
      }));
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      throw error;
    }
  }

  async getChannelInfo(channelId: string): Promise<YouTubeChannel> {
    if (!this.apiKey) {
      throw new Error('YouTube API key is required');
    }

    try {
      const response = await fetch(
        `${YOUTUBE_API_BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch channel information');
      }

      const data = await response.json();
      const channel = data.items[0];

      return {
        id: channel.id,
        title: channel.snippet.title,
        description: channel.snippet.description,
        thumbnail: channel.snippet.thumbnails.medium?.url || channel.snippet.thumbnails.default?.url,
        subscriberCount: channel.statistics.subscriberCount || '0',
        videoCount: channel.statistics.videoCount || '0'
      };
    } catch (error) {
      console.error('Error fetching channel info:', error);
      throw error;
    }
  }

  private parseDuration(duration: string): string {
    // Parse ISO 8601 duration format (PT4M13S) to readable format (4:13)
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '0:00';

    const hours = parseInt(match[1]?.replace('H', '') || '0');
    const minutes = parseInt(match[2]?.replace('M', '') || '0');
    const seconds = parseInt(match[3]?.replace('S', '') || '0');

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  async searchVideos(query: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
    if (!this.apiKey) {
      throw new Error('YouTube API key is required');
    }

    try {
      const searchResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${this.apiKey}`
      );

      if (!searchResponse.ok) {
        throw new Error('Failed to search videos');
      }

      const searchData = await searchResponse.json();
      const videoIds = searchData.items.map((item: any) => item.id.videoId).join(',');

      // Get detailed video information
      const videosResponse = await fetch(
        `${YOUTUBE_API_BASE_URL}/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${this.apiKey}`
      );

      if (!videosResponse.ok) {
        throw new Error('Failed to fetch video details');
      }

      const videosData = await videosResponse.json();

      return videosData.items.map((video: any) => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url,
        publishedAt: video.snippet.publishedAt,
        viewCount: video.statistics.viewCount || '0',
        duration: this.parseDuration(video.contentDetails.duration),
        channelTitle: video.snippet.channelTitle
      }));
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error;
    }
  }
}

export const youtubeApi = new YouTubeApiService();
export default youtubeApi;