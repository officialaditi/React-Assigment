import { RxDividerVertical } from "react-icons/rx";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-screen fixed z-50 bg-slate-50 rounded-b-3xl py-4 flex top-0 shadow-md items-center justify-around">
      <div className="flex gap-1 items-center">
        <img src="public\header\UHD-logo1.png" className="h-6" />
        <RxDividerVertical className="size-10" />
        <img src="./header/pace-logo-png-1.png" className="h-6" />
      </div>
      <Button className="rounded-full bg-blue-950 py-3 px-5 text-white">
        Get Info
      </Button>
    </div>
  );
};

export default Header;
