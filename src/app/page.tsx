import BusinessMap from '@/components/businessMap';
import CompanyBusiness from '@/components/companyBusiness';
import CompanyStructure from '@/components/companyStructure';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import VisionMission from '@/components/visionMission';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <VisionMission />
      <CompanyBusiness />
      <BusinessMap />
      <CompanyStructure />
      <Contact />
    </>
  );
}
