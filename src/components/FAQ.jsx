import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can join the Chronicle?",
    answer: "Any brave witch, wizard, or muggle from any college. No letter from an owl required"
  },
  {
    question: "How do I register?",
    answer: "No spells needed. Just click on the Register button and fill the form. (Saying \"I solemnly swear I am up to no good\" is optional.)"
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Of course! Even Hermione signed up for everything."
  },
  {
    question: "What is this \"abstract\" you speak of?",
    answer: "It's like your spell plan. Tell us your idea in short according to abstract theme, no need to write the entire Standard Book of Spells."
  },
  {
    question: "When is the last date to register?",
    answer: "Check the timeline on the website. If you miss it, not even Dumbledore can help you"
  },
  {
    question: "Are there prizes?",
    answer: "Obviously. Eternal glory, house points, and maybe actual prizes too"
  },
  {
    question: "How will I know if I'm selected?",
    answer: "No owls, sorry. You'll be notified through email or WhatsApp, keep your wands (phones) ready."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes. Something even better than a Chocolate Frog card"
  },
  {
    question: "Who do I contact if I'm confused?",
    answer: "Reach out to the event coordinators. Please don't try to summon them with a spell."
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
