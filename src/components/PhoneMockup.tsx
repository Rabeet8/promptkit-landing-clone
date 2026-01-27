import mainScreen from "@/assets/pt_1.jpg";
import { useState, useRef, useEffect } from "react";

const screens = [
  { id: 1, content: <span className="text-2xl">📱</span>, label: "Left Screen" },
  { id: 2, content: <img src={mainScreen} alt="PromptKit App Screen" className="w-full h-full object-cover" />, label: "Main" },
  { id: 3, content: <span className="text-2xl">🎬</span>, label: "Right Screen" },
];

const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (dragStart === null) return;
    
    const threshold = 80;
    if (dragOffset > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (dragOffset < -threshold && currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setDragStart(null);
    setDragOffset(0);
  };

  const getPosition = (index: number) => {
    const basePosition = index - currentIndex;
    const dragInfluence = dragStart !== null ? dragOffset / 300 : 0;
    return basePosition - dragInfluence;
  };

  const getStyles = (index: number) => {
    const position = getPosition(index);
    const absPosition = Math.abs(position);
    
    // Padding-based scaling: less padding when focused, more when unfocused
    const padding = Math.min(absPosition * 40, 60);
    const opacity = 1 - absPosition * 0.3;
    const zIndex = 20 - Math.abs(position) * 10;
    const translateX = position * 200;
    
    return {
      transform: `translateX(${translateX}px)`,
      opacity: Math.max(opacity, 0.4),
      zIndex: Math.round(zIndex),
      padding: `${padding}px`,
      transition: dragStart !== null ? 'none' : 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center justify-center h-[500px] md:h-[600px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {screens.map((screen, index) => {
        const styles = getStyles(index);
        const isCenter = index === currentIndex && Math.abs(getPosition(index)) < 0.5;
        
        return (
          <div
            key={screen.id}
            className="absolute"
            style={styles}
          >
            <div 
              className={`relative bg-foreground rounded-[2rem] border-[4px] border-foreground shadow-2xl overflow-hidden ${isCenter ? 'animate-float-enhanced' : ''}`}
              style={{
                width: 'clamp(180px, 25vw, 280px)',
                height: 'clamp(360px, 50vw, 560px)',
              }}
            >
              {/* Android Screen */}
              <div className="absolute inset-[4px] rounded-[1.5rem] overflow-hidden bg-muted">
                {index === 1 ? (
                  screen.content
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-foreground/10 flex items-center justify-center">
                        {screen.content}
                      </div>
                      <p className="text-xs text-muted-foreground">{screen.label}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Android Camera Punch Hole */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
            </div>
          </div>
        );
      })}
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-foreground w-6' : 'bg-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneMockup;
