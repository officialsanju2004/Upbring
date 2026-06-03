import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.png";
import { FaChevronDown } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const WhiteLabelMarketing = () => {
    const navigate=useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
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
        ];  useEffect(()=>{
            AOS.init({duration:800});
          },[]);
          
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
    <>
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            White Label <span className="text-teal-600">Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your agency with our comprehensive white label marketing services delivered under your brand
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform transition-all hover:shadow-2xl duration-500">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Branded Marketing Solutions</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We provide fully white-labeled marketing services that allow your agency to offer comprehensive digital marketing solutions under your own brand name. Our team becomes your extended marketing department.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-bold text-teal-800 mb-2">Complete White Label</h4>
                  <p className="text-sm text-teal-700">All deliverables branded with your logo and identity</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-bold text-teal-800 mb-2">Direct Client Access</h4>
                  <p className="text-sm text-teal-700">Client-facing communication through your channels</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">White Label Services Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Digital Marketing</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>SEO & Content Marketing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Social Media Management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>PPC Campaign Management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">Creative Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Website Design & Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Brand Identity Design</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Video Production</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits for Your Agency</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Expand Service Offerings',
                    desc: 'Add premium services without overhead'
                  },
                  {
                    title: 'Increase Profit Margins',
                    desc: 'Higher margins with no staffing costs'
                  },
                  {
                    title: 'Scale Rapidly',
                    desc: 'Take on more clients without constraints'
                  },
                  {
                    title: 'Maintain Brand Control',
                    desc: 'All deliverables under your brand'
                  }
                ].map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-teal-50 transition-colors duration-200"
                  >
                    <div className="bg-teal-100 p-2 rounded-lg mr-4">
                      <span className="font-bold text-teal-800">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Portal Features</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">White-labeled dashboard</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Custom reporting tools</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-teal-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Direct communication channels</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Models */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Partnership Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project-Based</h3>
              <p className="text-gray-600 mb-6">Individual project collaboration with white label delivery</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Fixed project pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Complete brand control</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Flexible engagement</span>
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Retainer Model</h3>
              <p className="text-gray-600 mb-6">Monthly retainer for ongoing white label services</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Predictable monthly costs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Dedicated team</span>
                </li>
              </ul>
            </div>
           
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Service</h3>
              <p className="text-gray-600 mb-6">Comprehensive white label marketing department</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Full service portfolio</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">24/7 support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                  <span className="text-sm">Strategic partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Agency?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Partner with us to offer premium marketing services under your brand and accelerate your agency growth.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300" onClick={()=>navigate('/contact')}>
              Start White Label Partnership
            </button>
          </div>
        </div>
       
      </div>
    </div>
     <Footer/>
    </>
  );
};

export default WhiteLabelMarketing;