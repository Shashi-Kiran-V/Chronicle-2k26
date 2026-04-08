import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, FileText, MessageSquare } from 'lucide-react';

const TARGET_EMAIL = 'chronicle2k26@gmail.com';

const ContactUs = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[+]?[\d\s\-()]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = `Name: ${formData.fullName}\nPhone: ${formData.phoneNumber}\n\n${formData.message}`;

    // Open Gmail compose directly in a new tab — no mail client needed
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(TARGET_EMAIL)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');

    // Reset form and close modal
    setFormData({ fullName: '', phoneNumber: '', subject: '', message: '' });
    setErrors({});
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setErrors({});
    }
  };

  // Variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  const inputBaseClasses =
    'w-full bg-hp-bg/60 border border-hp-gold-700/30 rounded-lg px-4 py-3 pl-12 text-hp-text-light font-sans text-base placeholder-hp-text-muted/50 focus:outline-none focus:border-hp-gold-500 focus:ring-1 focus:ring-hp-gold-500/40 focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300';

  const errorClasses = 'border-red-500/60 focus:border-red-400 focus:ring-red-400/40';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-gradient-to-b from-hp-bg-card to-hp-bg-modal rounded-2xl border border-hp-gold-700/30 shadow-[0_0_60px_rgba(212,175,55,0.1),0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative top glow bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent" />

            {/* Floating magical particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-hp-gold-500/40 rounded-full"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                onClose();
                setErrors({});
              }}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-hp-bg/50 border border-hp-gold-700/30 flex items-center justify-center text-hp-text-muted hover:text-hp-gold-500 hover:border-hp-gold-500/50 hover:bg-hp-bg transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Form Content */}
            <div className="relative z-10 px-8 py-8">
              {/* Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-hp-gold-300 mb-2 tracking-wide">
                  ✦ Send Us an Owl ✦
                </h2>
                <p className="text-hp-text-muted font-sans text-sm">
                  We'd love to hear from you. All fields are required.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                {/* Full Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-hp-gold-500 font-serif text-sm mb-2 tracking-wider uppercase">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-hp-gold-700/60" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`${inputBaseClasses} ${errors.fullName ? errorClasses : ''}`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 font-sans">{errors.fullName}</p>
                  )}
                </motion.div>

                {/* Phone Number */}
                <motion.div variants={itemVariants}>
                  <label className="block text-hp-gold-500 font-serif text-sm mb-2 tracking-wider uppercase">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-hp-gold-700/60" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputBaseClasses} ${errors.phoneNumber ? errorClasses : ''}`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-xs mt-1 font-sans">{errors.phoneNumber}</p>
                  )}
                </motion.div>

                {/* Subject */}
                <motion.div variants={itemVariants}>
                  <label className="block text-hp-gold-500 font-serif text-sm mb-2 tracking-wider uppercase">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-hp-gold-700/60" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={`${inputBaseClasses} ${errors.subject ? errorClasses : ''}`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1 font-sans">{errors.subject}</p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-hp-gold-500 font-serif text-sm mb-2 tracking-wider uppercase">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-hp-gold-700/60" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      className={`${inputBaseClasses} resize-none pt-3 ${errors.message ? errorClasses : ''}`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 font-sans">{errors.message}</p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-2">
                  <button
                    type="submit"
                    className="w-full relative overflow-hidden bg-gradient-to-r from-hp-gold-700 via-hp-gold-500 to-hp-gold-700 text-hp-bg font-serif font-bold text-lg py-3.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] tracking-wider uppercase"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </span>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactUs;
