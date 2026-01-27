import { Sword, Gamepad2, Heart } from "lucide-react";

// Styled highlight cards, panel layout, and badge in hero style of footer/community/join

const highlights = [
  {
    icon: Sword,
    label: "True SAO Combat",
    desc: "Master sword skills and tactical combos in challenging boss battles.",
  },
  {
    icon: Gamepad2,
    label: "Hytale Native",
    desc: "No downloads or mods. Jump right in—all inside Hytale.",
  },
  {
    icon: Heart,
    label: "Fan Made",
    desc: "By SAO fans for SAO fans. 100% community-driven and free.",
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
            <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-card md:text-4xl">
              What is{" "}
              <span className="text-primary drop-shadow-sm">
                Swordland Online?
              </span>
            </h2>
            <p className="mb-6 max-w-2xl text-balance text-card/70 text-lg">
              Swordland Online is a passion project bringing the world of{" "}
              <span className="font-semibold text-yellow-400">
                Sword Art Online
              </span>{" "}
              into Hytale. Explore the legendary floating castle of Aincrad –
              all 100 floors, each with unique monsters and fierce bosses.
            </p>
            <p className="mb-6 max-w-2xl text-balance text-card/70 text-base">
              Experience our custom skill system: master sword techniques, chain
              combos, and activate powerful abilities inspired by the anime.
              Fight solo or with your guild – conquer floors, challenge iconic
              bosses, and forge your legend!
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-8 sm:grid-cols-3 max-w-xl">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="relative flex flex-col items-center justify-center border border-border bg-card shadow-lg px-5 py-7"
                  style={{ borderRadius: 0, minHeight: 148 }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow relative z-10"
                    style={{ borderRadius: 0 }}
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-display text-xs font-bold text-primary uppercase tracking-wide mb-2 text-center">
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground text-center leading-relaxed">
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Player Status Card */}
          <div className="relative flex justify-center">
            <div
              className="relative overflow-visible border border-primary/30 bg-card shadow-lg"
              style={{
                borderRadius: 0,
                minWidth: 410,
                maxWidth: 500,
                width: "100%",
              }}
            >
              <div className="relative z-10 px-8 py-7">
                {/* Header */}
                <div className="flex items-center pb-1 mb-5 border-b border-primary/20 justify-between">
                  <div className="flex items-center gap-3">
                    <Sword className="h-5 w-5 text-primary drop-shadow" />
                    <span className="font-display text-[13px] font-bold text-primary tracking-widest drop-shadow-sm">
                      PLAYER STATUS
                    </span>
                  </div>
                  <span className="text-[13px] text-primary/90 font-bold tracking-wide font-display">
                    Floor 74
                  </span>
                </div>
                {/* HP/Level and Stats Row */}
                <div className="flex flex-col md:flex-row md:gap-6 items-start">
                  {/* HP/LEVEL bars */}
                  <div className="flex-1 w-full space-y-4 md:space-y-6">
                    {/* HP */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground tracking-wide">
                          HP
                        </span>
                        <span className="text-xs text-primary font-mono font-bold tracking-wider">
                          18,500 / 18,500
                        </span>
                      </div>
                      <div
                        className="relative w-full h-2.5 mt-1 bg-secondary border border-primary/15 overflow-hidden"
                        style={{ borderRadius: 2 }}
                      >
                        <div
                          className="absolute left-0 top-0 bottom-0 bg-green-400"
                          style={{
                            width: "100%",
                            borderTopLeftRadius: 2,
                            borderBottomLeftRadius: 2,
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
                        <span className="text-xs text-muted-foreground tracking-wide">
                          LEVEL
                        </span>
                        <span className="text-xs text-primary font-mono font-bold tracking-wider">
                          96
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 bg-primary/10 border border-primary/10 mt-1 relative"
                        style={{ borderRadius: 1 }}
                      >
                        <div
                          className="h-full bg-primary"
                          style={{
                            width: "75%",
                            borderTopLeftRadius: 1,
                            borderBottomLeftRadius: 1,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* Stats row: smaller, lighter, less gray, soft card, simple border */}
                  <div className="flex-1 mt-6 md:mt-0 grid grid-cols-2 gap-x-5">
                    {/* STR Stat */}
                    <div
                      className="relative bg-[#f2f6fa] border border-primary/20 flex flex-col items-center justify-center min-w-[70px] h-[54px] px-2"
                      style={{
                        borderRadius: 4,
                      }}
                    >
                      <span className="text-[11px] text-primary/80 font-bold font-display tracking-widest mb-1">
                        STR
                      </span>
                      <span className="font-display text-lg font-extrabold text-card-foreground tracking-wider leading-tight">
                        89
                      </span>
                    </div>
                    {/* AGI Stat */}
                    <div
                      className="relative bg-[#f2f6fa] border border-primary/20 flex flex-col items-center justify-center min-w-[70px] h-[54px] px-2"
                      style={{
                        borderRadius: 4,
                      }}
                    >
                      <span className="text-[11px] text-primary/80 font-bold font-display tracking-widest mb-1">
                        AGI
                      </span>
                      <span className="font-display text-lg font-extrabold text-card-foreground tracking-wider leading-tight">
                        102
                      </span>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="mt-6 border-t border-primary/10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-semibold tracking-wide">
                    Guild:{" "}
                    <span className="text-primary font-display font-bold">
                      Knights of Blood
                    </span>
                  </span>
                  <div className="flex items-center gap-1">
                    <div
                      className="h-[11px] w-[11px] animate-pulse bg-primary border border-white"
                      style={{
                        borderRadius: 2,
                      }}
                    />
                    <span className="text-xs text-primary font-bold tracking-wider drop-shadow font-display">
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
