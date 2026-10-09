import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { OwnerSection } from "@/components/owner-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <>
      <Hero locale="et" />
      <ServicesSection locale="et" />
      <AboutSection locale="et" />
      <OwnerSection locale="et" />
      <GallerySection locale="et" />
      <ContactSection locale="et" />
    </>
  );
}
