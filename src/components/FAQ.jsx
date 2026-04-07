import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate in The Chronicle 2K26?",
    answer: "Any witch or wizard currently enrolled in a valid magical or muggle academic institution can participate. Bring your wands (student IDs) for verification."
  },
  {
    question: "Do I have to participate in all events?",
    answer: "No, you may choose to specialize! You can enroll in individual challenges or form a triad for multiple events."
  },
  {
    question: "What is the registration fee?",
    answer: "Golden galleons are not required. The event is completely free of charge. We primarily value your magical dedication and skills."
  },
  {
    question: "What equipment should I bring?",
    answer: "For design and logic challenges, bringing your own enchanted device (laptop) is highly recommended. We will provide Wi-Fi access to the global floo network."
  },
  {
    question: "Who do I contact if I have questions?",
    answer: "You can send an owl to our prefects via the Contact Us section below, or speak to any organizer wearing a golden badge on the day of the event."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-transparent relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-hp-gold-500 mb-4 inline-block drop-shadow-md">
            Common Inquiries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="text-lg text-hp-text-muted font-sans font-medium">
            Answers to questions asked before the Sorting.
          </p>
        </div>

        <div className="space-y-4 relative z-10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-hp-gold-700/30 rounded overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-[0_0_15px_rgba(212,175,55,0.15)] bg-hp-bg-card' : 'bg-hp-bg hover:bg-hp-bg-card/50'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-serif text-lg ${openIndex === index ? 'text-hp-gold-300' : 'text-hp-text-light'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-hp-gold-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-hp-text-muted font-sans border-t border-hp-gold-700/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
