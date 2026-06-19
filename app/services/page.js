"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import ServicesHero from "../../components/ServicesHero";
import ServicesList from "../../components/ServicesList";
import WhyChooseServices from "../../components/WhyChooseServices";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafbfe] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full">
        <ServicesHero activeTab={activeTab} onTabChange={setActiveTab} />
        <ServicesList onApply={() => setModalOpen(true)} />
        <WhyChooseServices />
        <CTASection />
      </main>
      <Footer />

      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
