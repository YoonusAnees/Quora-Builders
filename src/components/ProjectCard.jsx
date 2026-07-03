import { motion } from 'framer-motion';
import { MapPin, Plus } from 'lucide-react';

export default function ProjectCard({ image, title, location, category, description }) {
  return (
    <motion.div
      layout // Smooth transitions during filtering
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover="hover"
      className="relative rounded-lg overflow-hidden h-[380px] bg-primary group shadow-md cursor-pointer"
    >
      {/* Background Image */}
      <motion.img
        variants={{
          hover: { scale: 1.08, filter: "brightness(0.5)" }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        src={image}
        alt={title}
        className="w-full h-full object-cover select-none"
      />

      {/* Default Overlay gradient for safety */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent z-10" />

      {/* Overlay Details (Hidden by default, shown/animated on hover) */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
        <span className="text-accent uppercase tracking-widest text-xs font-extrabold mb-1">
          {category}
        </span>
        
        <h3 className="text-xl font-bold mb-1 tracking-tight leading-snug group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Expandable/Sliding Description Details */}
        <motion.div
          variants={{
            hover: { height: "auto", opacity: 1, marginTop: "8px" }
          }}
          initial={{ height: 0, opacity: 0, marginTop: "0px" }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-300 text-xs leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Location Row */}
        <div className="flex items-center space-x-1.5 text-gray-400 mt-2 text-xs">
          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>{location}</span>
        </div>
      </div>

      {/* Zoom Icon indicator */}
      <motion.div
        variants={{
          hover: { opacity: 1, scale: 1 }
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 bg-accent p-2.5 rounded-full text-primary z-20 shadow-md"
      >
        <Plus className="h-5 w-5 stroke-[3]" />
      </motion.div>
    </motion.div>
  );
}
