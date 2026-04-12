import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    time: "08th April 2026",
    title: "Registration Start Date",
    description: "The gates to The Chronicle 2K26 are officially open. Begin your mystical journey.",
    type: "event"
  },
  {
    time: "17th April 2026",
    title: "Last date for Abstract Submission for Epilogue",
    description: "Final deadline to submit your innovative project abstracts for the Transfiguration showcase.",
    type: "event"
  },
  {
    time: "21st April 2026",
    title: "Last date for Events Enrolment",
    description: "Final deadline to enrol in the various magical challenges and contests.",
    type: "event"
  },
  {
    time: "22nd April 2026",
    title: "Chronicle-2K26",
    description: "The grand day of The Chronicle 2K26. All events and ceremonies commence.",
    type: "event"
  }
];

const TimelineCard = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full mb-12 group"
    >
      
      {/* Connector and Node */}
      <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-hp-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.8)] border-2 border-hp-bg group-hover:scale-125 transition-transform duration-300"></div>
      </div>
      
      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-12px)] pl-16 md:p-0 ${isEven ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
        <motion.div 
          whileHover={{ y: -5 }}
          className={`bg-hp-bg-card border border-hp-gold-700/30 p-6 rounded relative overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all ${item.type === 'event' ? 'border-l-4 border-l-hp-slytherin' : 'border-l-4 border-l-hp-gryffindor'}`}
        >
          {/* Subtle starry background inside cards */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <span className="text-hp-gold-700 font-sans tracking-widest text-xs uppercase font-bold mb-2 block">{item.time}</span>
            <h3 className="text-xl font-serif text-hp-gold-300 mb-2">{item.title}</h3>
            <p className="text-hp-text-muted text-sm font-sans leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-hp-gold-500 mb-4 inline-block drop-shadow-md">
            The Prophesied Path
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="max-w-2xl mx-auto text-lg text-hp-text-muted font-sans">
            Follow the stars. Here is the exact schedule of our magical events.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 bg-gradient-to-b from-hp-gold-700/20 via-hp-gold-500/50 to-hp-gold-700/20"></div>
          
          <div className="relative z-10 pt-8 pb-4">
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
