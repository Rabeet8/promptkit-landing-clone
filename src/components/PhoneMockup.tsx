import mainScreen from "@/assets/pt_1.jpg";

const PhoneMockup = () => {
  return (
    <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
      {/* Left Phone - Android */}
      <div className="absolute left-1/2 -translate-x-[180%] md:-translate-x-[160%] top-1/2 -translate-y-1/2 z-10 opacity-60 scale-75 md:scale-90">
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] bg-foreground rounded-[1.5rem] border-[3px] border-foreground shadow-xl overflow-hidden">
          {/* Android Screen */}
          <div className="absolute inset-[3px] rounded-[1.25rem] bg-muted flex items-center justify-center overflow-hidden">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-foreground/10 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <p className="text-xs text-muted-foreground">Left Screen</p>
            </div>
          </div>
          {/* Android Camera Punch Hole */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />
        </div>
      </div>

      {/* Center Phone (Main) - Android with enhanced animation */}
      <div className="relative z-20 animate-float-enhanced">
        <div className="relative w-[220px] md:w-[280px] h-[440px] md:h-[560px] bg-foreground rounded-[2rem] border-[4px] border-foreground shadow-2xl overflow-hidden">
          {/* Android Screen */}
          <div className="absolute inset-[4px] rounded-[1.5rem] overflow-hidden">
            <img 
              src={mainScreen} 
              alt="PromptKit App Screen" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Android Camera Punch Hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full" />
        </div>
      </div>

      {/* Right Phone - Android */}
      <div className="absolute left-1/2 translate-x-[80%] md:translate-x-[60%] top-1/2 -translate-y-1/2 z-10 opacity-60 scale-75 md:scale-90">
        <div className="relative w-[180px] md:w-[220px] h-[360px] md:h-[440px] bg-foreground rounded-[1.5rem] border-[3px] border-foreground shadow-xl overflow-hidden">
          {/* Android Screen */}
          <div className="absolute inset-[3px] rounded-[1.25rem] bg-muted flex items-center justify-center overflow-hidden">
            <div className="text-center p-4">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-foreground/10 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <p className="text-xs text-muted-foreground">Right Screen</p>
            </div>
          </div>
          {/* Android Camera Punch Hole */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
