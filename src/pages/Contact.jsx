import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Plus, Minus } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import PageWrapper from '../components/PageWrapper';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Headquarters",
      details: "Quora Builders, Akurana 20850"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: "Main Office: +94 77 302 0979"
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      details: "Quorabuilders@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Thursday: 8:00 AM - 6:00 PM / Saturday - Sunday: 8:00 AM - 6:00 PM"
    }
  ];

  const faqs = [
    {
      question: "What areas does Quora Builders service?",
      answer: "We are headquartered in New York but maintain licensed operations and active project sites across NY, NJ, CT, and PA. For large-scale commercial or industrial development, we deploy nationwide."
    },
    {
      question: "Do you handle building permits and local zoning board applications?",
      answer: "Yes, our team handles all structural engineering documentation, zoning board filings, municipal council permits, and environment impact applications. We handle the bureaucracy so your build stays on timeline."
    },
    {
      question: "Can you construct projects according to green building/LEED guidelines?",
      answer: "Absolutely. We have multiple LEED-accredited project managers on staff. We specialize in selecting recycled structural steel, installing solar tiles, implementing greywater filters, and optimizing insulation for low energy loads."
    },
    {
      question: "How do you handle cost estimations and material price fluctuations?",
      answer: "We use sophisticated estimation software that integrates real-time material price indexes. We offer transparent Cost-Plus or Fixed-Price contracts. Once a bid is locked, we buy core steel and concrete early to protect against inflation."
    },
    {
      question: "Are you fully licensed, bonded, and insured?",
      answer: "Yes. Quora Builders is a fully licensed general contractor, carries a $10M liability insurance bond, and provides workers' compensation coverage for all field operations. Proof of compliance is shared during pre-construction meetings."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <PageWrapper>
      {/* Sub-Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none select-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left space-y-4">
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <span className="w-8 h-1 bg-accent rounded" />
            <span className="text-accent uppercase tracking-widest text-xs font-bold">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base leading-relaxed font-medium">
            Have questions about bids, site planning, or need an engineering estimate? Reach out to our Metropolis office today.
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
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">Connect With Our Office</h2>
                <div className="h-1 bg-accent w-16 mt-2 rounded" />
                <p className="text-neutral-muted text-sm leading-relaxed mt-4">
                  For general contractor partnerships, architect integrations, or site consultations, use our details below. Or drop by our Metropolis headquarters.
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
                      <p className="text-neutral-muted text-xs md:text-sm leading-relaxed">{detail.details}</p>
                    </div>
                  </motion.div>
                ))}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7100260696093!2d80.6165344!3d7.386356300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3433a138503cf%3A0x85fe28ffc22e94f7!2sQuora%20Builders!5e0!3m2!1sen!2slk!4v1783049209123!5m2!1sen!2slk"
            className="w-full h-full border-0 "
            allowFullScreen=""
            loading="lazy"
            title="Quora Builders Office Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Floating Marker Card */}
          {/* <div className="absolute top-8 left-8 bg-primary/95 text-white p-5 rounded-lg border border-primary-light shadow-2xl hidden md:block max-w-sm">
            <h4 className="font-extrabold text-accent text-sm tracking-wider uppercase mb-1">Our Location</h4>
            <p className="font-bold text-base mb-1">Quora Builders Plaza</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              123 Construction Boulevard, Suite 500, Metropolis, NY 10001
            </p>
          </div> */}
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
