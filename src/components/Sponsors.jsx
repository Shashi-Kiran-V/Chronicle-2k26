import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-hp-gold-500 mb-4 inline-block drop-shadow-md">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hp-gold-500 to-transparent mx-auto rounded-full mb-6 opacity-60"></div>
          <p className="text-lg text-hp-text-muted font-sans font-medium">
            Benefactors of our magical grand event.
          </p>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center py-16 border border-hp-gold-700/20 bg-hp-bg-card/50 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-hp-bg-alt border border-hp-gold-700/30 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-2xl text-hp-gold-500/50">?</span>
            </div>
            <h3 className="text-2xl font-serif text-hp-gold-300 mb-2">To Be Announced</h3>
            <p className="text-hp-text-muted font-sans">
              We are currently finalizing our alliances. The grand reveal is coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
