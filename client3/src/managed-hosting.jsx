import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.jpg";
import { FaChevronDown } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const Hosting = () => {
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
  const [uptimePercentage, setUptimePercentage] = useState(99.0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimePercentage(prev => {
        const newVal = prev + 0.01;
        return newVal >= 99.99 ? 99.9 : newVal;
      });
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('zoom-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.zoom').forEach(el => observer.observe(el));
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
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'IBM Plex Sans', sans-serif;
        }
        
        .mono-font {
          font-family: 'JetBrains Mono', monospace;
        }
        
        .zoom {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .zoom-in {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes server-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        .server-pulse {
          animation: server-pulse 2s ease-in-out infinite;
        }
        
        .card-shadow {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        
        .card-shadow:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: translateY(-4px);
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
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center zoom">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400 rounded-lg px-6 py-3 mb-8">
              <span className="mono-font text-sm font-bold text-yellow-400 tracking-wider">ENTERPRISE-GRADE INFRASTRUCTURE</span>
            </div>
            
            <h1 className="mono-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              HOSTING THAT
              <span className="block text-yellow-400">NEVER SLEEPS</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Lightning-fast, ultra-secure, fully managed hosting with 99.99% uptime guarantee. Focus on your business while we handle the infrastructure.
            </p>

            <div className="bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="mono-font text-8xl font-black text-yellow-400 mb-2">
                {uptimePercentage.toFixed(2)}%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">UPTIME GUARANTEE</div>
              <div className="mt-6 bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full" style={{width: `${uptimePercentage}%`}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 zoom">
            <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              PREMIUM FEATURES INCLUDED
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a fast, secure, and scalable website—no hidden fees or surprise charges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Blazing Fast Speed',
                description: 'SSD storage, CDN integration, advanced caching, and optimized servers deliver sub-second page load times globally.',
                specs: ['NVMe SSD Storage', 'Global CDN', 'HTTP/3 Support', 'Server-level Caching']
              },
              {
                icon: '🔒',
                title: 'Advanced Security',
                description: 'Enterprise-grade security with automatic malware scanning, DDoS protection, firewall, and free SSL certificates.',
                specs: ['Free SSL Certificates', 'DDoS Protection', 'Malware Scanning', 'Firewall Protection']
              },
              {
                icon: '📈',
                title: 'Auto-Scaling',
                description: 'Automatically scale resources based on traffic. Handle viral moments and traffic spikes without slowdowns.',
                specs: ['Auto Resource Scaling', 'Load Balancing', 'Traffic Spike Protection', 'Unlimited Bandwidth']
              },
              {
                icon: '💾',
                title: 'Daily Backups',
                description: 'Automated daily backups with 30-day retention. One-click restore to any previous version with zero data loss.',
                specs: ['Automated Daily Backups', '30-Day Retention', 'One-Click Restore', 'Offsite Storage']
              },
              {
                icon: '🎯',
                title: 'Staging Environment',
                description: 'Test changes safely in a staging environment before pushing to production. Perfect for updates and development.',
                specs: ['Full Staging Site', 'Git Integration', 'One-Click Deploy', 'Environment Sync']
              },
              {
                icon: '📊',
                title: 'Performance Monitoring',
                description: 'Real-time monitoring of server health, uptime, and performance metrics with instant alerts for any issues.',
                specs: ['24/7 Monitoring', 'Performance Metrics', 'Instant Alerts', 'Detailed Analytics']
              },
              {
                icon: '🔧',
                title: 'Expert Support',
                description: '24/7/365 expert support from real humans who know hosting inside out. Average response time under 15 minutes.',
                specs: ['24/7/365 Support', '<15min Response', 'Expert Engineers', 'Priority Handling']
              },
              {
                icon: '🚀',
                title: 'Optimized Stack',
                description: 'Latest versions of PHP, MySQL, Node.js, and more. Optimized server configurations for maximum performance.',
                specs: ['Latest PHP/MySQL', 'Node.js Support', 'Redis/Memcached', 'Custom Configs']
              },
              {
                icon: '⚙️',
                title: 'Developer Tools',
                description: 'SSH access, WP-CLI, Git integration, composer, and all the tools developers need for efficient workflows.',
                specs: ['SSH/SFTP Access', 'WP-CLI Support', 'Git Integration', 'Composer & NPM']
              },
            ].map((feature, idx) => (
              <div key={idx} className="zoom bg-white rounded-2xl p-8 card-shadow" style={{transitionDelay: `${idx * 0.1}s`}}>
                <div className="text-6xl mb-4 server-pulse" style={{animationDelay: `${idx * 0.3}s`}}>{feature.icon}</div>
                <h3 className="mono-font text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="py-24 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 zoom">
            <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              WORLD-CLASS INFRASTRUCTURE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on enterprise-grade infrastructure trusted by Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="zoom space-y-8">
              <div className="bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8">
                <h3 className="mono-font text-3xl font-bold text-yellow-400 mb-6">SERVER SPECS</h3>
                <div className="space-y-4">
                  {[
                    { label: 'CPU', value: 'Intel Xeon / AMD EPYC' },
                    { label: 'RAM', value: 'DDR4 ECC Memory' },
                    { label: 'Storage', value: 'NVMe SSD RAID 10' },
                    { label: 'Network', value: '10Gbps Redundant' },
                    { label: 'OS', value: 'Ubuntu/AlmaLinux' },
                    { label: 'PHP', value: 'v7.4 - v8.3' },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-700 pb-3">
                      <span className="text-gray-400 mono-font text-sm">{spec.label}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8">
                <h3 className="mono-font text-3xl font-bold text-yellow-400 mb-6">GLOBAL CDN</h3>
                <p className="text-gray-300 mb-6">
                  Content delivered from 200+ edge locations worldwide ensuring lightning-fast load times regardless of visitor location.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['North America', 'Europe', 'Asia Pacific', 'South America', 'Middle East', 'Africa'].map((region, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🌍</div>
                      <div className="text-xs text-gray-400">{region}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="zoom space-y-8">
              <div className="bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8">
                <h3 className="mono-font text-3xl font-bold text-yellow-400 mb-6">SECURITY LAYERS</h3>
                <div className="space-y-4">
                  {[
                    { layer: 'Layer 7', protection: 'Application DDoS Protection' },
                    { layer: 'Layer 4', protection: 'Network DDoS Mitigation' },
                    { layer: 'Layer 3', protection: 'IP Reputation Filtering' },
                    { layer: 'SSL/TLS', protection: 'Encrypted Connections' },
                    { layer: 'Firewall', protection: 'Advanced WAF Rules' },
                    { layer: 'Malware', protection: 'Real-time Scanning' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="mono-font text-sm text-yellow-400 font-bold">{item.layer}</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full server-pulse"></div>
                      </div>
                      <div className="text-sm text-gray-300">{item.protection}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8">
                <h3 className="mono-font text-3xl font-bold text-yellow-400 mb-6">UPTIME SLA</h3>
                <div className="text-center mb-6">
                  <div className="mono-font text-6xl font-black text-white">99.99%</div>
                  <div className="text-gray-400 mt-2">Guaranteed Uptime</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-400 mb-2">Maximum Downtime/Year</div>
                  <div className="text-2xl font-bold text-white">52 minutes</div>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  * We credit your account for any SLA violations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 zoom">
            <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              FULLY MANAGED SERVICE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all the technical details so you can focus on growing your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Server Management',
                tasks: [
                  'OS updates and security patches',
                  'Software installation and updates',
                  'Performance optimization',
                  'Resource monitoring and scaling',
                  'Load balancing configuration',
                  'Database optimization'
                ]
              },
              {
                category: 'Security Management',
                tasks: [
                  'SSL certificate installation and renewal',
                  'Firewall configuration and updates',
                  'Malware scanning and removal',
                  'Security audit and hardening',
                  'DDoS attack mitigation',
                  'Intrusion detection and prevention'
                ]
              },
              {
                category: 'Backup Management',
                tasks: [
                  'Automated daily backups',
                  'Backup verification and testing',
                  'Offsite backup storage',
                  'Disaster recovery planning',
                  'Quick restore service',
                  'Version control for rollbacks'
                ]
              },
              {
                category: 'Application Management',
                tasks: [
                  'CMS updates (WordPress, etc.)',
                  'Plugin and theme updates',
                  'Compatibility testing',
                  'Performance profiling',
                  'Cache configuration',
                  'Database cleanup and repair'
                ]
              },
            ].map((service, idx) => (
              <div key={idx} className="zoom bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 card-shadow" style={{transitionDelay: `${idx * 0.15}s`}}>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 server-pulse"></div>
                  <h3 className="mono-font text-2xl font-bold text-gray-900">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.tasks.map((task, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Migration */}
      <div className="py-24 lg:py-32 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center zoom">
            <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
              FREE WEBSITE MIGRATION
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-12">
              Switching hosts? We'll handle everything. Zero downtime, zero hassle, zero cost.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '1', title: 'Sign Up', desc: 'Choose your hosting plan' },
                { step: '2', title: 'Submit Details', desc: 'Provide current host info' },
                { step: '3', title: 'We Migrate', desc: 'Expert team handles transfer' },
                { step: '4', title: 'Go Live', desc: 'Update DNS when ready' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 card-shadow">
                  <div className="mono-font text-5xl font-black text-gray-900 mb-3">{item.step}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold mb-2">$0</div>
                  <div className="text-sm text-gray-400">Migration Cost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0hrs</div>
                  <div className="text-sm text-gray-400">Downtime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24-48hrs</div>
                  <div className="text-sm text-gray-400">Completion Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="py-24 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 zoom">
            <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              24/7/365 EXPERT SUPPORT
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real humans, real expertise, real fast response times
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="zoom bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="mono-font text-2xl font-bold text-white mb-3">Live Chat</h3>
              <p className="text-gray-400 mb-6">Instant help via live chat. Average response time under 2 minutes.</p>
              <div className="mono-font text-4xl font-bold text-yellow-400">&lt;2min</div>
              <div className="text-sm text-gray-500 mt-2">Response Time</div>
            </div>

            <div className="zoom bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8 text-center" style={{transitionDelay: '0.1s'}}>
              <div className="text-6xl mb-4">📧</div>
              <h3 className="mono-font text-2xl font-bold text-white mb-3">Email Support</h3>
              <p className="text-gray-400 mb-6">Detailed support via email with attachments and screenshots.</p>
              <div className="mono-font text-4xl font-bold text-yellow-400">&lt;15min</div>
              <div className="text-sm text-gray-500 mt-2">Response Time</div>
            </div>

            <div className="zoom bg-gray-800 border-2 border-yellow-400 rounded-2xl p-8 text-center" style={{transitionDelay: '0.2s'}}>
              <div className="text-6xl mb-4">📞</div>
              <h3 className="mono-font text-2xl font-bold text-white mb-3">Phone Support</h3>
              <p className="text-gray-400 mb-6">Talk to an expert for complex issues and urgent situations.</p>
              <div className="mono-font text-4xl font-bold text-yellow-400">&lt;5min</div>
              <div className="text-sm text-gray-500 mt-2">Wait Time</div>
            </div>
          </div>

          <div className="mt-16 bg-gray-800 rounded-2xl p-12 text-center zoom">
            <h3 className="mono-font text-3xl font-bold text-white mb-6">WHAT OUR SUPPORT COVERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                'Server Issues',
                'Website Errors',
                'Email Problems',
                'Database Issues',
                'SSL Certificates',
                'DNS Configuration',
                'Performance Issues',
                'Security Incidents',
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-700 rounded-lg p-4">
                  <svg className="w-8 h-8 text-yellow-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm text-gray-300">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 lg:py-32 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center zoom">
          <h2 className="mono-font text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            READY FOR BETTER HOSTING?
          </h2>
          <p className="text-xl text-gray-800 mb-12">
            Experience the difference of truly managed hosting. Free migration included.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>navigate('/contact')} className="bg-gray-900 text-white px-12 py-6 rounded-xl mono-font text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
              GET STARTED NOW
            </button>
           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Hosting;