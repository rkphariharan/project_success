import { Car, Wrench, Zap, Settings, Shield, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const carBrands = [
    { name: 'Maruti Suzuki', category: 'mid' },
    { name: 'Tata Motors', category: 'mid' },
    { name: 'Hyundai', category: 'mid' },
    { name: 'Kia', category: 'mid' },
    { name: 'Mahindra', category: 'mid' },
    { name: 'BMW', category: 'premium' },
    { name: 'Audi', category: 'premium' },
    { name: 'Mercedes-Benz', category: 'premium' },
    { name: 'Jaguar', category: 'premium' },
    { name: 'Range Rover', category: 'premium' },
  ];

  const services = [
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Mechanical Services',
      description: 'Complete mechanical repairs and maintenance for all car makes and models',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Electrical Diagnostics',
      description: 'Advanced electrical system diagnostics and repairs using latest equipment',
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'ECM Updates & Debug',
      description: 'Engine Control Module programming, updates, and debugging services',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Premium Care',
      description: 'Specialized care for luxury and premium vehicles with OEM parts',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold text-white">Premium Auto Care</h1>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition">Services</a>
            <a href="#brands" className="text-gray-300 hover:text-purple-400 transition">Brands</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full">
            <span className="text-purple-300 text-sm font-semibold">🏆 Premium Car Service Excellence</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Where Precision Meets
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
              Performance
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            India's most trusted service center for mid-range and premium vehicles.
            Expert mechanical and electrical services with cutting-edge diagnostics.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 transition transform hover:scale-105">
              Book Service Now
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg border border-purple-500/30 transition">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">5000+</div>
              <div className="text-gray-300">Cars Serviced</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-amber-400 mb-2">98%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Automotive Solutions
            </h2>
            <p className="text-gray-400 text-lg">State-of-the-art equipment and certified technicians</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/50 transition transform hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section id="brands" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Brands We Service
            </h2>
            <p className="text-gray-400 text-lg">From everyday drives to luxury rides</p>
          </div>

          {/* Mid-Range Brands */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Mid-Range Vehicles</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {carBrands.filter(b => b.category === 'mid').map((brand, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-lg p-6 flex items-center justify-center hover:border-purple-400/50 transition"
                >
                  <span className="text-white font-semibold text-center">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Brands */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">Premium & Luxury</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {carBrands.filter(b => b.category === 'premium').map((brand, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 backdrop-blur border border-amber-500/30 rounded-lg p-6 flex items-center justify-center hover:border-amber-400/50 transition"
                >
                  <span className="text-white font-semibold text-center">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Turnaround</h3>
              <p className="text-gray-400">Most services completed within 24-48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Genuine Parts</h3>
              <p className="text-gray-400">Only OEM and certified aftermarket parts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Latest Technology</h3>
              <p className="text-gray-400">Advanced diagnostic and repair equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">service@premiumauto.in</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20 bg-slate-900/80">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2026 Premium Auto Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
