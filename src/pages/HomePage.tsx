import Hero from '../components/Hero'
import BookingSearch from '../components/BookingSearch'
import CategorySection from '../components/CategorySection'
import FeaturedFleet from '../components/FeaturedFleet'
import ServicesSection from '../components/ServicesSection'
import ChauffeurSection from '../components/ChauffeurSection'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Membership from '../components/Membership'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingSearch />
      <CategorySection />
      <FeaturedFleet />
      <ServicesSection />
      <ChauffeurSection />
      <WhyChooseUs />
      <Testimonials />
      <Membership />
      <CTASection />
    </>
  )
}
