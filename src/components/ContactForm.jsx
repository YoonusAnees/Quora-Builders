import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const phoneNumber = "94761310771"; // Your WhatsApp number

    const message = `*New Quote Request*

👤 Full Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone || "Not provided"}
🏗️ Project Type: ${formData.projectType}

📝 Project Details:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");

      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-gray-100 relative overflow-hidden">
      {/* Visual Success Overlay */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center text-center p-6 z-30"
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -18 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <CheckCircle2 className="h-16 w-16 text-accent mb-4 stroke-[2]" />
          </motion.div>
          <h3 className="text-2xl font-extrabold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-300 max-w-sm text-sm">
            Thank you for reaching out to Quora Builders. Our team will review your inquiry and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 text-accent hover:underline text-sm font-bold cursor-pointer"
          >
            Send another message
          </button>
        </motion.div>
      )}

      <h3 className="text-2xl font-bold text-primary mb-2">Request a Free Quote</h3>
      <p className="text-neutral-muted text-sm mb-6 leading-relaxed">
        Provide details about your target project below, and our engineering estimators will compile an initial quote breakdown.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label htmlFor="form-name" className="block text-xs font-extrabold uppercase text-primary mb-1.5 tracking-wider">
              Full Name *
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Areeb Shakir"
              className="w-full text-sm px-4 py-3 rounded bg-neutral-light border border-gray-200 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="form-email" className="block text-xs font-extrabold uppercase text-primary mb-1.5 tracking-wider">
              Email Address *
            </label>
            <input
              id="form-email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. areebshakir@gmail.com"
              className="w-full text-sm px-4 py-3 rounded bg-neutral-light border border-gray-200 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label htmlFor="form-phone" className="block text-xs font-extrabold uppercase text-primary mb-1.5 tracking-wider">
              Phone Number
            </label>
            <input
              id="form-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +94 77 302 0979"
              className="w-full text-sm px-4 py-3 rounded bg-neutral-light border border-gray-200 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="form-projectType" className="block text-xs font-extrabold uppercase text-primary mb-1.5 tracking-wider">
              Project Type
            </label>
            <select
              id="form-projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full text-sm px-4 py-3 rounded bg-neutral-light border border-gray-200 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 cursor-pointer appearance-none"
            >
              <option value="Residential">Residential Construction</option>
              <option value="Commercial">Commercial Construction</option>
              <option value="Renovation">Renovation & Remodel</option>
              <option value="Architecture">Architecture & Design</option>
              <option value="Other">Other Custom Service</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-extrabold uppercase text-primary mb-1.5 tracking-wider">
            Project Description & Details *
          </label>
          <textarea
            id="form-message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about the site location, size, scope, timeline, budget, etc..."
            className="w-full text-sm px-4 py-3 rounded bg-neutral-light border border-gray-200 focus:outline-none focus:border-accent focus:bg-white transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-4 rounded text-sm transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              <span>Generating Quote Request...</span>
            </>
          ) : (
            <>
              <span>Send Request</span>
              <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 text-accent" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
