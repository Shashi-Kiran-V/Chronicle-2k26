import React, { useState } from 'react';
import { BookOpen as Book, Code2, MonitorPlay, MessageSquare, Paintbrush, Compass, X, Download, UserPlus, Image as ImageIcon, Sparkles, Upload, MapPin, Users, GraduationCap, Banknote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import posters
import binaryTalesPoster from '../assets/binary tales.png';
import epiloguePoster from '../assets/epilogue.png';
import hiddenChapterPoster from '../assets/hidden chapter.png';
import recraftPoster from '../assets/recraft.png';
import storiesUntoldPoster from '../assets/stories untold.png';
import verbalArenaPoster from '../assets/verbal arena.png';

const events = [
  {
    id: 'binary-tales',
    title: 'Binary Tales',
    category: 'Arithmancy & Logic',
    icon: Code2,
    poster: binaryTalesPoster,
    description: 'A unique programming contest intertwined with magical lore. Solve algorithmic challenges wrapped in intriguing Hogwarts narratives.',
    color: 'emerald',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93750',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
  },
  {
    id: 'epilogue',
    title: 'Epilogue',
    category: 'Transfiguration',
    icon: MonitorPlay,
    poster: epiloguePoster,
    description: 'A platform to showcase your innovative projects. Present your final transfigurations to our wizengamot jury and prove your worth.',
    color: 'blue',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93745',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
  },
  {
    id: 'verbal-arena',
    title: 'Verbal Arena',
    category: 'Charms & Debate',
    icon: MessageSquare,
    poster: verbalArenaPoster,
    description: 'Cross wands with words. Participate in this fierce debate competition and demonstrate your rhetorical prowess on wizarding world topics.',
    color: 'rose',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93748',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
  },
  {
    id: 'recraft',
    title: 'Recraft',
    category: 'Dark Arts Design',
    icon: Paintbrush,
    poster: recraftPoster,
    description: 'Unleash your creativity in our spellbook cover design competition. Redesign classic tomes or breathe life into new cursed texts.',
    color: 'amber',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93749',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
  },
  {
    id: 'hidden-chapters',
    title: 'Hidden Chapters',
    category: 'Marauders Hunt',
    icon: Compass,
    poster: hiddenChapterPoster,
    description: 'A thrilling treasure hunt testing your wits. Solve cryptic runic clues hidden across the castle grounds to find the lost chapters.',
    color: 'violet',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93746',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
  },
  {
    id: 'stories-untold',
    title: 'Stories Untold',
    category: 'Divination',
    icon: ImageIcon,
    poster: storiesUntoldPoster,
    description: 'A picture is worth a thousand spells. Perceive the subtle prophecies hidden within imagery and draft compelling, imaginative visions.',
    color: 'teal',
    konfhubUrl: 'https://konfhub.com/checkout/chronicle-2k26?ticketId=93747',
    details: {
      location: 'CSE Department',
      eligibility: 'Open to all branches of BE and Diploma',
      teamSize: '2-4',
      fee: '₹50'
    }
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
          className="w-full px-4 py-2 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif hover:bg-hp-bg hover:border-hp-gold-500 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#000000e6] backdrop-blur-md transition-opacity">
            {/* Modal Content - Parchment Style */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-hp-bg-modal border border-hp-gold-500/30 w-full max-w-4xl rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300"
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 z-[110] p-1.5 bg-hp-bg-alt/90 border border-hp-gold-700/50 rounded text-hp-gold-500 hover:text-hp-gold-300 hover:bg-hp-bg-card transition-all shadow-xl cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto w-full h-full custom-scrollbar relative z-10 p-6 pt-14 md:p-10 md:pt-16">
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Portrait Poster Section */}
                  <div className="lg:w-1/2 flex justify-center items-center">
                    <div className="relative group w-full max-w-sm">
                      <div className="absolute -inset-1 bg-gradient-to-r from-hp-gold-500/20 to-transparent rounded-lg blur opacity-30"></div>
                      <img 
                        src={selectedEvent.poster} 
                        alt={selectedEvent.title} 
                        className="relative w-full h-auto rounded-lg shadow-2xl border border-hp-gold-500/20 object-contain mx-auto"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 flex flex-col">
                    <div className="mb-6">
                      <span className="text-xs font-sans tracking-widest uppercase text-hp-gold-700 px-3 py-1 bg-hp-bg-alt border border-hp-gold-700/10 rounded-full mb-4 inline-block">
                        {selectedEvent.category}
                      </span>
                      <h3 className="text-4xl font-serif text-hp-gold-300 leading-tight">
                        {selectedEvent.title}
                      </h3>
                    </div>

                    <p className="text-hp-text-light text-lg font-sans leading-relaxed mb-8 italic opacity-90">
                      {selectedEvent.description}
                    </p>

                    {/* Event Details 4-Block Section */}
                    <div className="mb-10">
                      <h4 className="text-hp-gold-500 font-serif text-xl mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Event Details
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-hp-bg-alt/50 border border-hp-gold-500/10 rounded-lg flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-hp-gold-500 mt-1" />
                          <div>
                            <p className="text-hp-gold-700 text-[10px] uppercase tracking-wider mb-1">Location</p>
                            <p className="text-hp-text-light text-sm font-semibold">{selectedEvent.details.location}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-hp-bg-alt/50 border border-hp-gold-500/10 rounded-lg flex items-start gap-4">
                          <GraduationCap className="w-5 h-5 text-hp-gold-500 mt-1" />
                          <div>
                            <p className="text-hp-gold-700 text-[10px] uppercase tracking-wider mb-1">Eligibility</p>
                            <p className="text-hp-text-light text-sm font-semibold">{selectedEvent.details.eligibility}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-hp-bg-alt/50 border border-hp-gold-500/10 rounded-lg flex items-start gap-4">
                          <Users className="w-5 h-5 text-hp-gold-500 mt-1" />
                          <div>
                            <p className="text-hp-gold-700 text-[10px] uppercase tracking-wider mb-1">Team Size</p>
                            <p className="text-hp-text-light text-sm font-semibold">{selectedEvent.details.teamSize} Witches/Wizards</p>
                          </div>
                        </div>
                        <div className="p-4 bg-hp-bg-alt/50 border border-hp-gold-500/10 rounded-lg flex items-start gap-4">
                          <Banknote className="w-5 h-5 text-hp-gold-500 mt-1" />
                          <div>
                            <p className="text-hp-gold-700 text-[10px] uppercase tracking-wider mb-1">Entry Fee</p>
                            <p className="text-hp-text-light text-xl font-bold font-serif">{selectedEvent.details.fee}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => handleEnrollment(selectedEvent)}
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-hp-gold-500 text-hp-bg font-serif font-bold text-lg rounded shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-hp-gold-300 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                          <UserPlus className="w-5 h-5" />
                          Enroll Now
                        </button>
                        
                        <a 
                          href="#omniocular-rules" 
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-hp-bg-alt border border-hp-gold-700/50 text-hp-gold-300 font-serif rounded hover:bg-hp-bg hover:border-hp-gold-500 transition-all duration-300"
                        >
                          <Download className="w-5 h-5" />
                          Owl Brochure
                        </a>
                      </div>

                      {selectedEvent.id === 'epilogue' && (
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href="/Epilogue_Abstract_Template.docx" 
                            download
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-hp-bg-alt border border-hp-gold-700/30 text-hp-gold-300 font-serif text-sm rounded hover:bg-hp-bg transition-all"
                          >
                            <Download className="w-4 h-4 opacity-70" />
                            Abstract Template
                          </a>
                          <a 
                            href="https://forms.gle/FA283Cdm3X5LTmo69" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-hp-bg-alt border border-hp-gold-700/30 text-hp-gold-300 font-serif text-sm rounded hover:bg-hp-bg transition-all"
                          >
                            <Upload className="w-4 h-4 opacity-70" />
                            Submit Abstract
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
