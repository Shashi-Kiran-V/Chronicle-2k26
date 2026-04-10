import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <>
      <section className="min-h-screen py-24 bg-transparent relative overflow-hidden pt-32">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-12 w-72 h-72 bg-hp-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-12 w-72 h-72 bg-hp-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Book Cult Section */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-serif text-hp-gold-500 mb-8 drop-shadow-md"
              variants={itemVariants}
            >
              About The Book Cult
            </motion.h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent rounded-full mb-8 opacity-60"
              variants={itemVariants}
            ></motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p 
                className="text-lg text-hp-text-light font-sans leading-relaxed text-justify"
                variants={itemVariants}
              >
                The Book Cult is a vibrant community of passionate readers brought together by a shared love for literature, ideas, and meaningful conversations. We go beyond just reading by hosting engaging activities such as monthly book-of-the-month discussions, interactive literary games, themed reading events, and exclusive author interactions.
              </motion.p>

              <motion.p 
                className="text-lg text-hp-text-light font-sans leading-relaxed text-justify"
                variants={itemVariants}
              >
                Whether you enjoy fiction, non-fiction, poetry, or essays, our platform offers a space to explore new perspectives, discover unique books, and connect with like-minded individuals. Members can actively participate by suggesting books, contributing ideas, leading discussions or workshops, and sharing reviews, making every experience collaborative and enriching.
              </motion.p>

              <motion.p 
                className="text-lg text-hp-text-light font-sans leading-relaxed text-justify"
                variants={itemVariants}
              >
                At its core, The Book Cult fosters creativity, critical thinking, and a deeper appreciation for storytelling in a dynamic and inspiring environment.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="flex justify-center my-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent rounded-full opacity-40"></div>
          </motion.div>

          {/* SIT Section */}
          <motion.div 
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-serif text-hp-gold-500 mb-8 drop-shadow-md"
              variants={itemVariants}
            >
              About SIT
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent rounded-full mb-8 opacity-60"
              variants={itemVariants}
            ></motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p 
                className="text-lg text-hp-text-light font-sans leading-relaxed text-justify"
                variants={itemVariants}
              >
                Siddaganga Institute of Technology has a rich heritage of bestowing knowledge and passion to young minds. Its motto <span className="text-hp-gold-500 font-semibold italic">'Work is Worship'</span> is ingrained into the minds of every student, thus creating an inclusive and empowering community for students that encourages growth and achievement.
              </motion.p>

              <motion.p 
                className="text-lg text-hp-text-light font-sans leading-relaxed text-justify"
                variants={itemVariants}
              >
                The unwavering assistance from professors and administrators played a significant role in building the confidence and perspective of every individual.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUsPage;
