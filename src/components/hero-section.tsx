import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/src/components/ui/tooltip";
import { Card, CardContent } from "./ui/card";

const STATS = [
  {
    value: "50+",
    label: "NEW ITEMS",
    tooltip:
      "Craft and obtain over 50 different items between weapons and armors, with distinctive visual style inspired by SAO.",
  },
  {
    value: "10",
    label: "FLOORS",
    tooltip:
      "Progress through the 10 brand new floors of AinLand, each with unique biomes, dungeons, and challenges.",
  },
  {
    value: "50+",
    label: "BOSS FIGHTS",
    tooltip:
      "Face off against powerful Floor Bosses, each with distinct mechanics, attacks, and team strategies.",
  },
  {
    value: "∞",
    label: "ADVENTURES",
    tooltip:
      "Endless adventures await: explore, craft, build, and team up for quests and events in an ever-expanding world.",
  },
];

export function HeroSection({ stats = STATS }: { stats?: typeof STATS }) {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Soft BG effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[540px] md:w-[540px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:blur-[120px] md:blur-[130px]" />
        <div className="absolute right-1/5 bottom-1/4 h-[180px] w-[280px] sm:h-[220px] sm:w-[360px] md:h-[260px] md:w-[440px] rounded-full bg-card/80 blur-[60px] sm:blur-[70px] md:blur-[80px] opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-3 sm:px-4 md:px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className="mx-auto mb-6 sm:mb-8 inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-primary font-display text-xs sm:text-sm md:text-base font-semibold tracking-wider sm:tracking-widest border-b-2 border-primary/30 drop-shadow-sm"
          style={{ borderRadius: 0 }}
        >
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
          <span className="whitespace-nowrap">Now Available for Hytale</span>
        </div>

        {/* Title */}
        <h1 className="mb-5 sm:mb-6 md:mb-7 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-card text-balance px-2">
          Enter the World of
          <br />
          <span className="text-primary drop-shadow-sm">Swordland Online</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-2xl text-balance text-card/70 text-base sm:text-lg md:text-xl leading-relaxed px-4">
          Swordland Online brings the world of{" "}
          <span className="font-semibold text-primary-text">
            Sword Art Online
          </span>{" "}
          to <span className="font-semibold text-primary">Hytale</span>. Master
          sword skills, conquer bosses, and forge your legend in AniLand.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-12 md:mb-14 w-full sm:w-auto px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 font-bold shadow-primary/30 shadow-lg bg-primary group hover:bg-primary/90 min-h-[44px]"
            style={{ borderRadius: 0 }}
          >
            <Link href="/#community" className="flex items-center justify-center">
              Start Your Adventure
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-bold min-h-[44px]"
            style={{ borderRadius: 0 }}
          >
            <Link href="/#features">Learn More</Link>
          </Button>
        </div>

        {/* Stats as Cards */}
        <div
          className="w-full max-w-2xl grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 py-5 sm:py-6 md:py-7 px-2"
          style={{ borderRadius: 0 }}
        >
          {(stats ?? STATS).map((stat) => (
            <Tooltip key={stat.label}>
              <TooltipTrigger asChild>
                <Card
                  className="flex flex-col items-center justify-center cursor-help border-primary/30 bg-card transition-shadow hover:shadow-lg py-4 sm:py-5 px-3 sm:px-4 min-h-[80px] sm:min-h-[100px]"
                  tabIndex={0}
                  aria-label={stat.tooltip}
                  style={{ borderRadius: 0 }}
                >
                  <CardContent className="flex flex-col items-center justify-center p-0">
                    <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow">
                      {stat.value}
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-xs md:text-sm text-muted-foreground mt-1.5 sm:mt-2 font-semibold uppercase tracking-wide text-center leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={8}
                className="bg-card text-card-foreground border border-primary/60 shadow-lg p-3 rounded text-sm font-medium max-w-xs z-100"
              >
                {stat.tooltip}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div
          className="flex h-8 w-5 sm:h-10 sm:w-6 items-start justify-center border border-primary/30 p-1.5 sm:p-2"
          style={{ borderRadius: 0 }}
        >
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
