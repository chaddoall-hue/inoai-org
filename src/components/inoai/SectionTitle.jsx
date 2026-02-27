import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-bold text-white mb-6"
    >
      {children}
    </motion.h2>
  );
}