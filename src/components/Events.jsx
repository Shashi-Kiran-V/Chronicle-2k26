import React, { useState } from 'react';
import { BookOpen as Book, Code2, MonitorPlay, MessageSquare, Paintbrush, Compass, X, Download, UserPlus, Image as ImageIcon, Sparkles, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 'binary-tales',
    title: 'Binary Tales',
    category: 'Arithmancy & Logic',
    icon: Code2,
    description: 'A unique programming contest intertwined with magical lore. Solve algorithmic challenges wrapped in intriguing Hogwarts narratives.',
    color: 'emerald',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93750'
  },
  {
    id: 'epilogue',
    title: 'Epilogue',
    category: 'Transfiguration',
    icon: MonitorPlay,
    description: 'A platform to showcase your innovative projects. Present your final transfigurations to our wizengamot jury and prove your worth.',
    color: 'blue',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93745'
  },
  {
    id: 'verbal-arena',
    title: 'Verbal Arena',
    category: 'Charms & Debate',
    icon: MessageSquare,
    description: 'Cross wands with words. Participate in this fierce debate competition and demonstrate your rhetorical prowess on wizarding world topics.',
    color: 'rose',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93748'
  },
  {
    id: 'recraft',
    title: 'Recraft',
    category: 'Dark Arts Design',
    icon: Paintbrush,
    description: 'Unleash your creativity in our spellbook cover design competition. Redesign classic tomes or breathe life into new cursed texts.',
    color: 'amber',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93749'
  },
  {
    id: 'hidden-chapters',
    title: 'Hidden Chapters',
    category: 'Marauders Hunt',
    icon: Compass,
    description: 'A thrilling treasure hunt testing your wits. Solve cryptic runic clues hidden across the castle grounds to find the lost chapters.',
    color: 'violet',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93746'
  },
  {
    id: 'stories-untold',
    title: 'Stories Untold',
    category: 'Divination',
    icon: ImageIcon,
    description: 'A picture is worth a thousand spells. Perceive the subtle prophecies hidden within imagery and draft compelling, imaginative visions.',
    color: 'teal',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93747'
  }
];

const EventCard = ({ event, onViewDetails }) => {
  const Icon = event.icon;
  return (
    <div className="group relative bg-hp-bg-card border border-hp-gold-700/20 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
      {/* Magical Glint Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="p-3 bg-hp-bg-alt rounded-md border border-hp-gold-700/10 group-hover:bg-hp-gold-500/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-hp-gold-300 group-hover:text-hp-gold-500 transition-colors drop-shadow-md" />
        </div>
        <span className="text-xs font-sans tracking-widest uppercase text-hp-gold-700 px-3 py-1 bg-hp-bg-alt border border-hp-gold-700/10 rounded-full">
          {event.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-serif text-hp-text-light mb-3 group-hover:text-hp-gold-300 transition-colors">
        {event.title}
      </h3>
      
      <p className="text-hp-text-muted text-sm leading-relaxed mb-6 font-sans flex-grow">
        {event.description}
      </p>
      
      <div className="mt-auto pt-4 border-t border-hp-gold-700/20">
        <button 
          onClick={() => onViewDetails(event)} 
          className="w-full px-4 py-2 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif hover:bg-hp-bg hover:border-hp-gold-500 transition-all shadow-md flex items-center justify-center gap-2"
        >
          Reveal Secrets
          <Sparkles className="w-4 h-4 opacity-70" />
        </button>
      </div>
    </div>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEnrollment = (event) => {
    if (event.konfhubUrl) {
      window.open(event.konfhubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  React.useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEvent]);

  return (
    <section id="events" className="py-24 bg-transparent relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-hp-gold-500 mb-4 inline-block drop-shadow-md">
            The Triwizard Challenges
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="max-w-2xl mx-auto text-lg text-hp-text-muted font-sans">
            Prepare your wands. Dive into our diverse selection of magical exams designed to challenge your intellect and creativity.
          </p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}>
              <EventCard 
                event={event} 
                onViewDetails={setSelectedEvent} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Overlay */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#000000e6] backdrop-blur-md transition-opacity">
          {/* Modal Content - Parchment Style */}
          <div className="relative bg-hp-bg-modal border border-hp-gold-500/30 w-full max-w-2xl rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
            
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-hp-bg-alt/80 border border-hp-gold-700/30 rounded text-hp-gold-500 hover:text-hp-gold-300 hover:bg-hp-bg-card transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto w-full h-full custom-scrollbar relative z-10">
              
              <div className="relative w-full h-64 sm:h-80 bg-hp-bg-alt border-b border-hp-gold-500/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-hp-bg-modal to-transparent top-1/2"></div>
                <div className="relative z-10 text-center px-4">
                  <selectedEvent.icon className="w-20 h-20 text-hp-gold-700 mx-auto mb-4 opacity-50 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                  <p className="text-hp-gold-500 font-serif text-xl uppercase tracking-widest">{selectedEvent.title} Portrait</p>
                  <p className="text-sm text-hp-gold-700/60 mt-2 font-sans italic">(Awaiting Magical Illustration)</p>
                </div>
              </div>

              <div className="p-8 relative">
                <div className="inline-block px-3 py-1 bg-hp-bg text-hp-gold-700 border border-hp-gold-700/30 text-xs font-sans tracking-widest uppercase rounded mb-4">
                  {selectedEvent.category}
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-hp-gold-300 mb-6 drop-shadow-md">
                  {selectedEvent.title}
                </h3>
                
                <div className="prose prose-invert max-w-none font-sans text-hp-text-light leading-relaxed mb-10">
                  <p className="text-lg text-hp-gold-100">{selectedEvent.description}</p>
                  <p className="mt-4 text-hp-text-muted">
                    Consult the prefects for detailed rules. Ensure your ink and parchment are ready to showcase your utmost potential in this critical OWL-level examination.
                  </p>
                </div>

                <div className="flex flex-wrap flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-hp-gold-700/20">
                  <a 
                    href="#omniocular-rules" 
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-4 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif hover:bg-hp-bg hover:border-hp-gold-500 transition-all shadow-md text-sm md:text-base whitespace-nowrap"
                  >
                    <Download className="w-5 h-5 opacity-80 shrink-0" />
                    Owl Brochure
                  </a>
                  {selectedEvent.id === 'epilogue' && (
                    <>
                      <a 
                        href="/Epilogue_Abstract_Template.docx" 
                        download
                        className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-4 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif hover:bg-hp-bg hover:border-hp-gold-500 transition-all shadow-md text-sm md:text-base whitespace-nowrap"
                      >
                        <Download className="w-5 h-5 opacity-80 shrink-0" />
                        Download Abstract
                      </a>
                      <a 
                        href="https://forms.gle/FA283Cdm3X5LTmo69" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-4 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif hover:bg-hp-bg hover:border-hp-gold-500 transition-all shadow-md text-sm md:text-base whitespace-nowrap"
                      >
                        <Upload className="w-5 h-5 opacity-80 shrink-0" />
                        Upload Abstract
                      </a>
                    </>
                  )}
                  <button 
                    onClick={() => handleEnrollment(selectedEvent)}
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-4 py-4 bg-hp-gold-500 text-hp-bg font-serif font-bold hover:bg-hp-gold-300 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] cursor-pointer text-sm md:text-base whitespace-nowrap"
                  >
                    <UserPlus className="w-5 h-5 opacity-90 shrink-0" />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
