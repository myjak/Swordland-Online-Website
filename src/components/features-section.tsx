import { Zap, Swords, Trophy, Users, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";

// Features data
const features = [
  {
    icon: Zap,
    pill: "Combat",
    title: "Skill System",
    description:
      "Master 100+ sword skills with dazzling effects and tactical combos.",
    accent: "from-yellow-400 to-orange-500",
  },
  {
    icon: Trophy,
    pill: "Progression",
    title: "Leveling & Floors",
    description:
      "Ascend 100 floors! Gain XP, unlock abilities, and prove your legend.",
    accent: "from-indigo-400 to-violet-700",
  },
  {
    icon: Swords,
    pill: "Bosses",
    title: "Epic Boss Fights",
    description:
      "Face iconic bosses. Strategize with your guild and claim rare loot.",
    accent: "from-pink-500 via-red-500 to-yellow-400",
  },
  {
    icon: Target,
    pill: "PvP",
    title: "Intense PvP",
    description: "Duel rivals or join massive battles. Climb the PvP rankings.",
    accent: "from-green-400 to-cyan-500",
  },
  {
    icon: Shield,
    pill: "Co-op",
    title: "Guilds & Parties",
    description: "Form guilds, party up, and conquer challenges together.",
    accent: "from-blue-400 to-purple-600",
  },
  {
    icon: Users,
    pill: "World",
    title: "Living World",
    description: "Shape an evolving world: economy, reputation, and events.",
    accent: "from-slate-700 to-slate-900",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary/10 blur-[90px]" />
        <div className="absolute right-[10%] bottom-1/4 h-[120px] w-[180px] rounded-full bg-card/80 blur-[70px] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section badge */}
        <div
          className="mx-auto mb-7 inline-block bg-primary/10 px-5 py-2 text-primary font-display text-sm font-semibold tracking-wide"
          style={{ borderRadius: 0 }}
        >
          Features
        </div>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-card md:text-4xl">
            The Swordland Difference
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-card/70 text-lg">
            Battle, explore, and make your mark—raid bosses, master skills,
            thrive with friends!
          </p>
        </div>

        {/* Compact Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {features.map(({ icon: Icon, pill, title, description, accent }) => (
            <Card
              key={title}
              className="relative flex flex-col items-center justify-center group p-5 border-primary/20 hover:border-primary transition"
              style={{
                borderRadius: 0,
                minHeight: 0,
              }}
            >
              {/* Soft background accent */}
              <div className="pointer-events-none absolute inset-0">
                <div
                  className={`absolute left-1/2 top-5 h-[46px] w-[46px] -translate-x-1/2 rounded-full blur-[25px] opacity-25 ${accent.startsWith("from-") ? `bg-gradient-to-r ${accent}` : accent}`}
                />
              </div>
              <CardContent className="flex flex-col items-center justify-center p-0 w-full">
                {/* Icon */}
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow relative z-10"
                  style={{ borderRadius: 0 }}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                {/* Pill */}
                <span
                  className="mb-1 inline-block bg-primary/10 text-[10px] font-bold text-primary px-2 py-0.5 uppercase tracking-wide"
                  style={{ borderRadius: 0 }}
                >
                  {pill}
                </span>
                {/* Title */}
                <h3 className="mb-0.5 font-display text-base font-extrabold text-primary tracking-tight drop-shadow text-center">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-xs text-muted-foreground text-center leading-normal">
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
