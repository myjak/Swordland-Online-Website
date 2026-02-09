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
    <section id="community" className="relative py-16 sm:py-20 md:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[450px] md:w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px] sm:blur-[110px] md:blur-[120px]" />
        <div className="absolute right-1/5 bottom-1/4 h-[160px] w-[240px] sm:h-[190px] sm:w-[280px] md:h-[220px] md:w-[320px] rounded-full bg-card/70 blur-[80px] sm:blur-[90px] md:blur-[100px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <div className="mx-auto mb-6 sm:mb-7 md:mb-8 inline-block bg-primary/10 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-primary font-display text-sm sm:text-base font-semibold tracking-wider sm:tracking-widest border-b-2 border-primary/30 drop-shadow-sm">
            Community
          </div>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-card">
            Find Your Guild—Stay Connected
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-card/70 text-base sm:text-lg px-2">
            Join the adventure—connect on Discord, get news, watch events, and
            help shape the future of Swordland Online!
          </p>
        </div>

        {/* Evenly spaced socials grid */}
        <div className="mb-12 sm:mb-16 md:mb-20 flex justify-center">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto justify-center place-items-center gap-4 sm:gap-6 md:gap-8">
            {socials.map(({ label, href, description, button }) => {
              const Icon = iconMap[label];
              return (
                <Card
                  key={label}
                  className="relative flex flex-col border border-border bg-card shadow-lg overflow-hidden items-center justify-center p-0 w-full"
                  style={{
                    minHeight: "200px",
                    borderRadius: 0,
                    maxWidth: "100%",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 z-0"></div>
                  <CardContent className="flex-1 flex flex-col items-center justify-center px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6 relative z-10 w-full">
                    <div className="w-full flex flex-col items-center gap-0 justify-center min-h-[180px] sm:min-h-[200px]">
                      {/* Spacer to push everything down and center vertically */}
                      <div className="flex-1 min-h-[20px]" />
                      {/* Icon badge */}
                      <div
                        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow mb-3 sm:mb-4"
                        style={{ borderRadius: 0 }}
                      >
                        {Icon && (
                          <HugeiconsIcon
                            icon={Icon}
                            size={24}
                            color="var(--primary)"
                            className="h-6 w-6 sm:h-7 sm:w-7 text-primary"
                          />
                        )}
                      </div>
                      {/* Label */}
                      <h3 className="w-full flex flex-col items-center mb-1.5 sm:mb-2">
                        <span
                          className="inline-block bg-primary text-xs sm:text-[0.92rem] font-bold text-white px-2 sm:px-3 py-0.5 sm:py-1 uppercase tracking-wider shadow-md border border-white/20 outline outline-primary/50 -outline-offset-2 transition-all duration-200 font-display"
                          style={{
                            borderRadius: 0,
                            letterSpacing: 1.5,
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
                      <p className="text-xs sm:text-sm text-muted-foreground text-center mb-1 min-h-[32px] sm:min-h-[36px] flex items-center justify-center px-1">
                        {description}
                      </p>
                      <Button
                        variant={label === "Discord" ? "default" : "outline"}
                        asChild
                        size="sm"
                        className={
                          label === "Discord"
                            ? "flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-primary shadow-primary/30 shadow-lg hover:bg-primary/90 transition font-semibold min-h-[44px]"
                            : "flex items-center gap-2 px-3 sm:px-4 py-1.5 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-semibold min-h-[44px]"
                        }
                        style={{
                          borderRadius: 0,
                          minWidth: "100px",
                          width: "auto",
                          marginTop: "2px",
                        }}
                      >
                        <a
                          href={href}
                          className="flex items-center gap-2 justify-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {Icon && (
                            <HugeiconsIcon
                              icon={Icon}
                              size={16}
                              color="currentColor"
                              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            />
                          )}
                          <span className="text-xs sm:text-sm">{button ?? `Visit ${label}`}</span>
                        </a>
                      </Button>
                      <div className="flex-1 min-h-[20px]" />
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
