import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import CustomContainer from "@/components/home/custom-container";
import { Link } from "react-router-dom";

const HomeNavbar: React.FC = () => {
  return (
    <CustomContainer>
      <nav className="flex justify-between items-center h-[8vh]">
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/Logo Si PJU.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h3 className="text-2xl font-semibold">SmartPJU</h3>
        </div>
        <div className="text-sm font-medium">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="/"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button
            size="default"
            variant="outline"
            className="w-20 border-[#E0E1E6] hover:bg-[#C6E2FF] hover:text-[#00296B] hover:border-inherit"
          >
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </CustomContainer>
  );
};

export default HomeNavbar;
