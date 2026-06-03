import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.jpg";
import AOS from "aos";
import { FaChevronDown } from 'react-icons/fa';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const GoogleAdsManagement = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      // Handle service selection
    const handleServiceSelect = (path) => {
      navigate(path);
      setIsServicesOpen(false);
      setIsMenuOpen(false);
    };
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
            entry.target.classList.add('slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
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
const handleChangeSelection=(e)=>{
const selectedValue=e.target.value;
if(selectedValue){
  navigate(selectedValue);
}
};
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Archivo+Black&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .display-font {
          font-family: 'Archivo Black', sans-serif;
        }
        
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }
        
        .slide-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center reveal-up">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-bold text-white tracking-wider">GOOGLE ADS CERTIFIED EXPERTS</span>
            </div>
            
            <h1 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              GET FOUND
              <span className="block text-yellow-400">GET RESULTS</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-12">
              Dominate Google search with expertly managed PPC campaigns that put your business at the top when customers are ready to buy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: '400%', label: 'Avg ROI' },
                { value: '2.3%', label: 'Conversion Rate' },
                { value: '24/7', label: 'Monitoring' },
                { value: '$5M+', label: 'Ad Spend Managed' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6">
                  <div className="display-font text-4xl text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Types */}
      <div className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Complete Google Ads Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We manage every type of Google Ads campaign to maximize your visibility and conversions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Search Ads',
                subtitle: 'Capture High-Intent Buyers',
                description: 'Appear at the top of Google search results when potential customers are actively looking for your products or services. Text ads optimized for maximum click-through and conversion rates.',
                features: [
                  'Keyword research & selection',
                  'Ad copy optimization',
                  'Bid management',
                  'Quality Score improvement',
                  'Negative keyword management',
                  'Ad extensions setup'
                ],
                color: 'blue'
              },
              {
                icon: '🎯',
                title: 'Display Ads',
                subtitle: 'Build Brand Awareness',
                description: 'Reach millions across the Google Display Network with eye-catching visual ads. Perfect for retargeting, brand awareness, and reaching new audiences at scale.',
                features: [
                  'Responsive display ads',
                  'Banner ad design',
                  'Audience targeting',
                  'Placement optimization',
                  'Remarketing campaigns',
                  'Creative A/B testing'
                ],
                color: 'purple'
              },
              {
                icon: '🛒',
                title: 'Shopping Ads',
                subtitle: 'Showcase Your Products',
                description: 'Drive e-commerce sales with product listing ads that show your items, prices, and store name right in search results. Optimized for maximum ROI on product sales.',
                features: [
                  'Product feed optimization',
                  'Smart Shopping campaigns',
                  'Merchant Center management',
                  'Competitive pricing strategy',
                  'Inventory management',
                  'Performance Max integration'
                ],
                color: 'green'
              },
              {
                icon: '📱',
                title: 'YouTube Ads',
                subtitle: 'Engage with Video',
                description: 'Reach audiences on the world\'s second-largest search engine. Video ads that drive awareness, consideration, and action across YouTube and Google video partners.',
                features: [
                  'Video ad production',
                  'TrueView campaigns',
                  'Bumper ads',
                  'Discovery ads',
                  'Audience targeting',
                  'View-through conversions'
                ],
                color: 'red'
              },
            ].map((campaign, idx) => (
              <div key={idx} className="reveal-up hover-lift bg-white rounded-3xl p-8 lg:p-10 shadow-lg" style={{transitionDelay: `${idx * 0.15}s`}}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-6xl">{campaign.icon}</div>
                  <div className="flex-1">
                    <h3 className="display-font text-3xl text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{campaign.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{campaign.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {campaign.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 lg:py-32 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Not all Google Ads agencies are created equal. Here's what sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Google Partner Status',
                description: 'We\'re certified Google Partners with proven expertise and direct access to Google support. Our team holds advanced certifications across all Google Ads platforms.',
                icon: '🏆'
              },
              {
                title: 'Data-Driven Decisions',
                description: 'Every optimization is backed by data. We use advanced analytics, conversion tracking, and attribution modeling to make informed decisions that improve your ROI.',
                icon: '📊'
              },
              {
                title: 'Transparent Reporting',
                description: 'No smoke and mirrors. You get full access to your campaigns and detailed reports showing exactly where your budget goes and what results you\'re getting.',
                icon: '📈'
              },
              {
                title: 'Industry Specialization',
                description: 'We\'ve managed successful campaigns across 50+ industries. We understand the unique challenges and opportunities in your market.',
                icon: '🎯'
              },
              {
                title: 'Conversion Focus',
                description: 'We don\'t optimize for clicks or impressions—we optimize for conversions. Our strategies are designed to drive real business results, not vanity metrics.',
                icon: '💰'
              },
              {
                title: 'Continuous Optimization',
                description: 'Google Ads requires constant attention. We monitor performance daily, test new strategies weekly, and refine campaigns continuously for maximum efficiency.',
                icon: '⚡'
              },
            ].map((benefit, idx) => (
              <div key={idx} className="reveal-up bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8" style={{transitionDelay: `${idx * 0.1}s`}}>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="display-font text-2xl text-white mb-3">{benefit.title}</h3>
                <p className="text-indigo-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6">
              Our PPC Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach that consistently delivers results
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-16">
              {[
                {
                  title: 'Account Audit & Strategy',
                  description: 'We begin with a comprehensive audit of your current campaigns (if any), analyze competitors, research keywords, and develop a custom strategy aligned with your goals and budget.',
                  duration: '1 Week'
                },
                {
                  title: 'Campaign Setup & Launch',
                  description: 'Meticulous campaign structure, ad group organization, keyword selection, ad copy creation, conversion tracking setup, and quality assurance before launch.',
                  duration: '1-2 Weeks'
                },
                {
                  title: 'Testing & Optimization',
                  description: 'A/B test ad copy, landing pages, bidding strategies, and targeting. Gather data to understand what works best for your specific audience.',
                  duration: '2-4 Weeks'
                },
                {
                  title: 'Scale & Refine',
                  description: 'Increase budgets on high-performing campaigns, expand successful keywords, explore new opportunities, and continuously refine for maximum efficiency.',
                  duration: 'Ongoing'
                },
              ].map((step, idx) => (
                <div key={idx} className="reveal-up" style={{transitionDelay: `${idx * 0.15}s`}}>
                  <div className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-10 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="display-font text-6xl text-blue-600">{String(idx + 1).padStart(2, '0')}</div>
                        <div className="text-sm font-bold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">{step.duration}</div>
                      </div>
                      <h3 className="display-font text-3xl text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="hidden lg:block w-20 h-20 bg-blue-600 rounded-full border-8 border-white shadow-lg flex-shrink-0"></div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="py-24 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-up">
            <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Advanced Optimization
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge techniques that maximize every dollar of your ad spend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Smart Bidding Strategies',
              'Automated Rules Engine',
              'Quality Score Optimization',
              'Audience Segmentation',
              'Remarketing & RLSA',
              'Competitive Analysis',
              'Landing Page Testing',
              'Call Tracking Integration',
              'Attribution Modeling',
              'Cross-Channel Attribution',
              'Dynamic Search Ads',
              'Performance Max Campaigns',
            ].map((feature, idx) => (
              <div key={idx} className="reveal-up bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover-lift" style={{transitionDelay: `${idx * 0.05}s`}}>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-semibold">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
          <h2 className="display-font text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Start Driving Results Today
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Get a free Google Ads audit and discover how much revenue you're leaving on the table
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>navigate('/contact')} className="bg-white text-blue-600 px-12 py-6 rounded-full display-font text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              LETS START
            </button>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default GoogleAdsManagement;
