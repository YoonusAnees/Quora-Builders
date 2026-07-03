import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, align = 'center' }) {
  const isLeft = align === 'left';
  
  return (
    <div className={`mb-16 flex flex-col ${isLeft ? 'items-start text-left' : 'items-center text-center'} w-full`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-accent uppercase tracking-widest font-semibold text-xs md:text-sm mb-2 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-accent mt-4 rounded-full"
      />
    </div>
  );
}
