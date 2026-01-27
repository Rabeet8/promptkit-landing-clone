import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import iconLogo from "@/assets/icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={iconLogo} alt="PromptKit" className="w-8 h-8" />
          <span className="text-xl font-bold text-foreground">PromptKit</span>
        </div>

        {/* Download Button */}
        <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-5">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </header>
  );
};

export default Header;
