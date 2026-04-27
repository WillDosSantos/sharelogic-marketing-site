import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";

/**
 * Right-column hero artwork for the home page (no outer section — use inside `Hero` with `visual` prop).
 */
export function HomeHeroArtboard() {
  return (
    <FadeUp delay={0.08} className="relative mx-auto w-full min-w-0">
      <div className="relative w-full overflow-visible">
        <div className="pointer-events-none absolute inset-0 top-[100px] left-[-46%] z-0">
          <Image
            src="/home/hero/ribbon-front.svg"
            alt=""
            width={662}
            height={662}
            aria-hidden
            className="object-contain bottom-[-100%]"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-0 -bottom-[36%] right-[-8%] z-0 lg:right-[-70%]">
          <Image
            src="/home/hero/ribbon-back.svg"
            alt=""
            width={862}
            height={862}
            aria-hidden
            className="object-contain"
            priority
          />
        </div>
        <Image
          src="/hero-illustration.svg"
          alt="ShareLogic product illustration"
          width={786}
          height={728}
          className="relative z-10 h-auto w-full"
          priority
        />
      </div>
    </FadeUp>
  );
}
