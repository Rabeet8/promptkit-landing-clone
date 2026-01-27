import { Button } from "@/components/ui/button";

const DownloadButtons = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Google Play Button */}
      <Button 
        className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-6 py-6 h-auto"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
        </svg>
        <span className="font-semibold">Google Play</span>
      </Button>
    </div>
  );
};

export default DownloadButtons;
