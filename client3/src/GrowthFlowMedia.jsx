import React, { useState, useEffect, useRef } from 'react';
import { Layout ,ShoppingCart,Globe,PenTool,TrendingUp,Search,MessageCircle,Target,Megaphone,FileText,BarChart3,Server,Users,Bot,Layers,UserPlus,Menu, Mail, ChevronDown, ArrowRightCircle, Recycle, Link } from 'lucide-react';
import { Phone, Facebook, Linkedin, Instagram, Youtube, Twitter, ChevronRight } from 'lucide-react';
import Confetti from 'react-confetti'
import {FaChevronDown, FaFacebook,FaGoogle} from 'react-icons/fa';
import image1 from "../images/image.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";

import image5 from "../images/image5.png";
import vansh from "../images/vansh.png";

import image6 from "../images/logo.png";
import image10 from "../images/logo.jpg";


import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";

import {useWindowSize} from 'react-use'
import { Star } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialsSection from './Testiminials';
import { useNavigate } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';



export default function GrowthFlowMedia() {
  const [menuOpen, setMenuOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageText, setCurrentImageText] = useState(0);
  
  const {width,height}=useWindowSize();
useEffect(()=>{
  AOS.init({duration:800});
},[]);
  // Images for the rotating display
  const designImages = [
    {id:1,
      image:image2,
      text:"Build",
      color:"text-green-600",
    },
    {id:2,
      image:image3,
      text:"Develop",
      color:"text-orange-500",
    },
    {id:1,
      image:image4,
      text:"Grow",
      color:"text-blue-600",
    },
     {id:1,
      image:image5,
      text:"Design",
      color:"text-purple-600",
    }
  ];
// Add this to your component's state declarations
const [openFaqIndex, setOpenFaqIndex] = useState(null);

// FAQ data array
const faqData = [
  {
    question: "What Is The Significance Of Web Designing?",
    answer: "Web design is crucial because it creates the first impression of your business online. A well-designed website improves user experience, builds trust with visitors, enhances SEO performance, and increases conversion rates. It's not just about aesthetics but also about functionality and user engagement."
  },
  {
    question: "Why Is Content Marketing Required?",
    answer: "Content marketing is essential because it builds brand awareness, establishes authority in your industry, improves SEO rankings, engages your target audience, and drives qualified traffic to your website. It helps build long-term relationships with customers and generates leads more effectively than traditional advertising."
  },
  {
    question: "Can I Update The Content On My Site?",
    answer: "Yes, absolutely! We provide user-friendly content management systems (CMS) that allow you to easily update text, images, and other content on your website. We also offer training sessions to ensure you're comfortable making updates yourself. Additionally, we provide ongoing support if you need assistance with more complex updates."
  },
  {
    question: "How Long Does Website Development Take?",
    answer: "The timeline varies based on project complexity. A basic website typically takes 2-4 weeks, while e-commerce sites or complex applications may take 6-8 weeks. We provide a detailed project timeline during our initial consultation and maintain transparent communication throughout the development process."
  },
  {
    question: "What's Included In Your Digital Marketing Packages?",
    answer: "Our digital marketing packages include strategy development, SEO optimization, social media management, content creation, PPC campaign management, analytics reporting, and monthly performance reviews. We customize each package based on your specific business goals and budget."
  }
];const [helpOpen, setHelpOpen] = useState(false);
const navigate=useNavigate();
const handleChangeSelection=(e)=>{
const selectedValue=e.target.value;
if(selectedValue){
  navigate(selectedValue);
}
};
useEffect(() => {
  const handleClickOutside = (event) => {
    // Check if click is outside the help button container
    const helpContainer = document.querySelector('.help-button-container');
    if (helpOpen && helpContainer && !helpContainer.contains(event.target)) {
      setHelpOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('touchstart', handleClickOutside); // For mobile touch
  
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('touchstart', handleClickOutside);
  };
}, [helpOpen]);
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },

  ];

  
const [isServicesOpen, setIsServicesOpen] = useState(false);
    // Handle service selection
  const handleServiceSelect = (path) => {
    navigate(path);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
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

 
  
  const menuItems = [
    
    
    "Our Services",
  ];

const ContactSection=useRef(null);
  const scrollToContact = () => {
    ContactSection.current.scrollIntoView({ behavior: "smooth" });
  };
  // Rotate images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % designImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(1000px) rotate(360deg);
            opacity: 0;
          }
        }
       @keyframes slideInRight {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(20px);
    opacity: 0;
  }
}

.dropdown-enter {
  animation: slideInRight 0.3s ease-out forwards;
}

.dropdown-exit {
  animation: slideOutRight 0.2s ease-in forwards;
}

/* Better hover effects */
.help-option:hover {
  transform: translateX(-5px);
  background: linear-gradient(90deg, #FF9500/10 0%, transparent 100%);
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .help-dropdown {
    width: 280px !important;
    max-width: 90vw;
    right: 100%;
    margin-right: 8px;
  }
  
  .help-button {
    font-size: 11px !important;
    padding: 8px 12px !important;
  }
}
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
       
        @keyframes popIn {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
       
        .animate-fall {
          animation: fall linear infinite;
        }
       
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
       
        .animate-popIn {
          animation: popIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes dotBounce {
          0%, 80%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          40% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }
        /* Smooth dropdown animation */
.faq-answer-enter {
  max-height: 0;
  opacity: 0;
}

.faq-answer-enter-active {
  max-height: 500px;
  opacity: 1;
  transition: all 300ms ease-in-out;
}

.faq-answer-exit {
  max-height: 500px;
  opacity: 1;
}

.faq-answer-exit-active {
  max-height: 0;
  opacity: 0;
  transition: all 300ms ease-in-out;
}
        .dot {
          animation: dotBounce 1.4s infinite ease-in-out;
        }
        
        .dot-2 {
          animation-delay: 0.2s;
        }
        
        .dot-3 {
          animation-delay: 0.4s;
        }
        
        @media (max-width: 768px) {
          .logo-text {
            font-size: 18px;
          }
          .hero-heading {
            font-size: 32px;
          }
          .featured-logos {
            font-size: 12px;
          }
          .congrats-heading {
            font-size: 36px;
          }
          .service-card {
            padding: 1.5rem;
          }
          .testimonial-text {
            font-size: 16px;
          }
        }
        
        @media (max-width: 640px) {
          .hero-heading {
            font-size: 28px;
          }
          .section-heading {
            font-size: 32px;
          }
          .why-choose-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div data-aos="slide-down"className="bg-white border-b border-gray-200 px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-orange-500" />
            <a href="tel:+919646174266" className="whitespace-nowrap">9646174266</a>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={14} className="text-orange-500" />
            <a href="mailto:support@growthflowmedia.com"  className="hidden sm:inline whitespace-nowrap">support@growthflowmedia.com</a>
            <a href="mailto:support@growthflowmedia.com"  className="sm:hidden whitespace-nowrap">support@growthflow...</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a onClick={scrollToContact} className="cursor-pointer hover:text-orange-500 whitespace-nowrap">Contact Us</a>
        
         
        </div>
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
            <button className="hidden lg:flex gap-2 rounded-xl bg-[#e36a2e] px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28] whitespace-nowrap" onClick={scrollToContact}>
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
                  <button className="w-full flex justify-center gap-2 rounded-xl bg-[#e36a2e] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#cf5f28]" onClick={scrollToContact}>
                    Get Started Now <ArrowRightCircle size={18} className='text-black'/>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

   {/* Hero Section - Updated for Mobile Order */}
<section className="relative z-10 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 py-12 lg:py-24">
  <div data-aos="slide-right" className=" inline-block bg-orange-500 text-black px-4 py-2 rounded-md mb-4 sm:mb-6 text-xs sm:text-sm font-semibold whitespace-nowrap lg:mt-0 sm:mx-22">
        Design & Digital Marketing Agency,India
      </div>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
   
   
    <div className="order-2 lg:order-1">
     
      
      
      
      <div className="lg:hidden mb-6">
        <div className="h-58 w-full overflow-hidden ">
          <img
            key={designImages[currentImageIndex].id}
            src={designImages[currentImageIndex].image}
            alt={designImages[currentImageIndex].text}
            className="w-full h-full object-cover animate-popIn"
          />
        </div>
      </div>

    
      <div className="hidden lg:flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4" data-aos="slide-right">
        <div className="h-48 w-48 overflow-hidden rounded-lg">
          <img
            key={designImages[currentImageIndex].id}
            src={designImages[currentImageIndex].image}
            alt={designImages[currentImageIndex].text}
            className="w-full h-full  animate-popIn"
          />
        </div>

        <h1
          key={designImages[currentImageIndex].text}
          className={`text-5xl font-bold ${designImages[currentImageIndex].color} animate-popIn mt-10`}
        >
          {designImages[currentImageIndex].text}
        </h1>
      </div>

   
      <div className="lg:hidden mb-6 text-center">
        <h1
          key={designImages[currentImageIndex].text}
          className={`text-4xl font-bold ${designImages[currentImageIndex].color} animate-popIn`}
        >
          {designImages[currentImageIndex].text}
        </h1>
      </div>

      <h2 data-aos="slide-right" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
        with Growth Flow Media
      </h2>

      <p data-aos="slide-right" className="text-gray-700 text-base sm:text-lg mb-4 text-center lg:text-left">
        Elevate your online presence with our seamless fusion of cutting-edge design and strategic <span className="font-semibold">digital marketing</span> solutions.
      </p>

      
      <div data-aos="slide-right" className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Services
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <select onChange={handleChangeSelection} defaultValue=""className="flex-1 border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-gray-700 bg-white text-sm sm:text-base">
            <option value="">Select a Service</option>
            <option value="/webdesign">Website Design</option>
            <option value="/ecommerce">ECommerce Websites</option>
            <option value="/service-site">Service Website</option>
            <option value="/branding&logodesign">Branding & Logo Design</option>
            <option value="/digitalmarketing">Digital Marketing</option>
            <option value="/seo">Search Engine Optimisation</option>
            <option value="/googleads">Google Ads Management</option>
            <option value="/metaads">Meta Ads Management</option>
       
            <option value="/conversionrate">Conversion Rate Optimization</option>
            <option value="/hosting">Managed Hosting</option>
            <option value="/gohigh">Go High Level CRM</option>
            <option value="/ai">AI Agents / Automation Development</option>
            <option value="/whitelabel">White Label Marketing</option>
            <option value="/lead">Lead Generation</option>
          </select>
          <button data-aos="slide-up" className="flex justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold whitespace-nowrap text-sm sm:text-base" onClick={scrollToContact}>
            Get Started Now <span><ArrowRightCircle size={18} className='text-black mt-0.5 sm:mt-1'/></span>
          </button>
        </div>
      </div>
    </div>

   
    <div className="bg-transparent order-1 lg:order-2 lg:scale-130 mb-8 lg:mb-0">
      <div className="lg:hidden mb-4">
       
        <div className="flex justify-center items-center gap-4">
         
        </div>
      </div>
      
      <img
        src={vansh}
        data-aos="slide-left"
        alt="Professional team member"
        className="w-full max-w-md mx-auto rounded-lg"
      />
      
   
    </div>
  </div>
</section> 

      {/* Featured In Section with Scrolling Animation */}
      <section className="bg-black py-8 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 data-aos="slide-right" className="text-white text-lg sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Featured in</h3>
          <div className="relative">
            <div className="flex gap-8 sm:gap-16 animate-scroll">
              {/* First set of logos */}
              <div data-aos="slide-up" className="flex gap-8 sm:gap-16 flex-shrink-0">
                <div className="text-white text-xs sm:text-sm font-bold flex-shrink-0">
                  <div className="border border-white px-3 sm:px-4 py-1 sm:py-2">
                    SMALL BUSINESS<br/>
                    <span className="italic text-lg sm:text-2xl">WORLD</span><br/>
                    <span className="text-xs italic">JOURNAL</span>
                  </div>
                </div>
                <div className="text-white font-bold text-sm sm:text-xl flex-shrink-0">
                  THE<br/>
                  Australia<br/>
                  <span className="text-xs">times</span>
                </div>
                <div className="text-white font-bold text-2xl sm:text-4xl tracking-wider flex-shrink-0">
                  FOX40
                </div>
                <div className="text-white text-xs sm:text-sm flex-shrink-0">
                  <span className="font-bold">INNOVATION&</span><br/>
                  ENTREPRENEURSHIP<br/>
                  <span className="text-xs">NEWS</span>
                </div>    <div className="flex items-center gap-2">
              <img
                src={image11}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image12}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image13}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image14}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image15}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div>
                
              </div>
             
              {/* Duplicate set for infinite scroll */}
              <div data-aos="slide-up" className="flex gap-8 sm:gap-16 flex-shrink-0">
                <div className="text-white text-xs sm:text-sm font-bold flex-shrink-0">
                  <div className="border border-white px-3 sm:px-4 py-1 sm:py-2">
                    SMALL BUSINESS<br/>
                    <span className="italic text-lg sm:text-2xl">WORLD</span><br/>
                    <span className="text-xs italic">JOURNAL</span>
                  </div>
                </div>
                <div className="text-white font-bold text-sm sm:text-xl flex-shrink-0">
                  THE<br/>
                  Australia<br/>
                  <span className="text-xs">times</span>
                </div>
                <div className="text-white font-bold text-2xl sm:text-4xl tracking-wider flex-shrink-0">
                  FOX40
                </div>
                <div className="text-white text-xs sm:text-sm flex-shrink-0">
                  <span className="font-bold">INNOVATION&</span><br/>
                  ENTREPRENEURSHIP<br/>
                  <span className="text-xs">NEWS</span>
                </div>
               
                <div className="flex items-center gap-2">
              <img
                src={image11}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image12}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image13}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image14}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div><div className="flex items-center gap-2">
              <img
                src={image15}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto "
              />
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Congratulations Section with Confetti Animation */}
      <section className="bg-black py-12 sm:py-20 relative overflow-hidden">
        <Confetti 
          width={width}
          height={height}
          numberOfPieces={300}
          gravity={0.2}
          recycle={false}
        />
       
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 data-aos="slide-down"
 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span  className="text-orange-500">Congratulations!</span>{' '}
            <span  className="text-white">You're </span>
            <span  className="text-pink-500">Here</span>
          </h2>
         
          <p data-aos="slide-up"
className="text-white text-lg sm:text-xl mb-6 sm:mb-8 font-handwriting">
            because you're ready to grow your business, build a brand, and<br className="hidden sm:block"/>
            create something incredible...
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div data-aos="slide-right" className="bg-white rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <span className="text-2xl sm:text-3xl font-bold">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">from 63 reviews</span>
              <span  className="text-xl sm:text-2xl"><FaGoogle className='text-[#DB4437]'/></span>
            </div>
           
            <div data-aos="slide-left" className="bg-white rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <span className="text-2xl sm:text-3xl font-bold">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">from 33 reviews</span>
              <span className="text-xl sm:text-2xl"><FaFacebook className='text-[#1877F2]'/></span>
            </div>
          </div>

          <button data-aos="slide-up" className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base" onClick={scrollToContact}>
            Get Started Now
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </div>
      </section>

      
     {/* Services Section */}
<section  className="bg-white py-12 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 data-aos="slide-right"className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 section-heading">Our Growth Services</h2>
    <p data-aos="slide-left"className="text-center text-lg sm:text-xl mb-8 sm:mb-12" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
      We Are A Full Service Digital Marketing Agency With Expertise In The Following Areas.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
      <button data-aos="slide-right"
className="bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-purple-600 flex items-center gap-2 text-sm sm:text-base justify-center"
onClick={()=>{window.location.href='/ecommerce'}}> 
  
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v4H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 10h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4z" clipRule="evenodd" />
        </svg>
        eCommerce Websites
      </button>
       <button data-aos="slide-right"
className="bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-600 flex items-center gap-2 text-sm sm:text-base justify-center"
onClick={()=>{window.location.href='/service-site'}}
>
     <Globe size={20}/>
        Service Websites
      </button>
       <button data-aos="slide-right"
className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-600 flex items-center gap-2 text-sm sm:text-base justify-center" onClick={()=>{window.location.href='/ai'}}>
       <Bot size={20}/>
         Ai Agents/Automation Development
      </button>
     
      <button data-aos="slide-up" className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base justify-center" onClick={()=>{window.location.href='/metaads'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
        Meta Ads Management
      </button>
      <button data-aos="slide-left"className="bg-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-pink-700 flex items-center gap-2 text-sm sm:text-base justify-center" onClick={()=>{window.location.href='/googleads'}}>
       <Target size={20}/>
        Google Ads Management
      </button>
      <button  data-aos="slide-right"className="bg-yellow-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-yellow-500 flex items-center gap-2 text-sm sm:text-base justify-center" onClick={()=>{window.location.href='/hosting'}} >
        <Server size={20}/>
        Managed Hosting
      </button>
          <button  data-aos="slide-right"className="bg-red-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-red-900 flex items-center gap-2 text-sm sm:text-base justify-center"
          onClick={()=>{window.location.href='/lead'}}
          >
        <UserPlus size={20}/>
        lead Generation
      </button>
          <button  data-aos="slide-right"className="bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-900 flex items-center gap-2 text-sm sm:text-base justify-center" onClick={()=>{window.location.href='/whitelabel'}}>
      <Layers size={20}/>
        White Label Marketing
      </button>
      <button data-aos="slide-up"className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-700 flex items-center gap-2 text-sm sm:text-base justify-center"  onClick={()=>{window.location.href='/seo'}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
        SEO (Search Engine Optimization)
      </button>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div data-aos="slide-right"className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Branding & Logo Design</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Captivate the world with one look at your brand and logo. Our graphic design team is all about...
        </p>
        <button onClick={() => {
                    window.location.href = `/branding&logodesign`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Read More <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div data-aos="slide-down" className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Digital Marketing</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Don't follow the trend, but be one with our remarkable digital marketing service in Australia. W...
        </p>
        <button onClick={() => {
                    window.location.href = `/digitalmarketing`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Read More <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div  data-aos="slide-left"className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Conversion Rate Optimization</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Optimizing conversion rates is vital for reaching potential buyers. Our Conversion Rate Optimization...
        </p>
        <button onClick={() => {
                    window.location.href = `/conversionrate`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Click Here <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div data-aos="slide-right" className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Web Design & Development</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Your website is up on the internet even when you are not. With our professional team of web design...
        </p>
        <button onClick={() => {
                    window.location.href = `/webdesign`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Read More <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div data-aos="slide-up" className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Managed Hosting</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          Looking for a managed hosting provider? Our agency provides comprehensive enterprise grade...
        </p>
        <button onClick={() => {
                    window.location.href = `/hosting`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Click Here <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div data-aos="slide-left"className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow service-card">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Go High Level CRM</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          GoHighLevel is an all-in-one CRM and marketing automation platform for agencies and small businesse...
        </p>
        <button onClick={() => {
                    window.location.href = `/gohigh`;
                  }}className="border-2 border-black px-4 sm:px-6 py-1 sm:py-2 rounded-full font-medium hover:bg-black hover:text-white flex items-center gap-2 text-sm sm:text-base">
          Click Here <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section  className="relative bg-black py-12 sm:py-20 lg:py-32 overflow-hidden">
        {/* Curved Background */}
        <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 lg:h-24 bg-white rounded-b-[50%]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-8 sm:pt-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4" data-aos="slide-down">
              Why Choose Us For Digital Marketing In Brisbane?
            </h2>
            <p className="text-white text-base sm:text-lg max-w-3xl mx-auto px-2" data-aos="slide-up">
              With so many digital marketing agencies to choose from, all promising the same results...
              Here's what sets us Growth Flow Media apart and why so many local businesses 
              engage us as their marketing partner:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                title: "Award-Winning Agency", 
                desc: "Growth Flow Media is a recognized award-winning digital marketing agency known for delivering outstanding results. With over 100 industry awards, our success reflects our commitment to innovation, performance, and client satisfaction. These achievements highlight the trust businesses place in us to drive real growth."
              },
              { 
                title: "No Contracts", 
                desc: "At Growth Flow Media, we believe in earning loyalty through results, not locking clients into long-term contracts. We operate with complete transparency, integrity, and honesty. Our clients stay with us because we deliver value, not because they are obligated to."
              },
              { 
                title: "No Outsourcing", 
                desc: "All services at Growth Flow Media are handled entirely by our in-house team. We never outsource our work, ensuring consistent quality, better communication, and complete control over every campaign we manage. This approach allows us to maintain high standards across all deliverables."
              },
              { 
                title: "Local Agency", 
                desc: "As a local agency, we understand the market, audience, and business environment better than anyone else. Our team is based locally, making it easy for clients to connect with us directly, collaborate closely, and build strong long-term partnerships."
              },
              { 
                title: "Real Results", 
                desc: "We focus on delivering real, measurable results that make a tangible impact on business growth. Our proven track record is supported by strong case studies, positive client reviews, and award-winning campaigns that consistently generate success."
              },
              { 
                title: "Experienced Team", 
                desc: "Our team brings over 30 years of combined experience in digital marketing and has worked with hundreds of businesses across various industries. This depth of experience allows us to craft tailored strategies that deliver sustainable growth and maximum ROI."
              }
            ].map((item, index) => (
              <div 
                key={index} data-aos="fade-up"
                className="group bg-[#0f0f0f] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-orange-800  why-choose-card"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 mb-2  sm:mb-3 lg:mb-4 group-hover:text-white transition-colors duration-300" data-aos="slide-down">
                  {index + 1}.{item.title}
                </div>
               
                <p data-aos="slide-right" className="text-white text-sm sm:text-base group-hover:text-black transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div data-aos="flip-up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-orange-500">You Focus on Your Business.</span>
                <br />
                <span className="text-white">We’ll Take Care of Your Growth.</span>
              </h2>
              <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="font-bold"> At Growth Flow Media,</span> we design data-driven strategies that create real impact and build strong online visibility for your business. Through expert web design and result-oriented digital marketing, we deliver engaging experiences for your target audience and help your brand move steadily toward success. From planning to execution, we stand by you at every step.
              </p>
              <p className="text-white mb-6 sm:mb-8 text-sm sm:text-base">
                Our marketing operations are proudly based in Australia, allowing us to stay closely connected with our clients and markets. Our technical and development operations are powered by a skilled team in India, ensuring efficiency, innovation, and high-quality execution across all projects.
              </p>
              <button className="bg-orange-500 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base" onClick={scrollToContact}>
                Get Started Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 md:mt-0">
              <img data-aos="slide-left"
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop"
                alt="Team discussion"
                className="rounded-lg w-full h-48 sm:h-64 object-cover col-span-2"
              />
              <img data-aos="slide-up"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
                alt="Team member"
                className="rounded-lg w-full h-40 sm:h-48 object-cover"
              />
              <img data-aos="slide-up"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                alt="Team"
                className="rounded-lg w-full h-40 sm:h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

  
<TestimonialsSection/>
      {/* FAQ Section */}
      {/* FAQ Section - Updated with Working Toggle */}
<section className="bg-black py-12 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div>
        <p data-aos="slide-up" className="text-orange-500 text-lg sm:text-xl mb-3 sm:mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Here's Some Frequently Asked Questions
        </p>
        <h2 data-aos="slide-up" className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          Your website and online marketing questions answered
        </h2>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8" data-aos="slide-right">
          {faqData.slice(0, 3).map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full p-3 sm:p-4 flex justify-between items-center cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <span className="text-white text-sm sm:text-base text-left font-medium pr-4">
                  {faq.question}
                </span>
                <span className={`text-orange-500 text-xl sm:text-2xl transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 sm:p-6 pt-2 border-t border-gray-700">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          data-aos="slide-up" 
          className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base transition-all hover:scale-105"
          onClick={() => {
            // You can implement "View All FAQs" functionality here
            alert('Viewing all FAQs - this would open a modal or navigate to a FAQ page');
          }}
        >
          More FAQs <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-8 md:mt-0" data-aos="slide-up">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
          alt="Team meeting"
          className="rounded-lg w-full shadow-lg"
        />
        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg">
          <h3 className="text-orange-500 font-bold text-lg mb-2">Need Immediate Help?</h3>
          <p className="text-gray-300 text-sm mb-4">
            Can't find your answer here? Our support team is ready to help!
          </p>
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            onClick={scrollToContact}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Latest News Section */}
      <section ref={ContactSection} className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
           <h2 data-aos="slide-left"className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
        
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
            <div>
              <h2 data-aos="slide-left"className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h2>
              <p data-aos="slide-up" className="text-orange-500 text-lg sm:text-xl mb-8 sm:mb-12" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                Stay up To Date With The Latest From Growth Flow Media.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div data-aos="slide-right"className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className='h-40 w-full sm:w-80 border rounded-lg overflow-hidden'>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className=''>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      How Growth Flow Media Delivers High-Performance PPC Management in Brisbane
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">January 3, 2026</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      PPC management is becoming the foundation stone for the success of businesses in Brisbane. The instantaneous reach that it offers
                    </p>
                  </div>
                </div>

                <div data-aos="slide-right" className="flex flex-col sm:flex-row gap-3 bg-white shadow-lg sm:shadow-xl rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className='h-40 w-full sm:w-80 border rounded-lg overflow-hidden'>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className=''>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">
                      Why Your Business Needs a Professional Website Design Agency in Brisbane
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-2">December 26, 2025</p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Website Design Agency in Brisbane plays a crucial role in today's market, where your website is often the very first
                    </p>
                  </div>
                </div>
              </div>

              {/* <button data-aos="slide-left"className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-orange-600 flex items-center gap-2 text-sm sm:text-base">
                View All <ChevronRight className="w-4 h-4" />
              </button> */}
            </div>

           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="min-h-screen bg-black">
        <section className="relative py-12 sm:py-16 px-4 sm:px-6" style={{background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'}}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div  data-aos="slide-right" className="bg-white p-4 sm:p-6 rounded-3xl shadow-2xl lg:w-64 xl:w-80 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
             <img
                src={image6}
                alt="Growth Flow Media"
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
              </div>

              <div className="space-y-3 mb-4 sm:mb-6">
                <a  href="tel:+919646174266"  className="w-full px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 text-white" style={{backgroundColor: '#FF9500'}}>
                  <Phone size={14} />
                  +91 9646174266
                </a>
               
              </div>

              <div className="flex items-center justify-between  mb-4 sm:mb-6 px-1">
              <div> <img
                  src={image7}
                  alt="Growth Flow Media"
                  className="h-12 object-cover sm:h-16 lg:h-20 w-auto"
                /></div>
              <div> <img
                  src={image8}
                  alt="Growth Flow Media"
                  className="h-12 object-cover sm:h-16 lg:h-20 w-auto"
                /></div>

              <div> <img
                  src={image9}
                  alt="Growth Flow Media"
                  className="h-12 object-cover :h-16 lg:h-20 w-auto"
                /></div>

            
              </div>

              <div className="flex gap-2 justify-center flex-wrap">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Facebook  className="text-white sm:w-14 sm:h-14" />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Linkedin  className="text-white sm:w-14 sm:h-14" />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Instagram  className="text-white sm:w-14 sm:h-14" />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Youtube  className="text-white sm:w-14 sm:h-14" />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full  p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Twitter  className="text-white sm:w-14 sm:h-14" />
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full  p-1 flex items-center justify-center" style={{backgroundColor: '#FF9500'}}>
                  <Youtube  className="text-white sm:w-14 sm:h-14" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 text-center pt-0 lg:pt-8 order-1 lg:order-2">
              <h1 data-aos="slide-left" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span  className="text-white">Let's </span>
                <span  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-white text-sm sm:text-base md:text-lg" style={{backgroundColor: '#FF9500'}}>
                  Chat
                  <span className="flex gap-1 sm:gap-1.5 items-end">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full dot"></span>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full dot dot-2"></span>
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full dot dot-3"></span>
                  </span>
                </span>
                <br />
                <span className="text-white">About Your Goals Today!</span>
              </h1>
             
              <p data-aos="slide-up" className="text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We love to talk with business owners about achieving incredible returns on the web. To find out if we're a good fit for each other, the best next step is to have a short discovery call with one of our digital experts.
              </p>

              <button data-aos="slide-up" className="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold flex items-center gap-2 mx-auto text-black text-sm sm:text-base" style={{backgroundColor: '#FF9500'}}
              onClick={scrollToContact}>
                Get Started Now
                <ChevronRight size={18} className="sm:w-20 sm:h-20" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 sm:px-6 py-8 sm:py-12" style={{background: 'linear-gradient(180deg, #1a1f2e 0%, #0a0e1a 100%)'}}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* ABOUT */}
        <div>
          {/* replace src with your logo path */}
          <img
            src={image10}
            alt="growth flow media"
            className="w-40 mb-5 onject-cover "
          />

          <p className=" w-40 text-[#F2E9D8] leading-relaxed text-sm">
            
            <br />
            Growth Flow Media we pride ourselves on delivering top-tier 
           services at some of the most competitive prices in the
            market.
          </p>
         
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
            {/* Quick Links Column */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li  className="flex items-center gap-2 text-gray-300 hover:text-orange-500 cursor-pointer text-xs sm:text-sm transition-colors">
                    <ChevronRight onClick={()=>window.location.href=link.path} size={12} className="sm:w-8 sm:h-8" style={{color: '#FF9500'}} />
                    <span onClick={()=>window.location.href=link.path} className="truncate">{link.name}</span>
                  </li>
                ))}
              </ul>

          
            </div>

            {/* Our Services Column */}
            <div>
              <h3 className="text-white text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
                 <div className="py-3 px-4">
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
            </div>

  
          </div>

          {/* Bottom Footer Links */}
          <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a onClick={() => window.location.href = 'https://growthflowmedia.com'} className="hover:text-orange-500 transition-colors whitespace-nowrap">growthflowmedia.com</a>
              <span className="hidden sm:inline">|</span>
                <span>© {new Date().getFullYear()} All Rights are Reserved </span>
              
            </div>
          </div>
        </footer>
{/* Enhanced Floating Help Button with Dropdown */}
<div className="help-button-container fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
  <div className="relative">
    {/* Main Help Button */}
    <button 
      className="px-4 sm:px-7 py-2 sm:py-3 text-white text-xs sm:text-sm font-bold rounded-l-lg border-2 border-[#FF9500] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#FF9500]/20"
      style={{backgroundColor: '#080705', writingMode: 'vertical-rl', textOrientation: 'mixed'}}
      onClick={(e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setHelpOpen(!helpOpen);
      }}
    >
      <p className='ml-2 '>Need Help?</p>
      
      <span className={`ml-2 transition-transform duration-300 ${helpOpen ? 'rotate-180' : ''}`}>
       <ChevronDown size={20} />
      </span>
    </button>

    {/* Dropdown Menu */}
    <div 
      className={`absolute right-full top-0 mr-2 lg:w-90 bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-2xl border border-[#FF9500]/30 overflow-hidden transition-all duration-300 ${
        helpOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'
      }`}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#FF9500]/20">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF9500] to-orange-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">How can we help?</h3>
            <p className="text-[#FF9500] text-sm">We're here for you</p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-3">
          <a 
            href="tel:+919646174266"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors group"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-8 rounded-full bg-[#FF9500]/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#FF9500]" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">Call Us Now</p>
              <p className="text-gray-400 text-xs">9646174266</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#FF9500] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a 
            href="mailto:support@growthflowmedia.com" 
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors group"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-8 rounded-full bg-[#FF9500]/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#FF9500]" />
            </div>
            <div className="flex-1">
              <p   className="text-white font-medium text-sm">Email Support</p>
              <a  href="mailto:support@growthflowmedia.com"  className="text-gray-400 text-xs truncate">support@growth...</a>
            </div>
            <ChevronRight className="w-4 h-4 text-[#FF9500] opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

      

        </div>

        Quick Actions
        <div className="mt-4 flex gap-2">
          <button 
            className="flex-1 bg-[#FF9500] hover:bg-[#e36a2e] text-white text-xs py-2 rounded-lg font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setHelpOpen(false);
              // Add your quote functionality here
              navigate('/contact')
            }}
          >
            Quote
          </button>
          <button 
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-xs py-2 rounded-lg font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setHelpOpen(false);
              // Add your services functionality here
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Services
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF9500] rounded-full animate-ping opacity-20"></div>
    </div>
  </div>
</div>
     
      </div>
    </div>
  );
}