import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.png";
import AOS from "aos";
import { FaChevronDown } from 'react-icons/fa';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const MetaAdsManagement = () => {
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
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: 'ROAS', value: '5.2x', desc: 'Return on Ad Spend' },
    { label: 'CTR', value: '3.8%', desc: 'Click-Through Rate' },
    { label: 'CPA', value: '-62%', desc: 'Cost Per Acquisition' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.pop').forEach(el => observer.observe(el));
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .brand-font {
          font-family: 'Montserrat', sans-serif;
        }
        
        .pop {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .pop-in {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes float-wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          75% { transform: translateY(10px) rotate(-2deg); }
        }
        
        .float-wave {
          animation: float-wave 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .stat-card {
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
      `}</style>
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
      <div className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/50 via-red-200/50 to-pink-200/50 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pop">
            <div className="inline-flex items-center space-x-2 bg-red-100 border-2 border-red-500 rounded-full px-6 py-3 mb-8">
              <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span className="text-sm font-bold text-red-900 tracking-wider">META ADS MANAGEMENT</span>
            </div>
            
            <h1 className="brand-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-6">
              Dominate Social
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Expert Facebook & Instagram advertising that turns scroll into sales. We create thumb-stopping ads that drive real business results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`stat-card bg-white rounded-2xl p-8 shadow-xl border-4 ${
                    activeMetric === idx ? 'border-red-500' : 'border-orange-200'
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-2">{metric.desc}</div>
                  <div className="brand-font text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-xs font-bold text-gray-600 tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Full-Service Meta Advertising
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your Meta ad campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Audience Targeting',
                description: 'Precision targeting using Meta\'s advanced audience tools. We identify and reach your ideal customers with laser-focused demographics, interests, and behaviors.',
                features: ['Custom audience building', 'Lookalike audiences', 'Interest targeting', 'Retargeting campaigns']
              },
              {
                icon: '🎨',
                title: 'Creative Development',
                description: 'Eye-catching ad creatives that stop the scroll. Professional graphics, compelling copy, and video content designed to convert.',
                features: ['Static image ads', 'Video ads & stories', 'Carousel ads', 'A/B testing creatives']
              },
              {
                icon: '📊',
                title: 'Campaign Strategy',
                description: 'Data-driven strategies aligned with your business goals. Whether it\'s brand awareness, leads, or sales, we optimize for what matters most.',
                features: ['Goal-based campaigns', 'Budget optimization', 'Funnel development', 'Conversion tracking']
              },
              {
                icon: '🔍',
                title: 'Analytics & Reporting',
                description: 'Comprehensive performance tracking and transparent reporting. Know exactly where your ad dollars go and what results they generate.',
                features: ['Weekly performance reports', 'ROI tracking', 'Attribution analysis', 'Competitor insights']
              },
              {
                icon: '⚡',
                title: 'Ad Optimization',
                description: 'Continuous testing and refinement to maximize performance. We constantly optimize bids, placements, and creatives for peak efficiency.',
                features: ['Bid strategy optimization', 'Placement testing', 'Schedule optimization', 'Budget allocation']
              },
              {
                icon: '🛒',
                title: 'E-commerce Integration',
                description: 'Seamless integration with your online store. Dynamic product ads, catalog management, and purchase optimization for maximum sales.',
                features: ['Product catalog sync', 'Dynamic product ads', 'Shopping campaigns', 'Cart abandonment']
              },
            ].map((service, idx) => (
              <div key={idx} className="pop bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-red-500" style={{transitionDelay: `${idx * 0.1}s`}}>
                <div className="text-5xl mb-4 float-wave" style={{animationDelay: `${idx * 0.2}s`}}>{service.icon}</div>
                <h3 className="brand-font text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Coverage */}
      <div className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Complete Meta Ecosystem
            </h2>
            <p className="text-xl text-gray-600">
              Advertise across all Meta platforms for maximum reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pop bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-6xl mb-6">📘</div>
              <h3 className="brand-font text-4xl font-black mb-4">Facebook Ads</h3>
              <p className="text-lg text-blue-100 mb-6">
                Reach 2.9 billion monthly active users with targeted campaigns across News Feed, Stories, Marketplace, and more.
              </p>
              <div className="space-y-3">
                {['News Feed ads', 'Facebook Stories', 'Marketplace ads', 'Right column placements', 'Video feeds', 'In-stream videos'].map((item, i) => (
                  <div key={i} className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pop bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 rounded-3xl p-12 text-white shadow-2xl" style={{transitionDelay: '0.2s'}}>
              <div className="text-6xl mb-6">📸</div>
              <h3 className="brand-font text-4xl font-black mb-4">Instagram Ads</h3>
              <p className="text-lg text-pink-100 mb-6">
                Connect with 1.4 billion users through visually stunning ads on the world's most engaging visual platform.
              </p>
              <div className="space-y-3">
                {['Instagram Feed', 'Instagram Stories', 'Reels ads', 'Explore page', 'Shopping ads', 'IGTV ads'].map((item, i) => (
                  <div key={i} className="flex items-center text-pink-100">
                    <div className="w-2 h-2 bg-pink-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pop bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-12 text-white shadow-2xl" style={{transitionDelay: '0.3s'}}>
              <div className="text-6xl mb-6">💬</div>
              <h3 className="brand-font text-4xl font-black mb-4">Messenger Ads</h3>
              <p className="text-lg text-blue-100 mb-6">
                Start conversations and drive engagement with interactive ads in Messenger, reaching people where they chat.
              </p>
              <div className="space-y-3">
                {['Messenger inbox ads', 'Sponsored messages', 'Click-to-Messenger', 'Stories ads', 'Chatbot integration', 'Lead generation'].map((item, i) => (
                  <div key={i} className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pop bg-gradient-to-br from-teal-500 to-green-600 rounded-3xl p-12 text-white shadow-2xl" style={{transitionDelay: '0.4s'}}>
              <div className="text-6xl mb-6">🌐</div>
              <h3 className="brand-font text-4xl font-black mb-4">Audience Network</h3>
              <p className="text-lg text-teal-100 mb-6">
                Extend your reach beyond Meta platforms to thousands of high-quality mobile apps and websites.
              </p>
              <div className="space-y-3">
                {['Mobile app ads', 'Banner ads', 'Interstitial ads', 'Native ads', 'Rewarded videos', 'In-article ads'].map((item, i) => (
                  <div key={i} className="flex items-center text-teal-100">
                    <div className="w-2 h-2 bg-teal-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 pop">
            <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology that delivers consistent results
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Strategy & Planning',
                description: 'We start with a deep dive into your business, goals, and target audience. Competitive analysis and market research inform our strategic approach.',
                color: 'from-orange-500 to-red-500'
              },
              {
                step: '02',
                title: 'Creative Production',
                description: 'Our design team creates scroll-stopping ad creatives. Multiple variations for A/B testing ensure we find what resonates with your audience.',
                color: 'from-red-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Campaign Launch',
                description: 'Precise setup of campaigns, ad sets, and ads. Pixel installation, conversion tracking, and quality checks before we go live.',
                color: 'from-pink-500 to-purple-500'
              },
              {
                step: '04',
                title: 'Optimization & Scaling',
                description: 'Daily monitoring and optimization. We kill underperformers, scale winners, and continuously test new audiences and creatives.',
                color: 'from-purple-500 to-blue-500'
              },
              {
                step: '05',
                title: 'Reporting & Growth',
                description: 'Transparent reporting with actionable insights. Regular strategy sessions to discuss performance and plan for growth.',
                color: 'from-blue-500 to-cyan-500'
              },
            ].map((item, idx) => (
              <div key={idx} className="pop" style={{transitionDelay: `${idx * 0.1}s`}}>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-l-8 border-red-500 flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="brand-font text-4xl font-black text-white">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="brand-font text-3xl font-black text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 lg:py-32 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pop">
          <h2 className="brand-font text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            Let's create Meta ad campaigns that drive real ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>navigate('/contact')} className="bg-white text-red-600 px-12 py-6 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              let's Start
            </button>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MetaAdsManagement;
