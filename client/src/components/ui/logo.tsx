import cescoLogoBlue from "@assets/3_1750717387822.png";
import cescoLogoWhite from "@assets/5_1750716371637.png";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "light", size = "md" }: LogoProps) {
  const heightClasses = {
    sm: "h-18",
    md: "h-20",
    lg: "h-22"
  };

  const logoSrc = variant === "dark" ? cescoLogoWhite : cescoLogoBlue;

  return (
    <div className="flex items-center">
      <img 
        src={logoSrc}
        alt="CESCOTECH - Soluções em Gestão e Tecnologia"
        className={`${heightClasses[size]} w-auto`}
      />
    </div>
  );
}
