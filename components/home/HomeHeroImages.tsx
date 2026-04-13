import type { CSSProperties } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils/cn";

/** One composite layer under `public/home/hero/`. Omit position/size to fill the artboard (inset-0). */
export type HomeHeroLayer = {
  src: string;
  alt: string;
  zIndex: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  /** Optional Tailwind classes on the absolute wrapper (e.g. max-w, translate) */
  className?: string;
  /** Passed to the inner `Image` (default `object-contain object-center`) */
  imageClassName?: string;
};

function hasCustomBox(layer: HomeHeroLayer): boolean {
  return (
    layer.top !== undefined ||
    layer.right !== undefined ||
    layer.bottom !== undefined ||
    layer.left !== undefined ||
    layer.width !== undefined ||
    layer.height !== undefined
  );
}

/** Edit per layer: `zIndex`, `top` / `right` / `bottom` / `left`, `width` / `height` (any CSS length). */
export const HOME_HERO_LAYERS: HomeHeroLayer[] = [
  {
    src: "/home/hero/ribbon-back.png",
    alt: "",
    zIndex: 0,
    left: "-210px",
    top: "48px",
    width: "462px",
    height: "462px",  
  },
  {
    src: "/home/hero/Image.png",
    alt: "ShareLogic product illustration",
    zIndex: 1,
    width: "312px",
    height: "312px",
    top: "-10px",
    right: "-20px",
  },
  {
    src: "/home/hero/UI-1.png",
    alt: "",
    zIndex: 3,
    width: "361px",
    height: "346px",
    top: "100px",
    right: "210px",
  },
  {
    src: "/home/hero/UI-2.png",
    alt: "",
    zIndex: 4,
    width: "388px",
    height: "176px",
    top: "-100px",
    right: "150px",
  },
  {
    src: "/home/hero/ui-3.png",
    alt: "",
    zIndex: 4,
    top: "80px",
    right: "-30px",
    width: "345px",
    height: "346px",
  },
  {
    src: "/home/hero/ribbon-back.svg",
    alt: "",
    zIndex: 0,
    top: "-430px",
    right: "-450px",
    width: "945px",
    height: "945px",
  },
];

function HeroLayerImage({ layer, sizes, priority }: { layer: HomeHeroLayer; sizes: string; priority: boolean }) {
  const custom = hasCustomBox(layer);

  const boxStyle: CSSProperties = {
    zIndex: layer.zIndex,
    ...(custom && {
      ...(layer.top !== undefined && { top: layer.top }),
      ...(layer.right !== undefined && { right: layer.right }),
      ...(layer.bottom !== undefined && { bottom: layer.bottom }),
      ...(layer.left !== undefined && { left: layer.left }),
      ...(layer.width !== undefined && { width: layer.width }),
      ...(layer.height !== undefined && { height: layer.height }),
    }),
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none select-none",
        !custom && "inset-0",
        layer.className,
      )}
      style={boxStyle}
    >
      <Image
        src={layer.src}
        alt={layer.alt}
        fill
        className={cn("object-contain object-center", layer.imageClassName)}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

/**
 * Right-column hero artwork for the home page (no outer section — use inside `Hero` with `visual` prop).
 */
export function HomeHeroArtboard() {
  const sizes = "(max-width: 1024px) 100vw, 50vw";

  return (
    <FadeUp delay={0.08} className="relative mx-auto w-full min-w-0">
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
        {HOME_HERO_LAYERS.map((layer, index) => (
          <HeroLayerImage key={`${layer.src}-${index}`} layer={layer} sizes={sizes} priority={index <= 1} />
        ))}
      </div>
    </FadeUp>
  );
}
