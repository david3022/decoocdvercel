import { useParallax } from "@/hooks/use-scroll-fx";
import { cn } from "@/lib/utils";

export function ParallaxImage({
  src,
  alt,
  className,
  strength = 50,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  priority?: boolean;
}) {
  const { ref, offset } = useParallax<HTMLDivElement>(strength);
  return (
    <div ref={ref} className={cn("media-zoom relative", className)}>
      <div
        className="absolute -inset-y-[12%] inset-x-0 will-change-transform"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
