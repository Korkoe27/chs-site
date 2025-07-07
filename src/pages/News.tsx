import React from 'react';
import { Calendar, Clock, User, ArrowRight, Newspaper, Award, Users, BookOpen } from 'lucide-react';

const News: React.FC = () => {
  const featuredNews = {
    id: 1,
    title: 'Calvary Hillcrest Schools Wins Regional Science Competition',
    excerpt: 'Our JHS 3 students brought home the first prize in the Central Region Science and Mathematics Competition, showcasing exceptional talent and dedication.',
    content: 'In a remarkable display of academic excellence, students from Calvary Hillcrest Schools emerged victorious in the Central Region Science and Mathematics Competition held at the University of Cape Coast. The team, comprising five JHS 3 students, competed against 25 other schools from across the region.',
    image: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    date: '2024-03-15',
    author: 'School Administration',
    category: 'Academic Achievement',
    readTime: '3 min read'
  };

  const newsArticles = [
    {
      id: 2,
      title: 'New Computer Laboratory Officially Opened',
      excerpt: 'State-of-the-art computer lab with 30 new computers and high-speed internet connectivity now available for all students.',
      image: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-03-10',
      author: 'Mr. Paul Essandoh',
      category: 'Infrastructure',
      readTime: '2 min read'
    },
    {
      id: 3,
      title: 'Annual Sports Day Celebration',
      excerpt: 'Students, parents, and teachers came together for our annual sports day, featuring exciting competitions and team spirit.',
      image: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-03-05',
      author: 'Sports Department',
      category: 'School Events',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Parent-Teacher Conference Success',
      excerpt: 'Record attendance at our quarterly parent-teacher conference strengthens the school-home partnership.',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-02-28',
      author: 'Academic Office',
      category: 'Community',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'Library Expansion Project Completed',
      excerpt: 'Our library now houses over 2,500 books with new reading spaces and digital resources for enhanced learning.',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-02-20',
      author: 'Library Committee',
      category: 'Infrastructure',
      readTime: '2 min read'
    },
    {
      id: 6,
      title: 'Student Art Exhibition Opens',
      excerpt: 'Creative works by our talented students are now on display, showcasing artistic skills and imagination.',
      image: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-02-15',
      author: 'Arts Department',
      category: 'Student Activities',
      readTime: '3 min read'
    },
    {
      id: 7,
      title: 'Environmental Club Plants 100 Trees',
      excerpt: 'Our environmental club continues its green initiative by planting trees around the school compound.',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      date: '2024-02-10',
      author: 'Environmental Club',
      category: 'Environmental',
      readTime: '2 min read'
    }
  ];

  const categories = [
    { name: 'Academic Achievement', icon: Award, count: 8 },
    { name: 'School Events', icon: Users, count: 12 },
    { name: 'Infrastructure', icon: BookOpen, count: 5 },
    { name: 'Student Activities', icon: Users, count: 15 }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Academic Achievement': 'bg-green-100 text-green-800',
      'Infrastructure': 'bg-blue-100 text-blue-800',
      'School Events': 'bg-purple-100 text-purple-800',
      'Community': 'bg-orange-100 text-orange-800',
      'Student Activities': 'bg-pink-100 text-pink-800',
      'Environmental': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School News</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest news, events, and achievements from Calvary Hillcrest Schools
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredNews.category)}`}>
                    {featuredNews.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(featuredNews.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredNews.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredNews.content}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News Categories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count} articles</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-1 group">
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 p-3 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <Newspaper className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest news and updates from Calvary Hillcrest Schools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;