import { Sword, Gamepad2, Heart } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";

const highlights = [
  {
    icon: Sword,
    pill: "Combat",
    label: "True SAO Combat",
    desc: "Master sword skills and tactical combos in challenging boss battles.",
    accent: "from-yellow-300 to-orange-400",
  },
  {
    icon: Gamepad2,
    pill: "Play Instantly",
    label: "Vanilla Friendly",
    desc: "With mods and plugins, we will come closer to the original SAO experience without losing the Hytale feeling and overall experience.",
    accent: "from-green-300 to-sky-400",
  },
  {
    icon: Heart,
    pill: "Community",
    label: "Fan Made",
    desc: "By SAO fans for SAO fans. 100% community-driven and free.",
    accent: "from-pink-400 via-fuchsia-400 to-purple-600",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute right-[10%] bottom-1/4 h-[180px] w-[320px] rounded-full bg-card/80 blur-[85px] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content Left */}
          <div>
            {/* Section badge in footer/community style */}
            <div
              className="mx-auto mb-7 inline-block bg-primary/10 px-5 py-2 text-primary font-display text-sm font-semibold tracking-wide"
              style={{ borderRadius: 0 }}
            >
              About
            </div>
            <h2 className="mb-5 font-display text-2xl font-bold tracking-tight text-card md:text-3xl">
              WHAT IS{" "}
              <span className="text-primary drop-shadow-sm">
                SWORDLAND ONLINE?
              </span>
            </h2>
            <p className="mb-6 max-w-2xl text-balance text-card/70 text-lg">
              Swordland Online is a passion project bringing the world of{" "}
              <span className="font-semibold text-primary-text">
                Sword Art Online
              </span>{" "}
              into Hytale. Explore a brand new floating castle called AinLand –
              10 Floors instead of the 100 floors from the original Aincrad,
              compressed but full of life and challenges!
            </p>
            <p className="mb-6 max-w-2xl text-balance text-card/70 text-base">
              Experience our custom skill system: master sword techniques, chain
              combos, and activate powerful abilities inspired by the anime.
              Fight solo or with your guild – conquer floors, challenge iconic
              bosses, and forge your legend!
            </p>

            {/* Highlights using Card - less padding & height */}
            <div className="mt-8 grid gap-5 md:grid-cols-3 max-w-3xl">
              {highlights.map(({ icon: Icon, pill, label, desc, accent }) => (
                <Card
                  key={label}
                  className="relative flex flex-col items-center justify-center group px-5 py-6 border-primary/20 hover:border-primary transition min-h-[200px] shadow-lg bg-white/95"
                  style={{
                    borderRadius: 0,
                  }}
                >
                  {/* Soft background accent */}
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className={`absolute left-1/2 top-6 h-[64px] w-[64px] -translate-x-1/2 rounded-full blur-[32px] opacity-25 bg-linear-to-r ${accent}`}
                    />
                  </div>
                  <CardContent className="flex flex-col items-center justify-center p-0 w-full relative z-10">
                    {/* Icon */}
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center border-2 border-primary/30 bg-primary/10 shadow relative z-10"
                      style={{ borderRadius: 0 }}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {/* Pill */}
                    <span
                      className="mb-1 inline-block bg-primary/10 text-[11px] font-bold text-primary px-2 py-[2px] uppercase tracking-wide"
                      style={{ borderRadius: 0 }}
                    >
                      {pill}
                    </span>
                    {/* Label */}
                    <h3 className="mb-1 font-display text-[1.08rem] font-extrabold text-primary tracking-tight drop-shadow text-center">
                      {label}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-muted-foreground text-center font-normal max-w-[16rem]">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Player Status Card */}
          <div className="relative flex justify-center">
            <div
              className="relative overflow-visible border border-primary/30 bg-card shadow-2xl"
              style={{
                borderRadius: 0,
                minWidth: 470, // increased min width
                maxWidth: 570, // increased max width
                width: "100%",
              }}
            >
              <div className="relative z-10 px-10 py-8">
                {" "}
                {/* increased padding */}
                {/* Header */}
                <div className="flex items-center pb-2 mb-6 border-b border-primary/20 justify-between">
                  <div className="flex items-center gap-3">
                    <Sword className="h-6 w-6 text-primary drop-shadow" />
                    <span className="font-display text-[15px] font-bold text-primary tracking-widest drop-shadow-sm">
                      PLAYER STATUS
                    </span>
                  </div>
                  <span className="text-[15px] text-primary/90 font-bold tracking-wide font-display">
                    Floor 74
                  </span>
                </div>
                {/* HP/Level and Stats Row */}
                <div className="flex flex-col md:flex-row md:gap-8 items-start">
                  {/* HP/LEVEL bars */}
                  <div className="flex-1 w-full space-y-5 md:space-y-7">
                    {/* HP */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground tracking-wide">
                          HP
                        </span>
                        <span className="text-sm text-primary font-mono font-bold tracking-wider">
                          18,500 / 18,500
                        </span>
                      </div>
                      <div
                        className="relative w-full h-3 mt-1 bg-secondary border border-primary/15 overflow-hidden"
                        style={{ borderRadius: 2.5 }}
                      >
                        <div
                          className="absolute left-0 top-0 bottom-0 bg-green-400"
                          style={{
                            width: "100%",
                            borderTopLeftRadius: 2.5,
                            borderBottomLeftRadius: 2.5,
                          }}
                        />
                        <div
                          className="absolute left-0 top-0 bottom-0 bg-white/20"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    {/* LEVEL */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground tracking-wide">
                          LEVEL
                        </span>
                        <span className="text-sm text-primary font-mono font-bold tracking-wider">
                          96
                        </span>
                      </div>
                      <div
                        className="w-full h-2 bg-primary/10 border border-primary/10 mt-1 relative"
                        style={{ borderRadius: 1.5 }}
                      >
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: "75%",
                            borderTopLeftRadius: 1.5,
                            borderBottomLeftRadius: 1.5,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* Stats row: larger, soft card, simple border */}
                  <div className="flex-1 mt-7 md:mt-0 grid grid-cols-2 gap-x-8">
                    {/* STR Stat */}
                    <div
                      className="relative bg-[#f2f6fa] border border-primary/20 flex flex-col items-center justify-center min-w-[85px] h-[62px] px-3"
                      style={{
                        borderRadius: 6,
                      }}
                    >
                      <span className="text-[13px] text-primary/80 font-bold font-display tracking-widest mb-1">
                        STR
                      </span>
                      <span className="font-display text-2xl font-extrabold text-card-foreground tracking-wider leading-tight">
                        89
                      </span>
                    </div>
                    {/* AGI Stat */}
                    <div
                      className="relative bg-[#f2f6fa] border border-primary/20 flex flex-col items-center justify-center min-w-[85px] h-[62px] px-3"
                      style={{
                        borderRadius: 6,
                      }}
                    >
                      <span className="text-[13px] text-primary/80 font-bold font-display tracking-widest mb-1">
                        AGI
                      </span>
                      <span className="font-display text-2xl font-extrabold text-card-foreground tracking-wider leading-tight">
                        102
                      </span>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="mt-7 border-t border-primary/10 pt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-semibold tracking-wide">
                    Guild:{" "}
                    <span className="text-primary font-display font-bold">
                      Knights of Blood
                    </span>
                  </span>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-[15px] w-[15px] animate-pulse bg-primary border border-white"
                      style={{
                        borderRadius: 3,
                      }}
                    />
                    <span className="text-sm text-primary font-bold tracking-wider drop-shadow font-display">
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End play card */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
