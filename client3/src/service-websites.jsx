import React, { useState, useEffect ,useRef} from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.png";
import { FaChevronDown } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
const ServiceWebsites = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      // Handle service selection
    const handleServiceSelect = (path) => {
      navigate(path);
      setIsServicesOpen(false);
      setIsMenuOpen(false);
    };
  const heroRef = useRef(null);
      const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
     const menuItems = [
        "Our Services",
        "Our Products",
        "Our Work",
        "Industries",
        "The Agency",
      ];  useEffect(()=>{
          AOS.init({duration:800});
        },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
 
  const handleChangeSelection=(e)=>{
  const selectedValue=e.target.value;
  if(selectedValue){
    navigate(selectedValue);
  }
  };
const serviceItems = [
    { name: 'Website Design', path: '/webdesign' },
    {name:'Lead Generation',path:'/lead'},
    {name:'Go High Level CRM',path:'/gohigh'},
    {name:'Ai Agents/Automation Development',path:'/ai'},

    {name:'White Label Marketing',path:'/whitelabel'},

   
    {name:'Digital Marketing',path:'/digitalmarketing'},
    {name:'Managed Hosting',path:'/hosting'},



    {name:'Conversion Rate Optimization',path:'/conversionrate'},

    {name:'Service Website',path:'/service-site'},
    {name:'Meta Ads Management',path:'/metaads'},

    {name:'Search Engine Optimisation',path:'/seo'},

    {name:'Branding & Logo Design',path:'/branding&logodesign'},

    {name:'ECommerce Websites',path:'/ecommerce'},

    {name:'Google Ads Management',path:'/googleads'},




    
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'Space Mono', monospace;
        }
        
        .heading-font {
          font-family: 'Playfair Display', serif;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #059669 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(5, 150, 105, 0.25);
        }
        
        .pattern-bg {
          background-image: 
            linear-gradient(30deg, #d1fae5 12%, transparent 12.5%, transparent 87%, #d1fae5 87.5%, #d1fae5),
            linear-gradient(150deg, #d1fae5 12%, transparent 12.5%, transparent 87%, #d1fae5 87.5%, #d1fae5),
            linear-gradient(30deg, #d1fae5 12%, transparent 12.5%, transparent 87%, #d1fae5 87.5%, #d1fae5),
            linear-gradient(150deg, #d1fae5 12%, transparent 12.5%, transparent 87%, #d1fae5 87.5%, #d1fae5);
          background-size: 80px 140px;
          background-position: 0 0, 0 0, 40px 70px, 40px 70px;
          opacity: 0.3;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
     {/* Header */}
  <header className="relative z-50 w-full bg-[#f7f7f7] py-4" data-aos="slide-down">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex items-center justify-between rounded-2xl bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-md">
            {/* Logo */}
            <div onClick ={()=>{navigate('/')}}className="flex items-center gap-2">
              <img
                src={image6}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Menu - Desktop */}
            <ul className="hidden z-50 lg:flex  items-center gap-4 xl:gap-8 text-sm xl:text-[15px] font-medium text-gray-700">
              <li className="group relative cursor-pointer z-50">
                  <div onClick={()=>{navigate('/')}}className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                    Home
                    
                  </div>

                </li>
                <li>
                 <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center font-medium transition-colors hover:text-gray-700 ${
                    serviceItems.some(item => location.pathname === item.path)
                      ? 'text-gray-700'
                      : 'text-gray-700'
                  }`}
                >
                  Services
                  <FaChevronDown className={`ml-2 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden"
                      
                    >
                      {serviceItems.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceSelect(service.path)}
                          className="block w-full text-left px-4 py-3 hover:bg-gray-50 hover:text-primary-600 transition-colors text-gray-700 font-medium"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                </li>
                
                
                 <li onClick={()=>{navigate('/contact')}}className="group relative cursor-pointer">
                  <div className="flex items-center gap-1 hover:text-black whitespace-nowrap">
                   Contact us 
                    
                  </div>

        
                </li>
      
            </ul>

            {/* CTA Button */}
            <button className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28] whitespace-nowrap" onClick={()=>{navigate('/contact')}}>
              Get Started Now <span><ArrowRightCircle size={18} className='text-black'/></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl p-4 shadow-lg">
              <ul className="cursor-pointer space-y-3">
                 <li  onClick={()=>{navigate('/')}}className="py-2 border-b border-gray-100">
                   Home
                  </li>
               
                  <li className="py-2 border-b border-gray-100">
                <div className="py-3 ">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-primary-600"
                  >
                    <span>Services</span>
                    <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {serviceItems.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleServiceSelect(service.path)}
                              className="block w-full text-left py-2 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-600 text-gray-600 font-medium"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                  </li>
              
                <li>
                  <li  onClick={()=>{navigate('/contact')}}className="py-2 border-b border-gray-100">
                  Contact
                  </li>
                  <button className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28]" onClick={()=>{navigate('/contact')}}>
                    Get Started Now <ArrowRightCircle size={18} className='text-black'/>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="pattern-bg absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
          <div className="text-center fade-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 border-2 border-emerald-600 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-emerald-600 rounded-full pulse-slow"></div>
              <span className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wider">SERVICE WEBSITES</span>
            </div>
            <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-emerald-900 mb-4 sm:mb-6 leading-tight">
              Your Digital
              <span className="block gradient-text">Storefront</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-700 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your service business into a powerful online presence that attracts, engages, and converts visitors into loyal customers.
            </p>
          </div>
          
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 fade-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl p-6 sm:p-8 card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 float-animation">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-emerald-900 mb-2 sm:mb-3">Lightning Fast</h3>
              <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">Built with cutting-edge technology for blazing-fast load times and seamless user experiences.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 float-animation" style={{animationDelay: '1s'}}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-emerald-900 mb-2 sm:mb-3">Mobile First</h3>
              <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">Perfectly optimized for every device, ensuring your customers have a flawless experience anywhere.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border-2 border-emerald-600 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 float-animation" style={{animationDelay: '2s'}}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-emerald-900 mb-2 sm:mb-3">Secure & Reliable</h3>
              <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">Enterprise-grade security and 99.9% uptime guarantee to keep your business running smoothly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build Section */}
      <div className="bg-emerald-900 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-up">
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              What We Build
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
              Every service website we create is custom-designed to showcase your unique value proposition and convert visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="fade-up">
              <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-emerald-400 h-full card-hover">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-emerald-900">01</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Professional Services</h3>
                    <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                      Websites for consultants, lawyers, accountants, architects, and other professional service providers. Showcase your expertise, credentials, and case studies with elegant, trust-building designs that position you as the authority in your field.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Portfolio & case study showcases</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Client testimonial integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Professional credential displays</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Consultation booking systems</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-teal-400 h-full card-hover">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-teal-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-teal-900">02</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Home Services</h3>
                    <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
                      Perfect for plumbers, electricians, landscapers, cleaners, and home improvement professionals. Generate leads with service area maps, online booking, before/after galleries, and emergency contact features that drive immediate action.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-teal-100">Service area mapping & targeting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-teal-100">Real-time booking & scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-teal-100">Before/after project galleries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-teal-100">Emergency contact features</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-cyan-900 to-emerald-900 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-cyan-400 h-full card-hover">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-cyan-900">03</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">Healthcare & Wellness</h3>
                    <p className="text-sm sm:text-base text-cyan-100 leading-relaxed">
                      Websites for doctors, dentists, therapists, fitness trainers, and wellness centers. HIPAA-compliant patient portals, appointment scheduling, service descriptions, insurance information, and health resources that prioritize trust and accessibility.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-cyan-100">HIPAA-compliant patient portals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-cyan-100">Online appointment scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-cyan-100">Insurance & billing information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-cyan-100">Health resources & education</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-emerald-800 to-cyan-900 rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-emerald-400 h-full card-hover">
                <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400 rounded-xl flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-black text-emerald-900">04</span>
                  </div>
                  <div>
                    <h3 className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">B2B Services</h3>
                    <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                      Designed for agencies, SaaS companies, consulting firms, and business service providers. Lead generation focused designs with detailed service pages, pricing calculators, resource libraries, and demo request systems that nurture prospects through the sales funnel.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 ml-0 sm:ml-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Lead capture & qualification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Interactive pricing calculators</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Resource libraries & whitepapers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm sm:text-base text-emerald-100">Demo & consultation booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Deep Dive */}
      <div className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-up">
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-emerald-900 mb-4 sm:mb-6">
              Built For Performance
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Every website we create is engineered with features that drive real business results
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {/* Feature 1 */}
            <div className="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-4 bg-white/30 rounded"></div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="flex-1 h-4 bg-white/30 rounded"></div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          <div className="flex-1 h-4 bg-white/30 rounded"></div>
                        </div>
                        <div className="mt-8 bg-white/20 rounded-xl p-4">
                          <div className="text-white font-bold text-sm mb-2">Performance Score</div>
                          <div className="text-4xl sm:text-5xl font-black text-white">98/100</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-emerald-100 border-2 border-emerald-600 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wider">SPEED OPTIMIZED</span>
                  </div>
                  <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-900 mb-4 sm:mb-6">
                    Lightning-Fast Load Times
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-700 mb-6 sm:mb-8 leading-relaxed">
                    Your website loads in under 2 seconds, guaranteed. We optimize every image, minimize code, and leverage advanced caching techniques to ensure your visitors never wait. Fast websites rank higher in search engines and convert better—it's that simple.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Advanced Image Optimization</p>
                        <p className="text-sm sm:text-base text-emerald-700">Automatic compression and next-gen formats (WebP, AVIF)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Global CDN Distribution</p>
                        <p className="text-sm sm:text-base text-emerald-700">Content delivered from servers closest to your visitors</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Code Splitting & Lazy Loading</p>
                        <p className="text-sm sm:text-base text-emerald-700">Only load what's needed, when it's needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <div className="inline-block bg-teal-100 border-2 border-teal-600 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-bold text-teal-900 tracking-wider">CONVERSION FOCUSED</span>
                  </div>
                  <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-900 mb-4 sm:mb-6">
                    Strategic Call-to-Actions
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-700 mb-6 sm:mb-8 leading-relaxed">
                    Every element on your website is designed with one goal: converting visitors into customers. From strategically placed contact forms to compelling service descriptions, we craft user journeys that guide prospects toward taking action. Our conversion-optimized designs can increase your lead generation by up to 300%.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-600 rounded-xl p-4 sm:p-6">
                      <div className="text-2xl sm:text-3xl font-black text-teal-900 mb-2">45%</div>
                      <p className="text-xs sm:text-sm text-teal-700 font-bold">Average increase in form submissions</p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 border-2 border-cyan-600 rounded-xl p-4 sm:p-6">
                      <div className="text-2xl sm:text-3xl font-black text-cyan-900 mb-2">3.2x</div>
                      <p className="text-xs sm:text-sm text-cyan-700 font-bold">More qualified leads generated</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm sm:text-base font-bold text-gray-900">Get a Free Quote</span>
                          <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                      </div>
                      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm sm:text-base font-bold text-gray-900">Schedule Consultation</span>
                          <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                      </div>
                      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg card-hover">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm sm:text-base font-bold text-gray-900">Contact Us Today</span>
                          <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="fade-up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                      <div className="bg-white/90 rounded-xl aspect-square flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                      </div>
                      <div className="bg-white/90 rounded-xl aspect-square flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="bg-white/90 rounded-xl aspect-square flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-12 sm:h-12 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="col-span-3 bg-white/90 rounded-xl p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs sm:text-sm font-bold text-gray-700">Mobile Traffic</span>
                          <span className="text-base sm:text-lg font-black text-emerald-600">78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block bg-cyan-100 border-2 border-cyan-600 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-bold text-cyan-900 tracking-wider">RESPONSIVE DESIGN</span>
                  </div>
                  <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-900 mb-4 sm:mb-6">
                    Perfect On Every Device
                  </h3>
                  <p className="text-base sm:text-lg text-emerald-700 mb-6 sm:mb-8 leading-relaxed">
                    With over 60% of web traffic coming from mobile devices, your website must look and function flawlessly on smartphones, tablets, and desktops. Our mobile-first approach ensures pixel-perfect experiences across all screen sizes, with touch-optimized interfaces and intuitive navigation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Mobile-First Development</p>
                        <p className="text-sm sm:text-base text-emerald-700">Designed for smartphones first, then scaled up</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Touch-Optimized Interface</p>
                        <p className="text-sm sm:text-base text-emerald-700">Buttons and forms sized perfectly for fingers</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-emerald-900">Cross-Browser Compatibility</p>
                        <p className="text-sm sm:text-base text-emerald-700">Works perfectly in Chrome, Safari, Firefox, and Edge</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-up">
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Built To Be Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
              Beautiful design means nothing if customers can't find you. Every website includes comprehensive SEO optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 card-hover">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Keyword Research</h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                We identify the exact search terms your potential customers use and optimize your content to rank for them. Comprehensive keyword analysis and competitive research included.
              </p>
            </div>

            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-teal-400 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Meta Optimization</h3>
              <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
                Compelling title tags, meta descriptions, and structured data markup that make your listings stand out in search results and drive higher click-through rates.
              </p>
            </div>

            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Local SEO</h3>
              <p className="text-sm sm:text-base text-cyan-100 leading-relaxed">
                Google Business Profile optimization, local citations, and geo-targeted content that helps you dominate search results in your service area and attract nearby customers.
              </p>
            </div>

            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Technical SEO</h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                Clean code structure, proper heading hierarchy, XML sitemaps, robots.txt optimization, and schema markup that search engines love. Technical excellence as standard.
              </p>
            </div>

            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-teal-400 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-teal-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Image SEO</h3>
              <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
                Optimized alt text, file names, and compression for every image. Makes your visuals discoverable in image search and improves overall page performance and rankings.
              </p>
            </div>

            <div className="fade-up bg-white/10 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 card-hover" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-400 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="heading-font text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Content Strategy</h3>
              <p className="text-sm sm:text-base text-cyan-100 leading-relaxed">
                Strategic content planning that targets buyer intent at every stage. Service pages, blog posts, and resources designed to answer questions and build authority in your niche.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-up">
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-emerald-900 mb-4 sm:mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              We build with the latest, most reliable technologies to ensure your website is fast, secure, and scalable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { name: 'React', color: 'from-blue-500 to-cyan-500' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { name: 'WordPress', color: 'from-blue-600 to-blue-800' },
              { name: 'Tailwind CSS', color: 'from-teal-500 to-emerald-500' },
              { name: 'Node.js', color: 'from-green-600 to-emerald-600' },
              { name: 'PostgreSQL', color: 'from-blue-700 to-indigo-700' },
              { name: 'AWS', color: 'from-orange-500 to-amber-600' },
              { name: 'Cloudflare', color: 'from-orange-600 to-red-600' },
            ].map((tech, index) => (
              <div key={index} className="fade-up card-hover" style={{animationDelay: `${index * 0.05}s`}}>
                <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-6 sm:p-8 shadow-lg`}>
                  <h3 className="heading-font text-lg sm:text-xl lg:text-2xl font-bold text-white text-center">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-600 rounded-3xl p-6 sm:p-8 lg:p-12 fade-up">
            <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-900 mb-6 sm:mb-8 text-center">
              Why Our Tech Stack Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-2">Future-Proof Architecture</h4>
                    <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">
                      Built with modern frameworks that are actively maintained and continuously improved, ensuring your website stays current for years to come.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-2">Enterprise-Grade Security</h4>
                    <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">
                      Industry-standard security practices, SSL encryption, regular updates, and protection against common vulnerabilities keep your data and your customers safe.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-2">Scalable Infrastructure</h4>
                    <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">
                      Cloud-based hosting that grows with your business. Handle traffic spikes effortlessly without performance degradation or downtime.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900 text-base sm:text-lg mb-2">Easy Content Management</h4>
                    <p className="text-sm sm:text-base text-emerald-700 leading-relaxed">
                      Intuitive CMS systems that let you update content, add pages, and manage your website without technical knowledge or developer assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-up">
            <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              Our Development Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-200 max-w-3xl mx-auto leading-relaxed">
              A proven, transparent workflow that delivers exceptional results on time and on budget
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-400/30 h-full"></div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-24">
              {/* Step 1 */}
              <div className="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="lg:text-right">
                    <div className="inline-block lg:inline bg-emerald-100 border-2 border-emerald-400 rounded-full px-4 sm:px-6 py-2 mb-4">
                      <span className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wider">WEEK 1</span>
                    </div>
                    <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                      Discovery & Strategy
                    </h3>
                    <p className="text-base sm:text-lg text-emerald-100 leading-relaxed mb-4 sm:mb-6">
                      We start by understanding your business, target audience, competitors, and goals. Through in-depth consultations and research, we develop a comprehensive strategy tailored to your unique needs.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-emerald-200">Competitor analysis</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-emerald-200">Target audience research</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-emerald-200">Content strategy planning</span>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 card-hover">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl sm:text-3xl font-black text-emerald-900">1</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 bg-white/20 rounded-full w-full"></div>
                        <div className="h-3 bg-white/20 rounded-full w-4/5"></div>
                        <div className="h-3 bg-white/20 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="inline-block bg-teal-100 border-2 border-teal-400 rounded-full px-4 sm:px-6 py-2 mb-4">
                      <span className="text-xs sm:text-sm font-bold text-teal-900 tracking-wider">WEEK 2-3</span>
                    </div>
                    <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                      Design & Wireframing
                    </h3>
                    <p className="text-base sm:text-lg text-teal-100 leading-relaxed mb-4 sm:mb-6">
                      Our designers create custom mockups and wireframes that bring your vision to life. You'll see exactly how your website will look before we write a single line of code, with unlimited revisions until it's perfect.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-teal-200">Custom design mockups</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-teal-200">User flow optimization</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-teal-200">Brand identity integration</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1 lg:pr-12">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-teal-400 rounded-2xl p-6 sm:p-8 card-hover">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl sm:text-3xl font-black text-teal-900">2</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square bg-white/20 rounded-lg"></div>
                        <div className="aspect-square bg-white/20 rounded-lg"></div>
                        <div className="aspect-square bg-white/20 rounded-lg"></div>
                        <div className="aspect-square bg-white/20 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="lg:text-right">
                    <div className="inline-block lg:inline bg-cyan-100 border-2 border-cyan-400 rounded-full px-4 sm:px-6 py-2 mb-4">
                      <span className="text-xs sm:text-sm font-bold text-cyan-900 tracking-wider">WEEK 4-6</span>
                    </div>
                    <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                      Development & Testing
                    </h3>
                    <p className="text-base sm:text-lg text-cyan-100 leading-relaxed mb-4 sm:mb-6">
                      Our developers transform designs into a fully functional website using clean, efficient code. Rigorous testing across all devices and browsers ensures everything works flawlessly before launch.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-cyan-200">Clean, maintainable code</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-cyan-200">Cross-device testing</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <span className="text-sm sm:text-base text-cyan-200">Performance optimization</span>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 card-hover">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl sm:text-3xl font-black text-cyan-900">3</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-2 bg-white/20 rounded"></div>
                          <span className="text-xs text-white/60">100%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-2 bg-white/20 rounded"></div>
                          <span className="text-xs text-white/60">100%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-2 bg-white/20 rounded"></div>
                          <span className="text-xs text-white/60">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="inline-block bg-emerald-100 border-2 border-emerald-400 rounded-full px-4 sm:px-6 py-2 mb-4">
                      <span className="text-xs sm:text-sm font-bold text-emerald-900 tracking-wider">WEEK 7</span>
                    </div>
                    <h3 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
                      Launch & Support
                    </h3>
                    <p className="text-base sm:text-lg text-emerald-100 leading-relaxed mb-4 sm:mb-6">
                      We handle every aspect of the launch, from domain setup to SSL configuration. Post-launch, we provide comprehensive training and ongoing support to ensure your continued success.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-emerald-200">Seamless deployment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-emerald-200">CMS training & documentation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm sm:text-base text-emerald-200">30-day support guarantee</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1 lg:pr-12">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-6 sm:p-8 card-hover">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4 text-center">
                        <div className="text-white font-bold mb-2">Website Status</div>
                        <div className="text-3xl font-black text-green-400">LIVE ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
          <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-emerald-900 mb-4 sm:mb-6">
            Ready To Transform Your
            <span className="block gradient-text">Online Presence?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-emerald-700 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of service businesses that have grown their customer base with a professional website from Growth Flow Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-700" onClick={()=>navigate('/contact')}>
              Get Your Free Quote
            </button>
           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServiceWebsites;