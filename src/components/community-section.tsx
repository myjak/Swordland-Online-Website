import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { socials } from "../context/socials";
import { HugeiconsIcon } from '@hugeicons/react'
import { DiscordIcon, NewTwitterIcon, YoutubeIcon, InstagramIcon, TiktokIcon } from '@hugeicons/core-free-icons'

// Patch: Handle Twitter/X and YouTube label mapping and icons
//  
// Reason: In socials.ts, Twitter's label is "X" and YouTube is "YouTube" (not "Youtube"), 
// so iconMap's keys must match exactly those label names from socials.ts.
const iconMap: Record<string, any> = {
  Discord: DiscordIcon,
  X: NewTwitterIcon,
  YouTube: YoutubeIcon,
  Instagram: InstagramIcon,
  TikTok: TiktokIcon,
};

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/5 bottom-1/4 h-[220px] w-[320px] rounded-full bg-card/70 blur-[100px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-8 inline-block bg-primary/10 px-6 py-2 text-primary font-display text-base font-semibold tracking-widest border-b-2 border-primary/30 drop-shadow-sm">
            Community
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-card md:text-4xl">
            Find Your Guild—Stay Connected
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-card/70 text-lg">
            Join the adventure—connect on Discord, get news, watch events, and
            help shape the future of Swordland Online!
          </p>
        </div>

        {/* Evenly spaced socials grid, up to 4 on a row */}
        <div className="mb-20 flex justify-center">
          <div
            className="grid w-full max-w-4xl mx-auto justify-center place-items-center gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              maxWidth: "100%",
            }}
          >
            {socials.map(({ label, href, description, button }) => {
              const Icon = iconMap[label];
              return (
                <Card
                  key={label}
                  className="relative flex flex-col border border-border bg-card shadow-lg overflow-hidden items-center justify-center p-0"
                  style={{
                    minHeight: 230,
                    borderRadius: 0,
                    width: "100%",
                    maxWidth: 320,
                    height: 230,
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 z-0"></div>
                  <CardContent className="flex-1 flex flex-col items-center justify-center px-7 py-0 relative z-10 w-full p-0 h-full">
                    <div
                      className="w-full flex flex-col items-center gap-0 justify-center"
                      style={{
                        minHeight: 210,
                        height: "210px",
                      }}
                    >
                      {/* Spacer to push everything down and center vertically */}
                      <div style={{ flex: 0.8 }} />
                      {/* Icon badge */}
                      <div
                        className="flex h-12 w-12 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow mb-4"
                        style={{ borderRadius: 0 }}
                      >
                        {Icon && (
                          <HugeiconsIcon
                            icon={Icon}
                            size={28}
                            color="var(--primary)"
                            className="h-7 w-7 text-primary"
                          />
                        )}
                      </div>
                      {/* Label */}
                      <h3 className="w-full flex flex-col items-center mb-2">
                        <span
                          className="inline-block bg-primary text-[0.92rem] font-bold text-white px-3 py-1 uppercase tracking-wider shadow-md border border-white/20 outline outline-primary/50 -outline-offset-2 transition-all duration-200 font-display"
                          style={{
                            borderRadius: 0,
                            letterSpacing: 2,
                            filter:
                              "drop-shadow(0 2px 8px rgba(98,84,243,0.09))",
                            textShadow: "0 1px 6px rgba(0,0,0,0.08)",
                            marginTop: 0,
                          }}
                        >
                          {label}
                        </span>
                      </h3>
                      {/* Description text moved down, text and button closer */}
                      <p className="text-sm text-muted-foreground text-center mb-1 min-h-[36px] flex items-center justify-center">
                        {description}
                      </p>
                      <Button
                        variant={label === "Discord" ? "default" : "outline"}
                        asChild
                        size="sm"
                        className={
                          label === "Discord"
                            ? "flex items-center gap-2 px-4 py-1.5 bg-primary shadow-primary/30 shadow-lg hover:bg-primary/90 transition font-semibold"
                            : "flex items-center gap-2 px-4 py-1.5 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-semibold"
                        }
                        style={{
                          borderRadius: 0,
                          minWidth: 110,
                          width: "auto",
                          marginTop: "2px",
                        }}
                      >
                        <a
                          href={href}
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {Icon && (
                            <HugeiconsIcon
                              icon={Icon}
                              size={18}
                              color="currentColor"
                              className="h-4 w-4"
                            />
                          )}
                          <span>{button ?? `Visit ${label}`}</span>
                        </a>
                      </Button>
                      <div style={{ flex: 1 }} />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
