import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import splashImage from '@/assets/hero-jharkhand.jpg';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash for 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-forest-deep animate-fade-out"
      style={{
        animation: isVisible ? 'none' : 'fade-out 0.5s ease-out forwards'
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={splashImage} 
          alt="Jharkhand" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/90 via-forest-deep/70 to-forest-deep/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-scale-in">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border-4 border-gold/30 shadow-2xl">
            <MapPin className="w-16 h-16 text-gold" strokeWidth={2.5} />
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-2xl">
          Discover
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6 drop-shadow-2xl">
          Jharkhand
        </h2>

        {/* Tagline */}
        <p className="text-lg text-white/90 font-light tracking-wide drop-shadow-lg">
          Explore the Heart of India
        </p>

        {/* Loading Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gold rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2.5s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
