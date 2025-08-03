import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Eye,
  Heart,
  Share,
  ExternalLink,
  Youtube,
  Users,
  Calendar
} from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
}

const MediaScreen: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    fetchChannelVideos();
  }, []);

  const fetchChannelVideos = async () => {
    if (!apiKey || !channelId) {
      setError('YouTube API configuration missing');
      setLoading(false);
      return;
    }

    try {
      // First get the channel's uploads playlist
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
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
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=12&key=${apiKey}`
      );

      if (!playlistResponse.ok) {
        throw new Error('Failed to fetch playlist items');
      }

      const playlistData = await playlistResponse.json();
      const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');

      // Get detailed video information
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${apiKey}`
      );

      if (!videosResponse.ok) {
        throw new Error('Failed to fetch video details');
      }

      const videosData = await videosResponse.json();

      const formattedVideos = videosData.items.map((video: any) => ({
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium?.url || video.snippet.thumbnails.default?.url,
        publishedAt: video.snippet.publishedAt,
        viewCount: video.statistics.viewCount || '0',
        duration: parseDuration(video.contentDetails.duration)
      }));

      setVideos(formattedVideos);
    } catch (err) {
      console.error('Error fetching YouTube videos:', err);
      setError(err instanceof Error ? err.message : 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  const parseDuration = (duration: string): string => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return '0:00';

    const hours = parseInt(match[1]?.replace('H', '') || '0');
    const minutes = parseInt(match[2]?.replace('M', '') || '0');
    const seconds = parseInt(match[3]?.replace('S', '') || '0');

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const subscribeToChannel = () => {
    window.open(`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`, '_blank');
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading videos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-900 mb-2">Error Loading Videos</h2>
            <p className="text-red-700">{error}</p>
            <button
              onClick={fetchChannelVideos}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Health Media Center</h1>
        <p className="text-gray-600">
          Educational videos and resources from Homa Healthcare Center
        </p>
      </div>

      {/* Channel Info */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Youtube className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Homa Healthcare Center</h2>
              <p className="text-red-100">Official YouTube Channel</p>
            </div>
          </div>
          <button
            onClick={subscribeToChannel}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center space-x-2"
          >
            <Youtube className="h-5 w-5" />
            <span>Subscribe</span>
          </button>
        </div>
      </div>

      {/* Videos Grid */}
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative cursor-pointer" onClick={() => openVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="bg-red-600 bg-opacity-90 p-3 rounded-full">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600" onClick={() => openVideo(video.id)}>
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{parseInt(video.viewCount).toLocaleString()} views</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openVideo(video.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 text-sm"
                  >
                    <Play className="h-4 w-4" />
                    <span>Watch</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                      <Share className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => openVideo(video.id)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Youtube className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-600">Check back later for new content!</p>
        </div>
      )}

      {/* Channel Promotion */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated with Our Latest Videos</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our YouTube channel for the latest health tips, medical insights, and healthcare updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={subscribeToChannel}
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-200 font-medium"
            >
              <Youtube className="h-5 w-5" />
              <span>Subscribe to Channel</span>
            </button>
            <a
              href={import.meta.env.VITE_MAIN_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 font-medium"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Visit Our Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaScreen;