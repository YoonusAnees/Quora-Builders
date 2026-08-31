import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Plus, Minus, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { COMPANY } from '../config/company';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const contactDetails = [
    {
      icon: MapPin,
      title: "Headquarters & Office",
      details: COMPANY.address.formatted,
      link: COMPANY.googleMapsEmbed
    },
    {
      icon: Phone,
      title: "Direct Telephones",
      details: COMPANY.phone,
      link: `tel:${COMPANY.phoneRaw}`
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      details: COMPANY.email,
      link: `mailto:${COMPANY.email}`
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: COMPANY.openingHours,
      link: null
    }
  ];

  const faqs = [
    {
      question: "What service areas does Quora Builder cover in Kandy?",
      answer: "We are headquartered in Akurana, Kandy and construct residential houses across Kandy City, Peradeniya, Katugastota, Kundasale, Ampitiya, Digana, and Kadugannawa."
    },
    {
      question: "Do you handle Kandy Municipal Council & Pradeshiya Sabha approvals?",
      answer: "Yes, our team handles all structural engineering documentation, land survey blueprints, council filings, and NBRO stability reports required for building permits in Kandy."
    },
    {
      question: "How do you handle house foundation engineering on steep Kandy hillside plots?",
      answer: "We conduct geotechnical core drilling to assess soil load-bearing capacity and design stepped concrete footings and reinforced retaining walls with subterranean drainage."
    },
    {
      question: "How do you protect home owners against material price inflation?",
      answer: "We provide itemized Bill of Quantities (BOQ) with fixed-price contracts. Core steel and cement contracts are locked early to prevent cost overruns."
    },
    {
      question: "Are you fully licensed and insured?",
      answer: "Yes, Quora Builder operates strictly in compliance with ICTAD/CIDA building standards and carries comprehensive site liability insurance for all construction operations."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <PageWrapper>
      <SEO
        title="Contact Quora Builder | Kandy Office & Consultation"
        description="Contact Quora Builder in Akurana, Kandy. Call +94 77 302 0979 or email Quorabuilders@gmail.com for house construction consultations, BOQ estimates, and site assessments."
        canonical="/contact"
        schema={faqSchema}
      />

      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Kandy Office</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Have questions about house construction costs, plot site assessments, or architectural plans? Reach out to our Akurana office today.
          </p>
        </div>
      </section>

      {/* Main Info and Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">Connect With Our Kandy Office</h2>
                <div className="h-1 bg-accent w-16 mt-2 rounded" />
                <p className="text-neutral-muted text-sm leading-relaxed mt-4">
                  For house construction inquiries, site visits, or architectural plan consultations, contact Quora Builder using our details below or drop by our Akurana office.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactDetails.map((detail, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    key={idx}
                    className="flex space-x-4 bg-neutral-light border border-gray-100 rounded-lg p-5 hover:border-accent hover:bg-white transition-all duration-300 shadow-sm"
                  >
                    <div className="bg-primary text-accent p-3 rounded shrink-0 h-fit">
                      <detail.icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-primary text-sm tracking-tight mb-1">{detail.title}</h3>
                      {detail.link ? (
                        <a href={detail.link} className="text-neutral-dark font-medium text-xs md:text-sm hover:text-accent transition-colors">
                          {detail.details}
                        </a>
                      ) : (
                        <p className="text-neutral-muted text-xs md:text-sm leading-relaxed">{detail.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-colors text-sm w-full"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat on WhatsApp ({COMPANY.phone})</span>
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="bg-neutral-light border-t border-b border-gray-100">
        <div className="w-full h-[450px] relative p-4">
          <iframe
            src={COMPANY.googleMapsEmbed}
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            title="Quora Builders Akurana Kandy Office Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="HAVE QUESTIONS?"
            title="Frequently Asked Questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded overflow-hidden bg-neutral-light hover:bg-white hover:border-accent transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-primary focus:outline-none cursor-pointer text-sm md:text-base"
                  >
                    <span>{faq.question}</span>
                    <span className="bg-primary/5 text-primary p-1 rounded group hover:bg-accent/10">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4 text-accent" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-neutral-muted text-xs md:text-sm leading-relaxed border-t border-gray-150">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
