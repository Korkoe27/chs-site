import React, { useState } from 'react';
import { Camera, Building, Users, BookOpen, Award, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'facilities', name: 'Facilities', icon: Building },
    { id: 'students', name: 'Student Life', icon: Users },
    { id: 'academics', name: 'Academics', icon: BookOpen },
    { id: 'events', name: 'Events', icon: Award }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Modern School Building',
      category: 'facilities',
      description: 'Our beautiful 40-room school complex with modern architecture'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Computer Laboratory',
      category: 'facilities',
      description: 'Ultra-modern computer lab with 30 computers and broadband internet'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Creative Learning Session',
      category: 'academics',
      description: 'Students engaged in creative arts and learning activities'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Happy Students',
      category: 'students',
      description: 'Our joyful students during break time'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Classroom Learning',
      category: 'academics',
      description: 'Interactive classroom sessions with experienced teachers'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Library Reading',
      category: 'facilities',
      description: 'Well-equipped library with over 2500 volumes of books'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'School Gardens',
      category: 'facilities',
      description: 'Beautiful landscaped gardens surrounding our school'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Science Laboratory',
      category: 'facilities',
      description: 'Modern science lab for hands-on learning experiences'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Sports Day',
      category: 'events',
      description: 'Annual sports day celebration with students and parents'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Graduation Ceremony',
      category: 'events',
      description: 'Proud graduates at our annual graduation ceremony'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Music Lessons',
      category: 'academics',
      description: 'Students learning music as part of our co-curricular activities'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Group Study',
      category: 'students',
      description: 'Students collaborating in group study sessions'
    }
  ];

  const facilities = [
    {
      name: 'Computer Laboratory',
      description: 'Ultra-modern computer lab with 30 computers and broadband internet access',
      image: 'https://images.pexels.com/photos/8471668/pexels-photo-8471668.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      name: 'Library',
      description: 'Well-equipped library with over 2500 volumes of books',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      name: 'Science Laboratory',
      description: 'Modern science lab for hands-on learning and experiments',
      image: 'https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      name: 'Home Economics Kitchen',
      description: 'Well-equipped kitchen for home economics practicals',
      image: 'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      name: 'Spacious Classrooms',
      description: '40 self-contained spacious classrooms with modern amenities',
      image: 'https://images.pexels.com/photos/8613068/pexels-photo-8613068.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      name: 'School Gardens',
      description: 'Attractive and well-tendered gardens with beautiful landscape',
      image: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-8">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Gallery</h1>
            <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Explore our beautiful campus, facilities, and vibrant school life through our photo gallery
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              State-of-the-art facilities designed to provide the best learning environment for our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white border-2 border-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(facility.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Browse through our collection of photos showcasing school life and activities
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-600'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;