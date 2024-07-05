import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import Logo from "./Logo";
import { AlignJustify } from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-1xl font-semibold"
              onLinkClick={handleNavClick}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
