import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { OwnerSection } from "@/components/owner-section";
import { ServicesSection } from "@/components/services-section";

export default function HomeEn() {
  return (
    <>
      <Hero locale="en" />
      <ServicesSection locale="en" />
      <AboutSection locale="en" />
      <OwnerSection locale="en" />
      <GallerySection locale="en" />
      <ContactSection locale="en" />
    </>
  );
}
