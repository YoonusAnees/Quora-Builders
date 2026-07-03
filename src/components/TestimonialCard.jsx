import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({ quote, name, role, rating = 5, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
      className="bg-white border border-gray-100 rounded-lg p-8 relative flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Decorative Giant Quote Icon */}
      <div className="absolute top-6 right-8 text-accent/15 select-none">
        <Quote className="h-12 w-12 transform scale-x-[-1]" />
      </div>

      <div>
        {/* Star Rating */}
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4.5 w-4.5 ${
                i < rating ? 'text-accent fill-accent' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Quote */}
        <p className="text-gray-600 italic text-sm md:text-base leading-relaxed mb-6 relative z-10">
          "{quote}"
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center space-x-4 border-t border-gray-100 pt-4 mt-auto">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border-2 border-accent"
        />
        <div>
          <h4 className="font-extrabold text-primary text-sm tracking-tight">{name}</h4>
          <p className="text-neutral-muted text-xs font-semibold">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
