import React, { useState } from 'react';
import { 
  Play, 
  Image, 
  Upload, 
  Eye,
  Heart,
  Share,
  Download,
  ExternalLink,
  Calendar
} from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  uploadDate: string;
  views: number;
  category: string;
}

interface ImageGalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  uploadDate: string;
  category: string;
}

const MediaScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'images'>('videos');

  // YouTube Channel: https://www.youtube.com/channel/UCf8avHrw6K07POXSIoKgHwg
  // These are sample videos - replace with actual YouTube API integration
  const videos: Video[] = [
    {
      id: 1,
      title: 'Homa Healthcare - Complete Health Checkup Guide',
      description: 'Learn about our comprehensive health screening services and what to expect during your visit.',
      thumbnail: 'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '8:45',
      uploadDate: '2024-01-15',
      views: 2340,
      category: 'Health Education',
      youtubeId: 'UCf8avHrw6K07POXSIoKgHwg' // From your channel
    },
    {
      id: 2,
      title: 'Patient Care Excellence at Homa Healthcare Center',
      description: 'Discover our patient-centered approach and the quality care we provide to every individual.',
      thumbnail: 'https://images.pexels.com/photos/3822647/pexels-photo-3822647.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '6:20',
      uploadDate: '2024-01-10',
      views: 1890,
      category: 'Patient Care',
      youtubeId: 'UCf8avHrw6K07POXSIoKgHwg'
    },
    {
      id: 3,
      title: 'Modern Medical Equipment & Technology Tour',
      description: 'Take a virtual tour of our state-of-the-art medical facilities and advanced diagnostic equipment.',
      thumbnail: 'https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '10:15',
      uploadDate: '2024-01-05',
      views: 3200,
      category: 'Facilities',
      youtubeId: 'UCf8avHrw6K07POXSIoKgHwg'
    },
    {
      id: 4,
      title: 'Preventive Healthcare: Annual Health Screening',
      description: 'Understanding the importance of regular health checkups and preventive care measures.',
      thumbnail: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '7:30',
      uploadDate: '2024-01-01',
      views: 1560,
      category: 'Prevention',
      youtubeId: 'UCf8avHrw6K07POXSIoKgHwg'
    }
  ];

  const images: ImageGalleryItem[] = [
    {
      id: 1,
      title: 'Proper Hand Washing Technique',
      description: 'Step-by-step guide for effective hand hygiene',
      imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=500',
      uploadDate: '2024-01-12',
      category: 'Hygiene'
    },
    {
      id: 2,
      title: 'Healthy Meal Planning Chart',
      description: 'Visual guide to balanced nutrition and portion control',
      imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      uploadDate: '2024-01-08',
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'Exercise Routines for Seniors',
      description: 'Safe and effective exercises for older adults',
      imageUrl: 'https://images.pexels.com/photos/6975459/pexels-photo-6975459.jpeg?auto=compress&cs=tinysrgb&w=500',
      uploadDate: '2024-01-03',
      category: 'Fitness'
    }
  ];

  const categories = ['All', 'Health Education', 'Wellness', 'Mental Health', 'Nutrition', 'Fitness', 'Hygiene'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Health Media Center</h1>
        <p className="text-gray-600">
          Educational videos and resources to support your health journey
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
            activeTab === 'videos'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Play className="h-5 w-5" />
          <span className="font-medium">Videos</span>
        </button>
        <button
          onClick={() => setActiveTab('images')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
            activeTab === 'images'
              ? 'bg-white shadow-sm text-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Image className="h-5 w-5" />
          <span className="font-medium">Images</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'videos' ? (
        <div>
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-colors">
                      <Play className="h-6 w-6 text-gray-900" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* YouTube Channel Promotion */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Visit Our Healthcare Website
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Visit Our Healthcare Website</h2>
              <p className="text-gray-600 mb-4">
                Explore our complete healthcare services and learn more about our clinic
              </p>
              <a
                href="https://www.homahealthcarecenter.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 font-medium"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Visit HomaHealthcareCenter.in</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredImages.map((image) => (
              <div key={image.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-colors">
                      <Eye className="h-6 w-6 text-gray-900" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {image.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{new Date(image.uploadDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-500 transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload New Content</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Images or Videos</h3>
              <p className="text-gray-600 mb-4">
                Add educational content to help patients learn about health topics
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Choose Files
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaScreen;