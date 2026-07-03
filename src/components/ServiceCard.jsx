import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white border border-gray-100 rounded-lg p-8 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden h-full shadow-sm"
    >
      {/* Decorative Accent Ribbon */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-200 group-hover:bg-accent transition-colors duration-300" />

      <div>
        {/* Animated Icon Box */}
        <div className="inline-flex items-center justify-center p-3.5 bg-primary-light/5 text-primary rounded mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-500">
          <Icon className="h-6 w-6 stroke-[2]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-muted text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary font-bold text-sm tracking-wide group-hover:text-accent transition-colors duration-300"
      >
        <span className="mr-2">Learn More</span>
        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}
