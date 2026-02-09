import { Zap, Swords, Trophy, Users, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";

// Features data
const features = [
  {
    icon: Zap,
    pill: "Combat",
    title: "SKILL SYSTEM",
    description:
      "Master a ton of sword arts with dazzling effects and tactical combos.",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    icon: Trophy,
    pill: "Progression",
    title: "LEVELING & FLOORS",
    description:
      "Ascend 10 floors! Gain XP, unlock abilities, and prove your legend.",
    accent: "from-indigo-400 to-violet-700",
  },
  {
    icon: Swords,
    pill: "Bosses",
    title: "EPIC BOSS FIGHTS",
    description:
      "Face iconic bosses and brand new! Strategize with your guild and claim rare loot.",
    accent: "from-pink-500 via-red-500 to-yellow-400",
  },
  {
    icon: Target,
    pill: "PvP",
    title: "INTENSE PVP",
    description: "Duel rivals or join massive battles. Climb the PvP rankings.",
    accent: "from-green-400 to-cyan-500",
  },
  {
    icon: Shield,
    pill: "Co-op",
    title: "GUILDS & PARTIES",
    description: "Form guilds, party up, and conquer challenges together.",
    accent: "from-blue-400 to-purple-600",
  },
  {
    icon: Users,
    pill: "World",
    title: "WORLD IN MOVEMENT",
    description: "Shape an evolving world: economy, reputation, and events.",
    accent: "from-slate-700 to-slate-900",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[280px] w-[280px] sm:h-[310px] sm:w-[310px] md:h-[340px] md:w-[340px] -translate-x-1/2 rounded-full bg-primary/10 blur-[80px] sm:blur-[85px] md:blur-[90px]" />
        <div className="absolute right-[10%] bottom-1/4 h-[100px] w-[140px] sm:h-[110px] sm:w-[160px] md:h-[120px] md:w-[180px] rounded-full bg-card/80 blur-[60px] sm:blur-[65px] md:blur-[70px] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        {/* Section badge */}
        <div
          className="mx-auto mb-6 sm:mb-7 md:mb-8 inline-block bg-primary/10 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-primary font-display text-sm sm:text-base font-semibold tracking-wider sm:tracking-widest border-b-2 border-primary/30 drop-shadow-sm"
          style={{ borderRadius: 0 }}
        >
          Features
        </div>
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-card px-2">
            The Swordland Difference
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-card/70 text-base sm:text-lg px-4">
            Battle, explore, and make your mark—raid bosses, master skills,
            thrive with friends!
          </p>
        </div>

        {/* Compact Features Grid */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {features.map(({ icon: Icon, pill, title, description, accent }) => (
            <Card
              key={title}
              className="relative flex flex-col items-center justify-center group p-4 sm:p-5 border-primary/20 hover:border-primary transition"
              style={{
                borderRadius: 0,
                minHeight: 0,
              }}
            >
              {/* Soft background accent */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className={`absolute left-1/2 top-4 sm:top-5 h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] -translate-x-1/2 rounded-full blur-[20px] sm:blur-[25px] opacity-25 ${accent.startsWith("from-") ? `bg-linear-to-r ${accent}` : accent}`}
                />
              </div>
              <CardContent className="flex flex-col items-center justify-center p-0 w-full">
                {/* Icon */}
                <div
                  className="mb-2 sm:mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow relative z-10"
                  style={{ borderRadius: 0 }}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                {/* Pill */}
                <span
                  className="mb-1 inline-block bg-primary/10 text-[9px] sm:text-[10px] font-bold text-primary px-2 py-0.5 uppercase tracking-wide"
                  style={{ borderRadius: 0 }}
                >
                  {pill}
                </span>
                {/* Title */}
                <h3 className="mb-0.5 font-display text-sm sm:text-base font-extrabold text-primary tracking-tight drop-shadow text-center">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-[11px] sm:text-xs text-muted-foreground text-center leading-normal px-1">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
