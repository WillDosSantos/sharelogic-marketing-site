import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
  /** Header (blue bar): full-color SVG. Footer: dark treatment for light backgrounds. */
  variant?: "default" | "onBrand";
};

export function Logo({ className, variant = "default" }: Props) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo.svg"
        alt="ShareLogic"
        width={216}
        height={43}
        priority
        unoptimized
        className={cn(
          "h-9 w-auto max-w-32 object-contain object-left sm:h-10",
          variant === "default" && "brightness-0",
        )}
      />
    </Link>
  );
}
