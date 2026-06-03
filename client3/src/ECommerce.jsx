import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Shield, TrendingUp, Globe, Smartphone, CreditCard, Search, BarChart, Users, Package, Star, ArrowRight, Check, Sparkles, Lock, Truck, MousePointer, Eye, Target, Menu, ChevronDown, ArrowRightCircle } from 'lucide-react';
import Footer from './Footer';
import image6 from "../images/logo.jpg";
import { FaChevronDown } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
const EcommerceWebsites = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      // Handle service selection
    const handleServiceSelect = (path) => {
      navigate(path);
      setIsServicesOpen(false);
      setIsMenuOpen(false);
    };
        const navigate=useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
   const [menuOpen, setMenuOpen] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Performance",
      description: "Optimized for speed with sub-2-second load times that keep customers engaged and boost conversion rates by up to 40%."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "SSL certificates, PCI compliance, fraud detection, and secure payment gateways protect your business and customers."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Over 70% of shoppers browse on mobile. Our responsive designs deliver flawless experiences across all devices."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Conversion Optimization",
      description: "Strategic UX/UI design, A/B testing capabilities, and psychological triggers that turn visitors into loyal customers."
    }
  ];

  const platforms = [
    { name: "Shopify", description: "Perfect for startups and growing businesses", features: ["Easy management", "App ecosystem", "Built-in payments"] },
    { name: "WooCommerce", description: "Maximum customization on WordPress", features: ["Full control", "Unlimited products", "SEO-friendly"] },
    { name: "Custom Solutions", description: "Tailored for enterprise needs", features: ["Unique features", "Scalable architecture", "Complete ownership"] }
  ];

  const capabilities = [
    {
      category: "Core Infrastructure",
      items: [
        "High-performance hosting with 99.9% uptime guarantee",
        "Content Delivery Network (CDN) for global speed",
        "Automatic daily backups with one-click restore",
        "Scalable architecture that grows with your business",
        "Database optimization for thousands of products",
        "Load balancing for traffic spikes and sales events"
      ]
    },
    {
      category: "Product Management",
      items: [
        "Unlimited product listings with rich descriptions",
        "Advanced variant management (size, color, material)",
        "Bulk import/export via CSV for easy inventory updates",
        "Product bundling and upsell recommendations",
        "Inventory tracking with low-stock alerts",
        "Digital product delivery and licensing systems"
      ]
    },
    {
      category: "Payment & Checkout",
      items: [
        "Multiple payment gateways (Stripe, PayPal, Square, etc.)",
        "One-click checkout for returning customers",
        "Guest checkout option to reduce friction",
        "Multiple currency support for international sales",
        "Subscription and recurring billing capabilities",
        "Buy now, pay later integrations (Klarna, Afterpay)"
      ]
    },
    {
      category: "Customer Experience",
      items: [
        "Personalized product recommendations using AI",
        "Advanced search with filters and autocomplete",
        "Customer accounts with order history and wishlists",
        "Email and SMS notification systems",
        "Live chat integration for instant support",
        "Customer review and rating systems"
      ]
    },
    {
      category: "Marketing & SEO",
      items: [
        "SEO-optimized URLs, meta tags, and schema markup",
        "Email marketing integration (Mailchimp, Klaviyo)",
        "Discount codes, promotions, and flash sales",
        "Abandoned cart recovery automation",
        "Social media integration and shoppable posts",
        "Google Shopping and Facebook Catalog feeds"
      ]
    },
    {
      category: "Analytics & Insights",
      items: [
        "Real-time sales dashboard and reporting",
        "Customer behavior tracking and heatmaps",
        "Conversion funnel analysis",
        "Product performance metrics",
        "Traffic source attribution",
        "Lifetime value and cohort analysis"
      ]
    }
  ];

const handleChangeSelection=(e)=>{
const selectedValue=e.target.value;
if(selectedValue){
  navigate(selectedValue);
}
};
  const designElements = [
    {
      title: "Visual Hierarchy",
      description: "Strategic placement of products, CTAs, and trust signals that guide visitors naturally toward purchase decisions."
    },
    {
      title: "Color Psychology",
      description: "Carefully selected color palettes that align with your brand and trigger the right emotional responses in your target audience."
    },
    {
      title: "Typography Excellence",
      description: "Premium fonts and typographic systems that enhance readability while reinforcing your brand's sophistication."
    },
    {
      title: "White Space Mastery",
      description: "Purposeful spacing that prevents overwhelm and draws attention to what matters most—your products and offers."
    },
    {
      title: "Micro-interactions",
      description: "Delightful animations and feedback that make the shopping experience feel premium and engaging."
    },
    {
      title: "Social Proof Integration",
      description: "Reviews, testimonials, and trust badges strategically placed to build credibility at critical decision points."
    }
  ];

  const technologies = [
    { name: "React/Next.js", use: "Lightning-fast, SEO-friendly storefronts" },
    { name: "Node.js", use: "Scalable backend infrastructure" },
    { name: "PostgreSQL/MongoDB", use: "Robust data management" },
    { name: "Redis", use: "High-speed caching layer" },
    { name: "AWS/Google Cloud", use: "Enterprise-grade hosting" },
    { name: "Stripe/PayPal", use: "Secure payment processing" }
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
  return (
    <>
       
    
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden">
   
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
            
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full">
              <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                eCommerce Excellence
              </p>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Transform Browsers
            </span>
            <br />
            <span className="text-white">Into Buyers</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            At Growth Flow Media, we craft high-converting eCommerce websites that don't just look beautiful—they drive revenue.
            From seamless checkout experiences to powerful backend systems, we build digital storefronts that scale with your ambitions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-purple-400 mb-1">3.2x</div>
              <div className="text-sm text-slate-400">Avg. Conversion Increase</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-pink-400 mb-1">1.8s</div>
              <div className="text-sm text-slate-400">Avg. Load Time</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-6 py-4 rounded-2xl">
              <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-sm text-slate-400">Uptime Guarantee</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-purple-400" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Platform Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're platform-agnostic, meaning we select the perfect technology stack for your unique business needs,
              not what's easiest for us to build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group">
                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-slate-400 mb-6 text-lg">{platform.description}</p>
                <ul className="space-y-3">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Capabilities */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Everything You Need to </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dominate Online
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our eCommerce solutions are comprehensive ecosystems designed to handle every aspect
              of online retail, from product discovery to post-purchase engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  {cap.category}
                </h3>
                <ul className="space-y-4">
                  {cap.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 group/item">
                      <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design That Sells
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Great eCommerce design isn't about following trends—it's about understanding psychology,
              user behavior, and the subtle art of persuasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designElements.map((element, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {element.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Built With </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage the latest technologies to ensure your store is fast, secure, and ready for whatever the future brings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-2 text-purple-400 group-hover:scale-105 transition-transform inline-block">
                  {tech.name}
                </h3>
                <p className="text-slate-300">{tech.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A proven methodology that turns your vision into a revenue-generating machine.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Discovery & Strategy",
                duration: "Week 1-2",
                description: "We dive deep into your business model, target audience, competitive landscape, and unique value proposition. This phase includes stakeholder interviews, market research, and technical requirements gathering.",
                deliverables: ["Market analysis report", "Technical specification document", "Project roadmap", "Wireframes and user flows"]
              },
              {
                phase: "Design & Prototyping",
                duration: "Week 3-4",
                description: "Our design team creates pixel-perfect mockups that bring your brand to life while optimizing for conversion. Every element is intentionally placed to guide users toward purchase.",
                deliverables: ["High-fidelity designs", "Interactive prototypes", "Style guide", "Component library"]
              },
              {
                phase: "Development & Integration",
                duration: "Week 5-8",
                description: "Our developers build your store using best practices, clean code, and scalable architecture. We integrate all necessary third-party services, payment gateways, and marketing tools.",
                deliverables: ["Fully functional website", "Admin dashboard", "Payment integration", "API connections"]
              },
              {
                phase: "Testing & Optimization",
                duration: "Week 9-10",
                description: "Rigorous quality assurance across devices, browsers, and payment methods. We test everything from checkout flows to email notifications to ensure flawless operation.",
                deliverables: ["QA report", "Performance audit", "Security scan", "User acceptance testing"]
              },
              {
                phase: "Launch & Support",
                duration: "Week 11+",
                description: "We handle the technical complexities of launch, monitor performance closely, and provide ongoing support. Your success is our success, and we're committed for the long haul.",
                deliverables: ["Launched website", "Analytics setup", "Training documentation", "Ongoing maintenance"]
              }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-black text-purple-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {step.phase}
                        </h3>
                        <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-4 py-2 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Deliverables</h4>
                        <div className="flex flex-wrap gap-3">
                          {step.deliverables.map((deliverable, idx) => (
                            <span key={idx} className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-sm text-slate-300">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Growth Flow Media
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Revenue-First Mindset",
                description: "We don't just build pretty websites. Every design decision, every line of code, every feature is evaluated based on one metric: does it increase revenue? We obsess over conversion rates, average order value, and customer lifetime value."
              },
              {
                title: "Continuous Optimization",
                description: "Launch is just the beginning. We provide ongoing A/B testing, analytics review, and performance optimization to ensure your store keeps improving. We track everything and make data-driven decisions to maximize your ROI."
              },
              {
                title: "Scalability Built-In",
                description: "Whether you're processing 10 orders or 10,000 orders per day, our infrastructure scales seamlessly. We architect for growth from day one, so you never have to worry about outgrowing your platform."
              },
              {
                title: "Dedicated Support Team",
                description: "You're not just getting a website; you're getting a partnership. Our support team is available to handle everything from minor tweaks to major updates, ensuring your store operates flawlessly 24/7."
              },
              {
                title: "Industry Expertise",
                description: "We've built eCommerce stores across dozens of industries—from fashion to electronics to B2B wholesale. We bring best practices and insider knowledge that only comes from real-world experience."
              },
              {
                title: "Future-Proof Technology",
                description: "The tech landscape evolves rapidly, and so do we. We use modern, maintainable code and stay ahead of trends like headless commerce, progressive web apps, and AI-powered personalization."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Let's build an eCommerce experience that doesn't just meet expectations—it exceeds them.
            Your customers deserve the best, and so do you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={()=>navigate('/contact')} className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        
          </div>
        </div>
      </section>
      
<Footer/>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
    </>
  );
};

export default EcommerceWebsites;