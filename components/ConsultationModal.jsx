"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationForm from "./ConsultationForm";

export default function ConsultationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-50"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#314259] mb-2">Book Free Consultation</h3>
              <p className="text-sm text-gray-500">
                Submit your details and our compliance expert will contact you shortly.
              </p>
            </div>

            <ConsultationForm isPopup={true} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
