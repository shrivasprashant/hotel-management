import React from 'react'
import HeroSection from './HeroSection'
import BookingSection from './BookingSection'
import AboutSection from './AboutSection'
import RoomsAndSuitesSection from './RoomsAndSuitesSection'
import ServicesSection from './ServicesSection'
import SpecialOffersSection from './SpecialOffersSection'
import TestimonialsSection from './TestimonialsSection'
import GallerySection from './GallerySection'
import NearbyAttractionsSection from './NearbyAttractionsSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <AboutSection/>
        <RoomsAndSuitesSection/>
        <ServicesSection/>
        <SpecialOffersSection/>
        <BookingSection/>
        <TestimonialsSection/>
        <GallerySection/>
        <NearbyAttractionsSection/>
    </div>
  )
}

export default Home
