import React, { useState } from 'react';
import { Plane, Book, Navigation, Wrench, Users, Calendar, Mail, Phone, Globe, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-800" />
              <span className="ml-2 text-xl font-bold text-blue-800">Irani Aviation Classes</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-800">Features</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-800">Courses</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Home</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Features</a>
              <a href="#courses" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Courses</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-800">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Study to Become a Pilot</h1>
              <p className="text-lg mb-8">
                Embark on your aviation career journey with expert coaching and comprehensive training programs from Capt. Yazad Irani, a seasoned Airbus A320 Captain.
              </p>
              <div className="bg-yellow-400 text-blue-900 inline-block px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
                Start Your Journey
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1559067515-bf7d799b6d4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Aircraft cockpit" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">8 Years Teaching</h3>
              <p className="text-gray-600">Extensive experience in aviation education</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Plane className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">4000+ Flight Hours</h3>
              <p className="text-gray-600">On AIRBUS aircraft</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">International Experience</h3>
              <p className="text-gray-600">8 years of international airline experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Course Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Book className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Regulations</h3>
                  <p className="text-gray-600">Comprehensive aviation regulations training</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Navigation className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Navigation</h3>
                  <p className="text-gray-600">Advanced navigation techniques and systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wrench className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Technical</h3>
                  <p className="text-gray-600">In-depth technical knowledge and training</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-gray-600">Comprehensive interview coaching</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Pre Type Rating Coaching</h3>
                  <p className="text-gray-600">Specialized preparation for type ratings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Book className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">CASS / COMPASS / ADAPT</h3>
                  <p className="text-gray-600">Comprehensive test preparation</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Aircraft on runway" 
                className="rounded-lg shadow-lg mb-6"
              />
              <div className="bg-blue-800 text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Online & Offline Classes Available</h3>
                <p>We can also help with accommodation for out station students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 8806262438</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">Irani.avaition.classes@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <Plane className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Irani Aviation Classes</span>
          </div>
          <p className="text-gray-400">Your journey to becoming a pilot starts here</p>
        </div>
      </footer>
    </div>
  );
}

export default App;