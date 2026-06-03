import React from 'react';
import { useEffect, useState } from 'react';
import image10 from "../images/logo.jpg";
import { FaChevronDown } from 'react-icons/fa';
import image6 from '../images/logo.jpg'
import {Menu,ChevronDown,ChevronRight,ArrowRightCircle,Phone,Mail, MapPin, Clock }from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import {  Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
export default function Contact() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      // Handle service selection
    const handleServiceSelect = (path) => {
      navigate(path);
      setIsServicesOpen(false);
      setIsMenuOpen(false);
    };
    const menuItems = [
            "Our Services",
            "Our Products",
            "Our Work",
            "Industries",
            "The Agency",
          ];
          useEffect(()=>{
            AOS.init({duration:800});
          },[]);
          const navigate=useNavigate();
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
           const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
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
      {/* Contact Us Section - Professional Contact Form */}
<section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-20 blur-3xl"></div>
 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
      <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
        📞 GET IN TOUCH
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Ready to <span className="text-orange-500">Grow Your Business?</span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Have a project in mind? We'd love to hear about it. Let's discuss how we can help you achieve your goals.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left Side - Contact Information & Benefits */}
      <div data-aos="fade-right" className="space-y-8">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
          
            <a href="tel:1800285527" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-lg">
              1800 285 527
            </a>
            
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
         
            <a href="mailto:support@growthflowmedia.com" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm break-all">
              support@growthflowmedia.com
            </a>
           
          </div>
        </div>

       

        {/* Business Hours */}
       
        {/* Social Connect */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Facebook />, color: 'bg-blue-600', hover: 'bg-blue-700', label: 'Facebook' },
              { icon: <Twitter />, color: 'bg-sky-500', hover: 'bg-sky-600', label: 'Twitter' },
              { icon: <Instagram />, color: 'bg-pink-600', hover: 'bg-pink-700', label: 'Instagram' },
              { icon: <Linkedin />, color: 'bg-blue-700', hover: 'bg-blue-800', label: 'LinkedIn' },
              { icon: <Youtube />, color: 'bg-red-600', hover: 'bg-red-700', label: 'YouTube' },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-10 h-10 ${social.color} hover:${social.hover} rounded-lg flex items-center justify-center text-white transition-all transform hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div data-aos="fade-left" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
        <h1 className="text-3xl sm:text-4xl text-orange-500  md:text-5xl font-bold mb-4">Contact Us</h1>
         <div data-aos="slide-right" className="bg-black border rounded-lg p-4 sm:p-6 lg:p-8 mt-8 md:mt-0">
                      
                      <div className="flex items-center gap-2 mb-4 sm:mb-6">
                        <img
                          src={image10}
                          alt="Growth Flow Media"
                          className="h-12 sm:h-16 lg:h-20 w-auto "
                        />
                      </div>
        
                      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                   
                      
                         <input
                          type="tel"
                          placeholder="Prefered call back time"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-500 text-sm sm:text-base"
                        />
                      </div>
        
                      <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">How We May Help You?</p>
        
                      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-h-60 overflow-y-auto pr-2">
                        {[
                          'Website Design',
            'ECommerce Websites',
            'Service Website',
            'Branding & Logo Design',
            'Digital Marketing',
            'Search Engine Optimisation',
            'Google Ads Management',
            'Meta Ads Management',
            'Content Marketing',
            'Conversion Rate Optimization',
            'Managed Hosting',
            'Go High Level CRM',
            'Ai Agents/Automation Development',
            'White Label Marketing',
            'Lead Generation'
                        ].map((option, i) => (
                          <label key={i} className="flex items-center gap-3 bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 rounded cursor-pointer hover:bg-gray-800">
                            <input type="radio" name="service" className="w-4 h-4" />
                            <span className="text-black text-xs sm:text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
        
                      <button className="w-full bg-orange-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-orange-600 text-base sm:text-lg">
                        Submit Request
                      </button>
                    </div>
            

          


       
      </div>
    </div>


  </div>
</section>
<Footer/>
    </div>
  )
}
