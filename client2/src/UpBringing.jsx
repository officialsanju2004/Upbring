import React from 'react'
import TestimonialsSection from './TestimonialsSection'
import Footer from './Footer'
import BlogSection from './BlogSection'
import ContactSection from './ContactSection'
import FacilitiesSection from './FacilitiesSection'
import ExploreProperties from './ExploreProperties'
import AboutSection from './AboutSection'
import NavbarHero from './NavbarHero'

export default function UpBringing() {
  return (
    <div>
        <NavbarHero/>
        <AboutSection/>
        <ExploreProperties/>
        <FacilitiesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}
