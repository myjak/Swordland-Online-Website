import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-28 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Soft BG effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute right-1/5 bottom-1/4 h-[260px] w-[440px] rounded-full bg-card/80 blur-[80px] opacity-30" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "62px 62px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center flex flex-col items-center">
        {/* Badge */}
        <div
          className="mx-auto mb-7 inline-flex items-center gap-2 bg-primary/10 px-5 py-2 border border-primary/15 text-primary font-display text-sm font-semibold tracking-wide"
          style={{ borderRadius: 0 }}
        >
          <Sparkles className="h-5 w-5 text-primary" />
          Now Available for Hytale
        </div>

        {/* Title */}
        <h1 className="mb-7 font-display text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-card text-balance">
          Enter the World of
          <br />
          <span className="text-primary drop-shadow-sm">Swordland Online</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-12 max-w-2xl text-balance text-card/70 text-lg md:text-xl leading-relaxed">
          Swordland Online brings the world of{" "}
          <span className="font-semibold text-yellow-400">
            Sword Art Online
          </span>{" "}
          to <span className="font-semibold text-primary">Hytale</span>. Master
          sword skills, conquer bosses, and forge your legend in Aincrad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-14">
          <Button
            asChild
            size="lg"
            className="px-8 py-2 font-bold shadow-primary/30 shadow-lg bg-primary group hover:bg-primary/90"
            style={{ borderRadius: 0 }}
          >
            <Link href="#community">
              Start Your Adventure
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-8 py-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-bold"
            style={{ borderRadius: 0 }}
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="w-full max-w-2xl border border-primary/15 bg-card grid grid-cols-2 md:grid-cols-4 gap-6 py-7 px-2 shadow-lg"
          style={{ borderRadius: 0 }}
        >
          {[
            { value: "100+", label: "Unique Skills" },
            { value: "100", label: "Floors" },
            { value: "50+", label: "Boss Fights" },
            { value: "∞", label: "Adventures" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary drop-shadow">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-2 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div
          className="flex h-10 w-6 items-start justify-center border border-primary/30 p-2"
          style={{ borderRadius: 0 }}
        >
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
