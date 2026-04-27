/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Dumbbell,
  Coffee,
  Calendar,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Instagram,
  Mail,
  Plus,
  Minus,
  Phone,
  Facebook,
  Sparkles,
  Users
} from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-8 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex justify-between items-center">
        
        {/* Left Nav */}
        <nav className="hidden md:flex flex-1 items-center gap-12">
          <Link to="/passion" className="nav-link relative group text-[10px] tracking-[0.2em] opacity-80 hover:opacity-100">
            Let's Move
            <span className="absolute -bottom-1.5 left-0 w-0 h-[3px] bg-soft-pink transition-all rounded-full duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/flow" className="nav-link relative group text-[10px] tracking-[0.2em] opacity-80 hover:opacity-100">
            How We Work
            <span className="absolute -bottom-1.5 left-0 w-0 h-[3px] bg-soft-pink transition-all rounded-full duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 flex justify-start md:justify-center items-center cursor-pointer relative z-10">
          <Link to="/">
            <img 
              src="https://drive.google.com/thumbnail?id=1YNThXTrqOV5_J9hoUS2RIDOvCQf4wmh7&sz=w400" 
              alt="Pilates by Yani Logo" 
              className="h-14 md:h-16 w-auto transition-transform duration-700 hover:scale-[1.03]" 
              referrerPolicy="no-referrer" 
            />
          </Link>
        </div>

        {/* Right Nav */}
        <nav className="hidden md:flex flex-1 justify-end items-center gap-10">
          <a href="/#schedule" className="nav-link relative group text-[10px] tracking-[0.2em] opacity-80 hover:opacity-100">
            Events
            <span className="absolute -bottom-1.5 left-0 w-0 h-[3px] bg-soft-pink transition-all rounded-full duration-300 group-hover:w-full"></span>
          </a>
          <a href="/#contact" className="nav-link relative group text-[10px] tracking-[0.2em] opacity-80 hover:opacity-100 mr-2">
            Contact
            <span className="absolute -bottom-1.5 left-0 w-0 h-[3px] bg-soft-pink transition-all rounded-full duration-300 group-hover:w-full"></span>
          </a>
          <motion.a 
            href="tel:5757492559" 
            className="bg-brand text-white rounded-full px-7 py-3 text-[11px] font-medium uppercase tracking-[0.15em] border-none cursor-pointer flex items-center gap-2 shadow-[0_4px_14px_0_rgba(163,45,68,0.25)]"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(163,45,68,0.4)" }} 
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={14} /> Get More Info
          </motion.a>
        </nav>

        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-champagne border-t border-soft-pink p-8 flex flex-col gap-8 shadow-2xl md:hidden"
          >
            <Link to="/passion" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-center text-[11px] tracking-[0.2em]">Let's Move</Link>
            <Link to="/flow" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-center text-[11px] tracking-[0.2em]">How We Work</Link>
            <a href="/#schedule" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-center text-[11px] tracking-[0.2em]">Events</a>
            <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="nav-link text-center text-[11px] tracking-[0.2em]">Contact</a>
            <a href="tel:5757492559" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand text-white rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-center w-full shadow-md flex items-center justify-center gap-2">
              <Phone size={14} /> Get More Info
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 md:pt-24 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] mb-4 text-charcoal/60">
            The Ultimate Wellness Escape
          </span>
          <h2 className="serif text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-8 text-soft-pink">
            Move with intention.<br />It's Your Reset.
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10 opacity-80 max-w-lg">
            Experience Amarillo's premier pop-up Pilates event. A sanctuary to strengthen your core, calm your mind, and linger afterwards over matcha with a community that inspires you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/#schedule" className="btn-pink px-8 py-3.5 text-center">Claim Your Mat</motion.a>
            <Link to="/flow" className="border border-soft-pink text-charcoal/60 hover:bg-soft-pink hover:text-brand transition-colors rounded-full px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-center bg-transparent relative flex items-center justify-center">
              Discover the flow
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 relative max-w-[500px] mx-auto z-10 cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Decorative shapes */}
          <motion.div 
            className="absolute inset-0 bg-soft-pink rounded-[40px] md:rounded-[60px]"
            animate={{ rotate: [3, 5, 3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          
          <div className="relative bg-white/40 backdrop-blur-xl rounded-[40px] md:rounded-[60px] border border-soft-pink/60 shadow-[0_8px_32px_rgba(163,45,68,0.05)] flex items-center justify-center p-3 md:p-5 z-10 overflow-hidden">
            <motion.img 
              src="https://drive.google.com/thumbnail?id=103Eyr6slXXFwTZv1AbVY0h9Jl2Dhrr3D&sz=w1200" 
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded-[28px] md:rounded-[44px]" 
              alt="Pilates guided mat class outdoors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          
          {/* Floating stat card */}
          <motion.div 
            className="absolute -bottom-6 -left-4 md:-left-8 bg-white/60 backdrop-blur-xl p-5 rounded-3xl border border-soft-pink/60 shadow-[0_4px_20px_rgba(163,45,68,0.05)] z-20"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center">
              <span className="serif text-4xl font-bold text-brand">50</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Minutes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <section className="py-24 px-8 md:px-16" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img 
            src="https://drive.google.com/thumbnail?id=19J2ClJ3XX4qcoIt7RwW9GJucdB9y17N0&sz=w800" 
            alt="Pilates Session" 
            className="rounded-[40px] w-full aspect-[4/3] md:aspect-video object-cover object-center shadow-2xl transition-transform hover:scale-[1.02] duration-700" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <motion.div 
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="serif text-4xl mb-6 text-soft-pink">The Invitation</h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8">
            Pilates by Yani brings curated Pilates experiences to unique venues across Amarillo. We blend high-quality movement with luxurious socializing for a complete wellness reset.
          </p>
          <div className="h-0.5 w-16 bg-brand"></div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: <Dumbbell className="text-brand" strokeWidth={1.5} />,
      title: "Full-Body Sculpting",
      desc: "50-minute full-body strength and core focus.",
      bgColor: "bg-[#FAD2E1]"
    },
    {
      icon: <Heart className="text-brand" strokeWidth={1.5} />,
      title: "Beginner Friendly",
      desc: "All levels welcome, with gentle modifications.",
      bgColor: "bg-[#E9EDC9]"
    },
    {
      icon: <Coffee className="text-brand" strokeWidth={1.5} />,
      title: "Elevated Community",
      desc: "Relax, mingle, and enjoy amenities after class.",
      bgColor: "bg-soft-pink/50"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-[32px] border border-soft-pink/40 p-10 flex flex-col justify-center items-center text-center shadow-[0_4px_20px_rgba(163,45,68,0.03)] hover:shadow-[0_8px_30px_rgba(163,45,68,0.08)] transition-all cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                className={`w-14 h-14 ${benefit.bgColor} rounded-full mb-6 flex items-center justify-center`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="serif text-xl mb-3 text-charcoal">{benefit.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-60 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 sm:mt-24 w-full aspect-[16/9] md:aspect-[3/1] rounded-[32px] md:rounded-[56px] overflow-hidden shadow-[0_8px_30px_rgba(163,45,68,0.06)] relative group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-soft-pink/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
          <motion.img 
            src="https://drive.google.com/thumbnail?id=1KoutLoZbMVJt2iBjhCA6OaplKNR3TrIy&sz=w2800"
            referrerPolicy="no-referrer"
            alt="Pilates Studio"
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 px-8 md:px-16" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          
          <motion.div 
            className="w-full md:w-5/12 relative aspect-[3/4] cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
             <motion.div 
                className="absolute inset-0 bg-soft-pink rounded-[40px] md:rounded-[80px] rounded-bl-[120px] md:rounded-tr-[120px] origin-center"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             />
             <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://drive.google.com/thumbnail?id=1DhbluZwv4pWEBjV51H0j8P8HDj1Vnnoh&sz=w1200"
                referrerPolicy="no-referrer"
                alt="Yani - Instructor" 
                className="absolute inset-0 w-full h-full object-cover rounded-[40px] md:rounded-[80px] rounded-bl-[120px] md:rounded-tr-[120px]"
             />
          </motion.div>

          <motion.div 
            className="w-full md:w-7/12 mt-12 md:mt-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif text-4xl md:text-5xl mb-6 text-soft-pink">A Passion for Movement.</h2>
            <p className="text-base leading-relaxed opacity-80 mb-6">
              My mission is to provide an accessible, high-quality, 50-minute escape that leaves you feeling stronger, centered, and more connected to the Amarillo community. 
            </p>
            <p className="text-base leading-relaxed opacity-80 mb-12">
              Pilates By Yani was born out of a desire to create a space that combines fitness with luxury and socialization. It's more than just a workout; it's a reset for your entire week.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="serif text-xl mb-2 text-soft-pink">Small Group Setting</h4>
                <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">Personalized attention in an intimate environment.</p>
              </div>
              <div>
                <h4 className="serif text-xl mb-2 text-soft-pink">Mind & Body Focus</h4>
                <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">Incorporating breathwork and mindfulness.</p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="serif text-xl mb-2 text-soft-pink">All-Inclusive Equipment</h4>
                <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">We provide luxury mats and equipment; you just show up.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", time: "0-5 Mins", title: "Welcome & Warm-up", desc: "Check-in. Settle onto your pre-arranged mat. Begin with centered breathwork to connect." },
    { num: "02", time: "5-40 Mins", title: "The Guided Workout", desc: "Full-body sculpt (core, arms, and glutes focus). Clear, detailed guidance." },
    { num: "03", time: "40-50 Mins", title: "Cool-Down Stretch", desc: "Finish with deep stretches and relaxation before we move into socializing." },
    { num: "04", time: "50+ Mins", title: "The Wellness Social", desc: "Enjoy complimentary amenities. Time to mingle, recover, and connect." },
  ];

  return (
    <section className="py-24 px-8 md:px-16" id="process">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif text-4xl md:text-5xl mb-6 text-soft-pink">How We Flow.</h2>
            <p className="text-sm leading-relaxed opacity-80 mb-10">
              A carefully structured hour designed to maximize your physical effort while prioritizing mental clarity and social connection. 
            </p>
            <div className="p-8 bg-soft-pink rounded-[32px] text-champagne">
              <h3 className="serif text-xl mb-4">What to Bring</h3>
              <p className="text-xs uppercase tracking-widest opacity-80 mb-6">We provide everything from professional-grade mats to light weights and rings.</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60 mb-2">Guests are welcome to bring:</p>
              <ul className="text-xs uppercase tracking-widest opacity-80 space-y-2">
                <li>• Personal Mat (optional)</li>
                <li>• Grip Socks</li>
                <li>• Water Bottle</li>
              </ul>
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                className="p-8 border border-soft-pink/40 shadow-[0_4px_20px_rgba(163,45,68,0.03)] rounded-[32px] bg-white/50 backdrop-blur-md transition-colors cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(194, 120, 138, 0.4)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-end mb-8">
                  <motion.span 
                    className="serif text-5xl text-soft-pink transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.num}
                  </motion.span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-charcoal/60">{step.time}</span>
                </div>
                <h3 className="serif text-2xl mb-3 text-charcoal">{step.title}</h3>
                <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const events = [
    { date: "MAY 2ND", time: "9:30 AM", title: "Mat Pilates Pop-up", loc: "Sad Monkey Hall", status: "BOOKED" },
    { date: "MAY 14TH", time: "6:30 PM", title: "Mommy & Me", loc: "BC Studio and Nutrition", status: "AVAILABLE" },
    { date: "MAY 29TH", time: "6:30 PM", title: "Mat Pilates Pop-up", loc: "Sad Monkey Hall", status: "AVAILABLE" },
    { date: "MAY 30TH", time: "STAY TUNED", title: "A Wellness Experience", loc: "Muleshoe", status: "STAY_TUNED" },
    { date: "JUNE 20TH", time: "9:00 AM", title: "Couples Event", loc: "Bar Z Winery", status: "AVAILABLE" },
  ];

  return (
    <section className="py-24 px-8 md:px-16" id="schedule">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="serif text-4xl md:text-5xl mb-6 text-soft-pink">Upcoming Pop-ups</h2>
        <p className="text-base opacity-80 max-w-xl mx-auto">
          Reserve your spot for our next curated wellness experience in Amarillo. Spaces are intentionally limited.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white/40 backdrop-blur-lg border text-left border-soft-pink/40 rounded-[40px] overflow-hidden shadow-[0_4px_20px_rgba(163,45,68,0.03)]">
          {events.map((evt, idx) => (
            <motion.div 
              key={idx}
              className={`flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 ${idx !== events.length - 1 ? 'border-b border-soft-pink/40' : ''} bg-transparent transition-colors cursor-pointer group`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                x: 8,
                backgroundColor: 'rgba(194, 120, 138, 0.4)' 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <div className="flex sm:flex-row flex-col sm:items-center gap-6 sm:gap-12 flex-1 mb-6 md:mb-0">
                <div className="w-36 flex-shrink-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/60 mb-1">{evt.date}</span>
                  <span className="block text-xs uppercase tracking-widest opacity-60">
                    {evt.time} {evt.status === 'BOOKED' ? <span className="text-brand font-semibold">| BOOKED</span> : ''}
                  </span>
                </div>
                <div>
                  <h3 className="serif text-2xl mb-2 group-hover:text-brand transition-colors">{evt.title}</h3>
                  <div className="flex items-center gap-2 opacity-60">
                    <MapPin size={14} />
                    <span className="text-xs uppercase tracking-widest">{evt.loc}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-0 sm:px-6">
                <motion.a 
                   href="tel:5757492559"
                   whileHover={{ scale: 1.05 }} 
                   whileTap={{ scale: 0.95 }}
                   className={`bg-brand text-white rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.1em] text-center shadow-md w-full md:w-auto flex flex-row items-center justify-center gap-2 ${
                     evt.status !== 'AVAILABLE' ? 'hidden' : ''
                   }`}
                >
                  <Phone size={14} /> Get More Info
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-soft-pink/50 rounded-3xl">
          <h4 className="serif text-2xl mb-3 text-charcoal">Host an Elevated Event</h4>
          <p className="text-sm opacity-80 mb-6 max-w-xl mx-auto">Pilates by Yani is available for private bridal parties, corporate wellness events, and custom community gatherings.</p>
          <a href="tel:5757492559" className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors inline-flex items-center gap-2">
            Inquire for Private Events <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ from = 0, to }: { from?: number, to: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const startTimes = Date.now();
      const duration = 2; // seconds
      const timer = setInterval(() => {
        const timePassed = Date.now() - startTimes;
        const progress = Math.min(timePassed / (duration * 1000), 1);
        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setCount(Math.floor(ease * (to - from) + from));
        if (progress === 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
}

function Stats() {
  return (
    <section className="py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-nude-sand">
        <div className="flex flex-col items-center py-4 md:py-0">
           <span className="serif text-5xl md:text-6xl text-brand mb-2"><AnimatedCounter to={50} /></span>
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Minute Sessions</span>
        </div>
        <div className="flex flex-col items-center py-8 md:py-0">
           <span className="serif text-5xl md:text-6xl text-brand mb-2"><AnimatedCounter to={100} /><span className="text-4xl">%</span></span>
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Beginner Friendly</span>
        </div>
        <div className="flex flex-col items-center py-4 md:py-0">
           <span className="serif text-5xl md:text-6xl text-brand mb-2"><AnimatedCounter from={100} to={0} /></span>
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Equipment Needed</span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "I've never done Pilates before. Is this for me?", a: "Absolutely. Our guided formats are designed to be accessible for beginners, providing specific modifications so you can move at your own pace." },
    { q: "Do I need to bring my own equipment?", a: "No! We provide professional-grade mats, weights, and rings. However, you are always welcome to bring your personal mat if you prefer." },
    { q: "What should I wear?", a: "Comfortable activewear that allows you to move freely. We strongly recommend bringing grip socks for the mat exercises." },
    { q: "Are the classes heated?", a: "No, our pop-up classes take place in aesthetic, climate-controlled environments for maximum comfort during the sculpt and social portions." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-8 md:px-16" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/60 mb-4">Learn More</span>
          <h2 className="serif text-4xl md:text-5xl mb-6 text-soft-pink">Frequently Asked.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-soft-pink/40 shadow-[0_4px_20px_rgba(163,45,68,0.03)] rounded-[24px] bg-white/50 backdrop-blur-md overflow-hidden transition-all duration-300">
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="serif text-xl text-charcoal">{faq.q}</span>
                <span className="text-brand flex-shrink-0 ml-4">
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-sm opacity-80 leading-relaxed border-t border-soft-pink pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-24 px-8 md:px-16" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-5/12 flex justify-center flex-col">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-charcoal/60 mb-4">Contact Us</span>
          <h2 className="serif text-4xl md:text-5xl mb-8 text-soft-pink">Let's Connect.</h2>
          <p className="text-base leading-relaxed opacity-80 mb-12">
            Please use the form to inquire about private events, partnerships, or general questions. We typically respond within 24 hours.
          </p>
          
          <div className="space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                   <Mail size={18} />
                </div>
                <span className="text-[11px] md:text-sm uppercase tracking-widest">thepilatesbyyani@gmail.com</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                   <Phone size={18} />
                </div>
                <span className="text-[11px] md:text-sm uppercase tracking-widest">(575) 749-2559</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                   <Facebook size={18} />
                </div>
                <a href="https://www.facebook.com/profile.php?id=61567449133450" target="_blank" rel="noopener noreferrer" className="text-[11px] md:text-sm uppercase tracking-widest hover:text-brand transition-colors">Facebook Page</a>
             </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <form className="bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(163,45,68,0.04)] p-10 md:p-12 rounded-[40px] border border-soft-pink/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-soft-pink rounded-full blur-[80px] opacity-60"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 px-2">First Name</label>
                <input type="text" className="bg-transparent border-b border-soft-pink/30 py-3 px-2 outline-none focus:border-soft-pink transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 px-2">Last Name</label>
                <input type="text" className="bg-transparent border-b border-soft-pink/30 py-3 px-2 outline-none focus:border-soft-pink transition-colors" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 px-2">Email Address</label>
                <input type="email" className="bg-transparent border-b border-soft-pink/30 py-3 px-2 outline-none focus:border-soft-pink transition-colors" />
              </div>
               <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 px-2">Subject</label>
                <select className="bg-transparent border-b border-soft-pink/30 py-3 px-2 outline-none focus:border-soft-pink transition-colors cursor-pointer appearance-none">
                  <option>General Inquiry</option>
                  <option>Private Event</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 px-2">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-soft-pink/30 py-3 px-2 outline-none focus:border-soft-pink transition-colors resize-none"></textarea>
              </div>
            </div>
            <button type="button" className="btn-pink w-full py-4 relative z-10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white/30 backdrop-blur-sm border-t border-soft-pink/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-soft-pink/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand mb-4 block">The Community</span>
        <h2 className="serif text-4xl md:text-5xl mb-12 text-soft-pink">Follow the Journey.</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[500px] group"
          >
            <div className="bg-white rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(163,45,68,0.1)] border border-soft-pink/40 p-1.5 transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="bg-champagne/30 rounded-[42px] overflow-hidden">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61567449133450&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="100%" 
                  height="500" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Feed"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <div className="text-left max-w-sm">
            <h4 className="serif text-2xl text-charcoal mb-4">Stay Synchronized</h4>
            <p className="text-sm opacity-70 leading-relaxed mb-8">
              Our Facebook community is where we post last-minute event updates, venue announcements, and behind-the-scenes glimpses of our sessions.
            </p>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=61567449133450" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand border-b border-brand pb-2 w-fit"
            >
              Visit Our Facebook <ArrowRight size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-24 pb-8 px-8 md:px-16 bg-champagne border-t border-soft-pink overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-10 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img 
              src="https://drive.google.com/thumbnail?id=1YNThXTrqOV5_J9hoUS2RIDOvCQf4wmh7&sz=w400" 
              alt="Pilates by Yani Logo" 
              className="h-12 md:h-14 w-auto mb-4 hover:scale-105 transition-transform" 
              referrerPolicy="no-referrer" 
            />
          </Link>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-charcoal">
          <Link to="/passion" className="nav-link">Let's Move</Link>
          <Link to="/flow" className="nav-link">How We Work</Link>
          <a href="/#schedule" className="nav-link">Schedule</a>
          <a href="/#contact" className="nav-link">Contact</a>
        </div>
        

      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-soft-pink gap-4">
        <div className="text-[10px] uppercase tracking-widest opacity-40">
          © {new Date().getFullYear()} Pilates by Yani. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-charcoal">
          <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Invitation />
      <Benefits />
      <Stats />
      <About />
      <Process />
      <Schedule />
      <FAQ />
      <SocialSection />
      <Contact />
    </>
  );
}

function ExpandedPassion() {
  const pillars = [
    {
      title: "Mindful Precision",
      desc: "Every pulse, every breath, and every stretch is performed with intention. We move beyond mindless repetition to find the 'why' behind each movement, ensuring your body receives the maximum benefit with the least amount of strain.",
      icon: <Dumbbell size={32} strokeWidth={1} />
    },
    {
      title: "The Aesthetic Reset",
      desc: "We believe your environment dictates your mental state. By transforming Amarillo's most beautiful spaces into temporary sanctuaries, we provide a visual and sensory reset that complements your physical exertion.",
      icon: <Sparkles size={32} strokeWidth={1} />
    },
    {
      title: "Proactive Community",
      desc: "Wellness shouldn't be a solitary pursuit. We foster a space where the conversation continues after the class ends—where friendships are forged over wellness rituals and local shared interests.",
      icon: <Users size={32} strokeWidth={1} />
    }
  ];

  return (
    <div className="pt-40 md:pt-32 pb-24 bg-champagne min-h-screen">
      {/* Hero Section */}
      <section className="px-8 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand mb-4 block">The Vision</span>
              <h1 className="serif text-5xl md:text-7xl text-soft-pink mb-8 leading-tight">Let's Move <br/>with Intent.</h1>
              <p className="text-lg opacity-80 leading-relaxed mb-6">
                When I founded Pilates by Yani, I didn't want to just create another fitness class. I wanted to create a <span className="text-brand font-mediumitalic italic">movement culture</span> in Amarillo—one that values the person as much as the posture.
              </p>
              <p className="text-base opacity-70 leading-relaxed mb-10">
                Movement is the language of the body. In our sessions, we learn to speak it fluently, translating effort into elegance and strength into serenity.
              </p>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-soft-pink">
                  <img src="https://drive.google.com/thumbnail?id=1DhbluZwv4pWEBjV51H0j8P8HDj1Vnnoh&sz=w200" alt="Yani" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="serif text-xl text-charcoal">Yani</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Founder & Lead Instructor</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://drive.google.com/thumbnail?id=16tK8aUPWB-WsNc4QdkCdSEYY4PZjMBnw&sz=w1200" 
                  alt="Pilates Studio Session" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-soft-pink/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              {/* Floating accent */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-soft-pink/20 hidden md:block"
              >
                <Heart className="text-brand mb-2" size={24} />
                <p className="serif text-lg leading-tight text-charcoal">Strength in <br/>Stillness.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Pillars Section */}
      <section className="bg-white/50 backdrop-blur-sm py-24 px-8 md:px-16 border-y border-soft-pink/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl text-charcoal mb-4">Our Three Pillars</h2>
            <p className="text-xs uppercase tracking-[0.3em] opacity-40">The foundation of every Yani session</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="w-16 h-16 bg-soft-pink rounded-2xl flex items-center justify-center text-brand mb-6 mx-auto md:mx-0 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="serif text-2xl mb-4 text-charcoal">{pillar.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-24 h-px bg-soft-pink mx-auto mb-12"></div>
            <h3 className="serif text-3xl md:text-4xl text-charcoal leading-tight italic">
              "We don't move to hide our bodies; we move to celebrate their capability. Every session is an act of self-gratitude."
            </h3>
            <div className="w-24 h-px bg-soft-pink mx-auto mt-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left mt-20">
            <div className="space-y-4">
              <h4 className="serif text-2xl text-soft-pink">For the Beginner</h4>
              <p className="text-xs uppercase tracking-widest opacity-60 leading-relaxed">Safe, approachable, and encouraging. We meet you exactly where you are, with no judgment—only support.</p>
            </div>
            <div className="space-y-4">
              <h4 className="serif text-2xl text-soft-pink">For the Devotee</h4>
              <p className="text-xs uppercase tracking-widest opacity-60 leading-relaxed">Deepen your practice through advanced refinements and challenging sequences that test your physical and mental grit.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="px-8 md:px-16 pb-12">
        <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl border border-soft-pink/40 rounded-[56px] p-12 md:p-20 text-center relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(194,120,138,0.3)_0%,transparent_100%)]"></div>
          </div>
          <h2 className="serif text-4xl md:text-6xl text-soft-pink mb-8 relative z-10 transition-transform group-hover:scale-105 duration-700">Experience the Shift.</h2>
          <p className="text-charcoal/70 mb-12 max-w-xl mx-auto relative z-10">
            Join our next pop-up and discover what it means to move with intention. Limited mats available per session to ensure personalized guidance.
          </p>
          <motion.a 
            href="/#schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-pink px-12 py-4 text-center inline-block relative z-10"
          >
            Find an Event
          </motion.a>
        </div>
      </section>
    </div>
  );
}

function ExpandedFlow() {
  const deepDiveSteps = [
    { 
      num: "01", 
      time: "Arrival & Integration", 
      title: "Setting the Intent", 
      desc: "Your journey starts 15 minutes before the mat. Enter an aesthetic sanctuary where every detail—from the ambient scent to the curated playlist—is designed to transition you from the noise of the day into a state of focused presence.",
      focus: ["Personal Check-in", "Mat Selection", "Guided Breathing"]
    },
    { 
      num: "02", 
      time: "The Movement Phase", 
      title: "Sculpting with Precision", 
      desc: "Our signature 35-minute sequence targets deep stabilizer muscles. We don't just move; we move with purpose. Expect a blend of traditional Pilates principles and modern athletic sculpting, designed to push your limits while respecting your body's boundaries.",
      focus: ["Core Engagement", "Elongation", "Controlled Exertion"]
    },
    { 
      num: "03", 
      time: "The Restoration", 
      title: "Cool-Down & Clarity", 
      desc: "As the physical exertion peaks, we transition into a 10-minute restorative stretch. This isn't just a cool-down; it's an opportunity for your nervous system to reset, allowing the benefits of your hard work to integrate fully.",
      focus: ["Nervous System Reset", "Deep Stretching", "Quiet Reflection"]
    },
    { 
      num: "04", 
      time: "The Community Hour", 
      title: "Connection over Matcha", 
      desc: "The 'Flow' doesn't end on the mat. We reclaim the post-workout rush. Enjoy complimentary matcha, cold-press juices, or seasonal treats while connecting with a community of like-minded individuals who value wellness and luxury.",
      focus: ["Social Integration", "Wellness Amenities", "Local Partner Pop-ups"]
    },
  ];

  return (
    <div className="pt-40 md:pt-32 pb-24 bg-champagne min-h-screen">
      {/* Hero Section of the page */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand mb-4 block">The Experience</span>
            <h1 className="serif text-5xl md:text-7xl text-soft-pink mb-6">How We Work.</h1>
            <p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
              We've redesigned the fitness experience. No fluorescent lights, no rushed exits. Just a carefully curated hour of movement followed by a lingering community social.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="serif text-3xl md:text-4xl mb-8 text-charcoal">The Philosophy of the Flow.</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                    <Heart size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="serif text-xl mb-2">Intentionality</h4>
                    <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">Every movement is selected for its ability to strengthen and align. We prioritize quality over repetition.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                    <Dumbbell size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="serif text-xl mb-2">Accessibility</h4>
                    <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">Fitness should feel like an invitation, not an interrogation. Our sessions are designed for all bodies and backgrounds.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-soft-pink flex items-center justify-center text-brand">
                    <Coffee size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="serif text-xl mb-2">Atmosphere</h4>
                    <p className="text-xs uppercase tracking-wider opacity-60 leading-relaxed">By partnering with local Amarillo gems, we create a temporary sanctuary that inspires you visually and mentally.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-[40px] overflow-hidden aspect-square md:aspect-video lg:aspect-square shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img 
                src="https://drive.google.com/thumbnail?id=1ALNar3GwxNKjV09ri5ThzDBIosK6weGE&sz=w1200" 
                alt="Mindful movement environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deep Dive Steps */}
      <section className="bg-soft-pink/10 py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {deepDiveSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-baseline mb-6">
                  <span className="serif text-7xl text-soft-pink opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">{step.time}</span>
                </div>
                <h3 className="serif text-3xl mb-4 text-charcoal">{step.title}</h3>
                <p className="text-base opacity-70 leading-relaxed mb-8">
                  {step.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.focus.map((item, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white rounded-full text-[9px] font-bold uppercase tracking-widest text-charcoal/60 border border-soft-pink/20">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/40 backdrop-blur-xl border border-soft-pink/40 rounded-[56px] p-12 md:p-20 text-center shadow-xl">
            <h2 className="serif text-4xl mb-8 text-soft-pink">Ready to Join the Movement?</h2>
            <p className="text-base opacity-70 mb-12 max-w-xl mx-auto">
              Our pop-up events provide everything you need. Simply reserve your spot, wear what makes you feel powerful, and we'll handle the rest.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-left">
              <div className="p-6 bg-champagne rounded-3xl">
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-brand">We Provide</h5>
                <ul className="text-xs opacity-60 space-y-1">
                  <li>• Luxury Mats</li>
                  <li>• Light Weights</li>
                  <li>• Equipment Rings</li>
                  <li>• Refreshments</li>
                </ul>
              </div>
              <div className="p-6 bg-champagne rounded-3xl">
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-brand">You Provide</h5>
                <ul className="text-xs opacity-60 space-y-1">
                  <li>• Comfortable Attire</li>
                  <li>• Grip Socks (Recommended)</li>
                  <li>• Positive Energy</li>
                  <li>• A Hydration Bottle</li>
                </ul>
              </div>
              <div className="p-6 bg-champagne rounded-3xl">
                <h5 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-brand">Venue Ethics</h5>
                <ul className="text-xs opacity-60 space-y-1">
                  <li>• Respect the Space</li>
                  <li>• Early Arrival (15m)</li>
                  <li>• Device-Free Flow</li>
                  <li>• Community Kindness</li>
                </ul>
              </div>
            </div>
            <motion.a 
              href="/#schedule"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-pink px-12 py-4 text-center inline-block"
            >
              See Our Pop Up Events
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-champagne text-charcoal font-sans selection:bg-soft-pink selection:text-charcoal relative">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/passion" element={<ExpandedPassion />} />
          <Route path="/flow" element={<ExpandedFlow />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
