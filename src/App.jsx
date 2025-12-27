import React from 'react';
import { Search, Grid, Twitter, Facebook, Globe, Star } from 'lucide-react';

function App() {
  const trendingTopics = [
    { name: 'Lifestyle', icon: '🎨', count: 5 },
    { name: 'Inspiration', icon: '💡', count: 8 },
    { name: 'Technology', icon: '💻', count: 4 },
    { name: 'Music', icon: '🎵', count: 12 },
    { name: 'Travel', icon: '✈️', count: 6 }
  ];

  const blogPosts = [
    {
      image: '/api/placeholder/130/100',
      category: 'Lifestyle',
      title: 'The spectacle before us was indeed sublime',
      date: 'September 26, 2019',
      readTime: '1 Min Read',
      rating: 5,
      tags: ['Lifestyle', 'Travel'],
      author: 'Jonathan Doe',
      excerpt: 'Welcome, it\'s great to have you here. We knew that first impressions are important, so we\'ve populated your new site...'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Lifestyle',
      title: 'Far far away, behind the word mountains',
      date: 'August 15, 2019',
      readTime: '2 Min Read',
      rating: 4,
      tags: ['Music', 'Technology'],
      author: 'Jonathan Doe',
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated...'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Video',
      title: 'The meaning of health has evolved over time',
      date: 'July 25, 2019',
      readTime: '1 Min Read',
      rating: 4,
      tags: ['Video'],
      author: 'Jonathan Doe',
      excerpt: 'In keeping with the biomedical perspective, early definitions of health focused on the theme of the body\'s ability to function...'
    },
    {
      image: '/api/placeholder/130/100',
      category: 'Music',
      title: 'Musical improvisation is the spontaneous music',
      date: 'July 23, 2019',
      readTime: '1 Min Read',
      rating: 5,
      tags: ['Inspiration'],
      author: 'Jonathan Doe',
      excerpt: 'It was one of the worst storms to hit London since God knows when. The thunder rolled, lightning flashed and...'
    }
  ];

  const recentPosts = [
    { title: 'The spectacle before us was indeed sublime', date: 'September 26, 2019' },
    { title: 'Far far away, behind the word mountains', date: 'August 15, 2019' },
    { title: 'The meaning of health has evolved over time', date: 'July 25, 2019' }
  ];

  const tags = [
    'Health', 'Inspiration', 'Lifestyle', 'Music', 
    'Technology', 'Travel', 'Video'
  ];

  return (
    <div className="min-h-screen bg-[#fef5f3]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#fef5f3]">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">Quick Search...</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-pink-500">MW</span>
            <span className="text-gray-800"> Zento</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2 text-white bg-pink-400 rounded-md hover:bg-pink-500">
            Subscribe
          </button>
          <Grid className="w-5 h-5 text-gray-700" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="mb-6 text-4xl font-normal">
                Hey, I'm <span className="font-bold text-pink-400">Jonathan Doe</span> 👋
              </h1>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                I'm a <span className="font-semibold">design technologist</span> in Atlanta. I like working on the front-end of the web. This is my site, <span className="font-semibold">Zento</span> where I blog, share and write about my personal projects.
              </p>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-gray-700">Let's connect</p>
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 text-sm border-2 border-gray-200 rounded-md focus:outline-none focus:border-pink-300"
                  />
                  <button className="px-6 py-3 text-sm font-medium text-white bg-pink-400 rounded-md hover:bg-pink-500">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-orange-300 aspect-[4/3]">
                <div className="w-full h-full flex items-end justify-center p-8">
                  <div className="w-24 h-32 bg-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 text-lg font-semibold text-gray-800">
            🌸 Trending Topics
          </h2>
          
          <div className="flex items-center gap-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <span className="text-2xl mb-1">{topic.icon}</span>
                </div>
                <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {topic.count}
                </span>
                <p className="mt-2 text-xs text-center text-gray-700 font-medium">{topic.name}</p>
              </div>
            ))}
            <div className="flex items-center gap-2 ml-4">
              <span className="text-gray-400">or...</span>
              <button className="px-6 py-2 text-sm font-medium text-white bg-pink-400 rounded-md hover:bg-pink-500">
                Explore All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            {/* Left Sidebar */}
            <div className="w-64 flex-shrink-0">
              {/* About Me */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">🌸 About Me</h3>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-pink-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Jonathan Doe</p>
                      <p className="text-xs text-gray-500">Founder & Editor</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Hello! My name is Jonathan Doe!. Actively writing articles for this website. I really like tutorials and illustrations, so stay alert for my next tutorials.
                  </p>

                  <div className="flex gap-3 text-sm">
                    <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-pink-400">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                    <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-pink-400">
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-pink-400">
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                  </div>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">🌸 Tag Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-xs text-gray-600 bg-white rounded-full shadow-sm hover:bg-pink-50 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">🌸 Recent Posts</h3>
                <div className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex gap-3 cursor-pointer group">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-orange-300 rounded flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-pink-400 line-clamp-2">
                          {post.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">📅 {post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="flex-1">
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex gap-6 bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-br from-pink-200 via-purple-200 to-orange-300 rounded-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <span className="absolute top-2 left-2 px-3 py-1 text-xs font-medium text-white bg-purple-500 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-400 cursor-pointer">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              📅 {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              ⏱️ {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              ⭐ Rating
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < post.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {post.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-gray-600">
                              + {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-pink-200 rounded-full"></div>
                          <span className="text-xs text-gray-600">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Site Button */}
      <div className="fixed bottom-8 left-8">
        <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <span className="text-lg">↗️</span>
          <span className="font-semibold text-gray-800">Visit site</span>
        </button>
      </div>

      {/* Search Button */}
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Search className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}

export default App;