'use client';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      className="p-8 rounded-xl relative overflow-hidden group transition-all duration-300 bg-[#1A1F2C] border border-primary/10"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="service-card-glow opacity-0 group-hover:opacity-5" />
      <div className="relative z-10">
        <div className="text-gradient mb-6 text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-white/90">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}