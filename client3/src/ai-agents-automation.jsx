
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import image6 from "../images/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const AIAgentsAutomation = () => {
      const navigate=useNavigate();
      const [isServicesOpen, setIsServicesOpen] = useState(false);
        const [isMenuOpen, setIsMenuOpen] = useState(false);
          // Handle service selection
        const handleServiceSelect = (path) => {
          navigate(path);
          setIsServicesOpen(false);
          setIsMenuOpen(false);
        };
  const [activeTab, setActiveTab] = useState(0);
const [menuOpen, setMenuOpen] = useState(false);

const handleChangeSelection=(e)=>{
const selectedValue=e.target.value;
if(selectedValue){
  navigate(selectedValue);
}
};
 const menuItems = [
    "Our Services",
    "Our Products",
    "Our Work",
    "Industries",
    "The Agency",
  ];
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
    useEffect(()=>{
      AOS.init({duration:800});
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .tech-font {
          font-family: 'Orbitron', monospace;
        }
        
        .reveal {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
        }
        
        .glow-box {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 30px rgba(59, 130, 246, 0.1);
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .scan-line {
          animation: scan 3s linear infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.4); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .matrix-char {
          animation: matrix-rain 3s linear infinite;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .rotate-slow {
          animation: rotate 20s linear infinite;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s;
        }
        
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg) scale(1.05);
        }
        
        @keyframes data-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .data-flow {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.2) 25%, 
            rgba(96, 165, 250, 0.3) 50%, 
            rgba(59, 130, 246, 0.2) 75%, 
            transparent 100%);
          background-size: 200% 100%;
          animation: data-flow 3s linear infinite;
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
      {/* Animated Background */}
      <div className="fixed inset-0 grid-pattern opacity-20"></div>
      <div className="fixed inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-500 opacity-20 text-xs matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(33 + Math.random() * 94)}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="reveal">
            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border-2 border-blue-500 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full pulse-glow"></div>
              <span className="tech-font text-sm font-bold text-blue-400 tracking-widest">AI AUTOMATION SYSTEMS</span>
            </div>
          </div>
          
          <div className="reveal" style={{transitionDelay: '0.2s'}}>
            <h1 className="tech-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 glow-text">
              THE FUTURE IS
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AUTONOMOUS
              </span>
            </h1>
          </div>
          
          <div className="reveal" style={{transitionDelay: '0.4s'}}>
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Harness the power of intelligent automation and AI agents to transform your business operations, eliminate repetitive tasks, and unlock unprecedented efficiency.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16" style={{transitionDelay: '0.6s'}}>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 glow-box card-3d">
              <div className="text-5xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Task Automation</div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 glow-box card-3d">
              <div className="text-5xl font-black text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-cyan-200 uppercase tracking-wider">Operational Uptime</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 glow-box card-3d">
              <div className="text-5xl font-black text-blue-400 mb-2">10x</div>
              <div className="text-sm text-blue-200 uppercase tracking-wider">Productivity Boost</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="tech-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              AUTOMATION SOLUTIONS
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Custom-built AI agents and automation systems designed for your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Intelligent Chatbots */}
            <div className="reveal group" style={{transitionDelay: '0.1s'}}>
              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-blue-500/50 rounded-3xl p-8 glow-box card-3d h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center rotate-slow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="tech-font text-2xl font-bold text-white">Intelligent Chatbots</h3>
                    <div className="text-sm text-blue-300 uppercase tracking-wider">Customer Service AI</div>
                  </div>
                </div>
                
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Advanced conversational AI agents that understand context, learn from interactions, and provide human-like customer support 24/7. Handle complex queries, process transactions, and escalate to humans only when necessary.
                </p>

                <div className="space-y-3">
                  <div className="bg-black/30 border border-blue-500/30 rounded-lg p-4 data-flow">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Natural Language Processing</span>
                      <span className="text-xs text-blue-400 tech-font">NLP v4.0</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-blue-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Multi-Language Support</span>
                      <span className="text-xs text-blue-400 tech-font">100+ Languages</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-blue-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Sentiment Analysis</span>
                      <span className="text-xs text-blue-400 tech-font">Real-time</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-blue-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-200">Learning Algorithm</span>
                      <span className="text-xs text-blue-400 tech-font">Continuous</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-xs text-blue-300">Query Resolution</div>
                  </div>
                  <div className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400">&lt;2s</div>
                    <div className="text-xs text-cyan-300">Response Time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Automation */}
            <div className="reveal group" style={{transitionDelay: '0.2s'}}>
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-2 border-cyan-500/50 rounded-3xl p-8 glow-box card-3d h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center rotate-slow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="tech-font text-2xl font-bold text-white">Workflow Automation</h3>
                    <div className="text-sm text-cyan-300 uppercase tracking-wider">Process Optimization</div>
                  </div>
                </div>
                
                <p className="text-cyan-100 mb-6 leading-relaxed">
                  Streamline complex business processes with intelligent automation that connects your tools, manages data flow, and executes tasks with precision. From data entry to report generation, eliminate manual work entirely.
                </p>

                <div className="space-y-3">
                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4 data-flow">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-200">API Integration Hub</span>
                      <span className="text-xs text-cyan-400 tech-font">1000+ Apps</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-200">Task Scheduling Engine</span>
                      <span className="text-xs text-cyan-400 tech-font">Advanced</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-200">Error Handling & Retry</span>
                      <span className="text-xs text-cyan-400 tech-font">Intelligent</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-200">Monitoring Dashboard</span>
                      <span className="text-xs text-cyan-400 tech-font">Real-time</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-cyan-500/20 border border-cyan-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-400">80%</div>
                    <div className="text-xs text-cyan-300">Time Saved</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">99.9%</div>
                    <div className="text-xs text-blue-300">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Processing AI */}
            <div className="reveal group" style={{transitionDelay: '0.3s'}}>
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-2 border-purple-500/50 rounded-3xl p-8 glow-box card-3d h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center rotate-slow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="tech-font text-2xl font-bold text-white">Data Processing AI</h3>
                    <div className="text-sm text-purple-300 uppercase tracking-wider">Analytics & Insights</div>
                  </div>
                </div>
                
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Transform raw data into actionable insights with machine learning algorithms that detect patterns, predict trends, and generate comprehensive reports. Process millions of data points in seconds with unparalleled accuracy.
                </p>

                <div className="space-y-3">
                  <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4 data-flow">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-200">Pattern Recognition</span>
                      <span className="text-xs text-purple-400 tech-font">ML Powered</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-200">Predictive Analytics</span>
                      <span className="text-xs text-purple-400 tech-font">Advanced</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-200">Anomaly Detection</span>
                      <span className="text-xs text-purple-400 tech-font">Automated</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-200">Custom Visualizations</span>
                      <span className="text-xs text-purple-400 tech-font">Dynamic</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">1M+</div>
                    <div className="text-xs text-purple-300">Records/Sec</div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">92%</div>
                    <div className="text-xs text-blue-300">Prediction Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom AI Agents */}
            <div className="reveal group" style={{transitionDelay: '0.4s'}}>
              <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-2 border-pink-500/50 rounded-3xl p-8 glow-box card-3d h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center rotate-slow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="tech-font text-2xl font-bold text-white">Custom AI Agents</h3>
                    <div className="text-sm text-pink-300 uppercase tracking-wider">Tailored Solutions</div>
                  </div>
                </div>
                
                <p className="text-pink-100 mb-6 leading-relaxed">
                  Bespoke AI agents built specifically for your unique business challenges. From lead qualification to content generation, we design autonomous systems that work exactly how you need them to, with full customization and control.
                </p>

                <div className="space-y-3">
                  <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 data-flow">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-200">Custom Training Models</span>
                      <span className="text-xs text-pink-400 tech-font">Your Data</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '0.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-200">Decision Logic Engine</span>
                      <span className="text-xs text-pink-400 tech-font">Configurable</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-200">API-First Architecture</span>
                      <span className="text-xs text-pink-400 tech-font">Scalable</span>
                    </div>
                  </div>
                  <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 data-flow" style={{animationDelay: '1.5s'}}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pink-200">Full Documentation</span>
                      <span className="text-xs text-pink-400 tech-font">Included</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="bg-pink-500/20 border border-pink-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-pink-400">100%</div>
                    <div className="text-xs text-pink-300">Custom Built</div>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-400">∞</div>
                    <div className="text-xs text-purple-300">Possibilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="tech-font text-4xl sm:text-5xl md:text-6xl font-black mb-6 glow-text">
              POWERED BY CUTTING-EDGE AI
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We leverage the most advanced AI models and frameworks to build intelligent, reliable automation systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'GPT-4', icon: '🧠', color: 'from-green-500 to-emerald-600' },
              { name: 'Claude', icon: '🤖', color: 'from-orange-500 to-red-600' },
              { name: 'LangChain', icon: '⛓️', color: 'from-blue-500 to-cyan-600' },
              { name: 'TensorFlow', icon: '🔷', color: 'from-orange-600 to-amber-600' },
              { name: 'PyTorch', icon: '🔥', color: 'from-red-500 to-pink-600' },
              { name: 'Hugging Face', icon: '🤗', color: 'from-yellow-500 to-orange-500' },
              { name: 'OpenAI', icon: '⚡', color: 'from-cyan-500 to-blue-600' },
              { name: 'Pinecone', icon: '🌲', color: 'from-green-600 to-teal-600' },
            ].map((tech, index) => (
              <div key={index} className="reveal card-3d" style={{transitionDelay: `${index * 0.05}s`}}>
                <div className={`bg-gradient-to-br ${tech.color} rounded-2xl p-6 border-2 border-white/20 glow-box`}>
                  <div className="text-4xl mb-3 text-center">{tech.icon}</div>
                  <div className="tech-font text-lg font-bold text-white text-center">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50 rounded-3xl p-12 glow-box reveal">
            <h3 className="tech-font text-3xl font-bold text-white mb-8 text-center">Why Our Stack Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">State-of-the-Art Models</h4>
                    <p className="text-blue-200 leading-relaxed">
                      Access to the latest and most powerful AI models including GPT-4, Claude, and custom fine-tuned models for maximum accuracy and capability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Enterprise Security</h4>
                    <p className="text-cyan-200 leading-relaxed">
                      Bank-level encryption, secure API handling, and compliance with data protection regulations ensure your sensitive information stays protected.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Scalable Infrastructure</h4>
                    <p className="text-purple-200 leading-relaxed">
                      Cloud-native architecture that scales automatically with demand, handling millions of operations without performance degradation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Open & Flexible</h4>
                    <p className="text-pink-200 leading-relaxed">
                      Built on open-source foundations with extensive APIs, making it easy to integrate with your existing tools and customize to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="tech-font text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              REAL-WORLD APPLICATIONS
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              See how businesses across industries are transforming with AI automation
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'E-commerce Order Processing',
                description: 'Automatically process orders, update inventory, send confirmations, track shipments, handle returns, and manage customer communications—all without human intervention.',
                features: ['Order validation & fraud detection', 'Inventory synchronization', 'Automated shipping label generation', 'Customer notification system'],
                color: 'blue',
                stats: { label: 'Orders Processed', value: '50K+/day' }
              },
              {
                title: 'Lead Qualification & Nurturing',
                description: 'Intelligent agents that engage with leads, qualify them based on custom criteria, schedule meetings, send personalized follow-ups, and route hot leads to sales teams instantly.',
                features: ['Multi-channel engagement', 'Behavioral scoring', 'Smart calendar integration', 'CRM auto-updates'],
                color: 'cyan',
                stats: { label: 'Conversion Rate', value: '+127%' }
              },
              {
                title: 'Content Moderation & Analysis',
                description: 'AI-powered content review that flags inappropriate material, categorizes submissions, extracts insights, and maintains brand safety across all user-generated content at scale.',
                features: ['Real-time content scanning', 'Multi-language support', 'Context-aware filtering', 'Compliance reporting'],
                color: 'purple',
                stats: { label: 'Content Reviewed', value: '1M+/hr' }
              },
              {
                title: 'Financial Document Processing',
                description: 'Extract data from invoices, receipts, and contracts with OCR and NLP. Automatically categorize expenses, reconcile accounts, and generate financial reports with perfect accuracy.',
                features: ['Intelligent OCR extraction', 'Multi-format support', 'Automatic categorization', 'Compliance checking'],
                color: 'pink',
                stats: { label: 'Accuracy Rate', value: '99.7%' }
              },
            ].map((useCase, index) => (
              <div key={index} className={`reveal bg-gradient-to-r from-${useCase.color}-900/30 to-black border-2 border-${useCase.color}-500/50 rounded-3xl p-8 glow-box`} style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="tech-font text-3xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-lg text-blue-100 mb-6 leading-relaxed">{useCase.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className={`bg-${useCase.color}-500/10 border border-${useCase.color}-500/30 rounded-lg p-3 data-flow`}>
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${useCase.color}-400 rounded-full`}></div>
                            <span className="text-sm text-blue-200">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-${useCase.color}-500/20 border-2 border-${useCase.color}-500/50 rounded-2xl p-8 text-center min-w-[200px]`}>
                    <div className="text-sm text-blue-300 mb-2 uppercase tracking-wider">{useCase.stats.label}</div>
                    <div className={`tech-font text-4xl font-black text-${useCase.color}-400`}>{useCase.stats.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="tech-font text-4xl sm:text-5xl md:text-6xl font-black mb-6 glow-text">
              DEVELOPMENT METHODOLOGY
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              A systematic, agile approach that delivers production-ready AI systems
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                phase: 'PHASE 01',
                title: 'Discovery & Requirements',
                duration: '1-2 Weeks',
                description: 'Deep dive into your business processes, pain points, and automation opportunities. We map current workflows, identify bottlenecks, and define success metrics.',
                deliverables: ['Process flow diagrams', 'Technical requirements doc', 'ROI projections', 'Project roadmap']
              },
              {
                phase: 'PHASE 02',
                title: 'Architecture & Design',
                duration: '2-3 Weeks',
                description: 'Design the system architecture, select optimal AI models, plan data flows, and create detailed technical specifications with your approval at every step.',
                deliverables: ['System architecture blueprint', 'AI model selection', 'Data schema design', 'API specifications']
              },
              {
                phase: 'PHASE 03',
                title: 'Development & Training',
                duration: '4-8 Weeks',
                description: 'Build the automation system, train AI models on your data, integrate with existing tools, and implement robust error handling and monitoring.',
                deliverables: ['Core automation engine', 'Trained AI models', 'System integrations', 'Testing framework']
              },
              {
                phase: 'PHASE 04',
                title: 'Testing & Optimization',
                duration: '2-3 Weeks',
                description: 'Rigorous testing in staging environment, performance optimization, edge case handling, and fine-tuning based on real-world scenarios.',
                deliverables: ['Test results report', 'Performance benchmarks', 'Optimization recommendations', 'Documentation']
              },
              {
                phase: 'PHASE 05',
                title: 'Deployment & Monitoring',
                duration: '1 Week',
                description: 'Seamless production deployment, team training, ongoing monitoring, and continuous improvement based on performance data and feedback.',
                deliverables: ['Production deployment', 'Training materials', 'Monitoring dashboard', '30-day support']
              },
            ].map((phase, index) => (
              <div key={index} className="reveal" style={{transitionDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/50 rounded-3xl p-8 lg:p-12 glow-box card-3d">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-500 rounded-2xl p-6 text-center min-w-[150px]">
                        <div className="tech-font text-sm text-white/70 mb-2">{phase.phase}</div>
                        <div className="text-5xl font-black text-white mb-2">{index + 1}</div>
                        <div className="text-xs text-white/70">{phase.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="tech-font text-3xl font-bold text-white mb-4">{phase.title}</h3>
                      <p className="text-lg text-blue-100 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((item, idx) => (
                          <div key={idx} className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 data-flow">
                            <div className="flex items-center space-x-3">
                              <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-blue-200">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-black to-black"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="tech-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 glow-text">
            AUTOMATE YOUR
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FUTURE TODAY
            </span>
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your business with intelligent automation. Save time, reduce costs, and scale without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-6 rounded-xl tech-font text-lg font-bold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 pulse-glow" onClick={()=>navigate('/contact')}>
              START YOUR PROJECT
            </button>
           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AIAgentsAutomation;