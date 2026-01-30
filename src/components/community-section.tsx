import { Button } from "@/src/components/ui/button";
import { MessageCircle, Twitter, Youtube, Github } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import { socials } from "../context/socials";

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
          <div className="mx-auto mb-6 inline-block bg-primary/10 px-5 py-2 text-primary font-display text-sm font-semibold tracking-wide">
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
              // At most 4 columns for >=880px, else fallback to fewer
              // Always maximum of 4 columns per row
              // Responsive handling for 1-4 cards wide
              maxWidth: "100%",
            }}
          >
            {socials.map(({ icon: Icon, label, href, description }) => (
              <Card
                key={label}
                className="relative flex flex-col border border-border bg-card shadow-lg overflow-hidden items-center justify-center p-0"
                style={{
                  minHeight: 320,
                  borderRadius: 0,
                  width: "100%",
                  maxWidth: 320,
                }}
              >
                <div className="pointer-events-none absolute inset-0 z-0"></div>
                <CardContent className="flex flex-col items-center justify-center py-10 px-7 relative z-10 w-full p-0">
                  <div className="w-full px-5 flex flex-col items-center gap-2">
                    {/* Icon badge */}
                    <div
                      className="flex h-16 w-16 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow mb-5"
                      style={{ borderRadius: 0 }}
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    {/* Label - not rounded, style and spacing updated */}
                    <h3 className="w-full flex flex-col items-center mb-1">
                      <span
                        className="inline-block bg-primary text-[0.95rem] font-bold text-white px-4 py-1.5 uppercase tracking-wider shadow-md border border-white/20 outline outline-primary/50 -outline-offset-2 transition-all duration-200 font-display"
                        style={{
                          borderRadius: 0,
                          letterSpacing: 2,
                          filter: "drop-shadow(0 2px 8px rgba(98,84,243,0.09))",
                          textShadow: "0 1px 6px rgba(0,0,0,0.08)",
                          marginTop: 0,
                        }}
                      >
                        {label}
                      </span>
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {description}
                    </p>
                    {/* All buttons now ensure links open in a new tab */}
                    <Button
                      variant={label === "Discord" ? "default" : "outline"}
                      asChild
                      size="sm"
                      className={
                        label === "Discord"
                          ? "flex items-center gap-2 px-5 py-1.5 mt-1 bg-primary shadow-primary/30 shadow-lg hover:bg-primary/90 transition font-semibold"
                          : "flex items-center gap-2 px-5 py-1.5 mt-1 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-semibold"
                      }
                      style={{
                        borderRadius: 0,
                        minWidth: 120,
                        width: "auto",
                      }}
                    >
                      <a
                        href={href}
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label === "Discord" && (
                          <>
                            <MessageCircle className="h-4 w-4" />
                            <span>Join Discord</span>
                          </>
                        )}
                        {label === "Twitter" && (
                          <>
                            <Twitter className="h-4 w-4" />
                            <span>Visit {label}</span>
                          </>
                        )}
                        {label === "YouTube" && (
                          <>
                            <Youtube className="h-4 w-4" />
                            <span>Visit {label}</span>
                          </>
                        )}
                        {label === "GitHub" && (
                          <>
                            <Github className="h-4 w-4" />
                            <span>Visit {label}</span>
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
