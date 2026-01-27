import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Youtube, Github } from "lucide-react";

const socials = [
  {
    icon: MessageCircle,
    label: "Discord",
    href: "#",
    description: "Meet 5,000+ Swordland players & devs",
    accent: "from-blue-500 via-indigo-500 to-purple-600",
    pill: "Active",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/swordlandonline",
    description: "Updates, news, & sneak peeks",
    accent: "from-blue-400 to-blue-600",
    pill: "Latest",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
    description: "Watch trailers & event recaps",
    accent: "from-red-500 via-pink-500 to-yellow-400",
    pill: "Media",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "#",
    description: "View source & contribute",
    accent: "from-slate-700 to-slate-900",
    pill: "Dev",
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="relative py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/5 bottom-1/4 h-[220px] w-[320px] rounded-full bg-card/70 blur-[100px] opacity-40" />
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

        {/* Socials grid, styled like join-section but not rounded */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {socials.map(
            ({ icon: Icon, label, href, description, accent, pill }) => (
              <div
                key={label}
                className="relative flex flex-col border border-border bg-card shadow-lg overflow-hidden py-10 px-7 items-center justify-center"
                style={{
                  minHeight: 320,
                  borderRadius: 0, // No rounding
                }}
              >
                {/* Soft background accent */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`absolute left-1/2 top-6 h-[70px] w-[70px] -translate-x-1/2 rounded-full blur-[50px] opacity-30 bg-linear-to-r ${accent}`}
                  />
                </div>
                {/* Icon badge, not rounded */}
                <div
                  className="mb-7 flex h-16 w-16 items-center justify-center border-2 border-primary/40 bg-primary/10 shadow relative z-10"
                  style={{ borderRadius: 0 }}
                >
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span
                  className="mb-2 inline-block bg-primary/10 text-xs font-bold text-primary px-3 py-1 uppercase tracking-wide"
                  style={{ borderRadius: 0 }}
                >
                  {pill}
                </span>
                <h3 className="mb-1 font-display text-xl font-extrabold text-primary tracking-tight drop-shadow text-center">
                  {label}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {description}
                </p>
                {label === "Discord" ? (
                  <Button
                    variant="default"
                    asChild
                    size="lg"
                    className="px-8 py-2 mt-2 bg-primary shadow-primary/30 shadow-lg hover:bg-primary/90 transition w-full"
                    style={{ borderRadius: 0 }}
                  >
                    <Link href={href}>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Join Discord
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="px-8 py-2 mt-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary w-full"
                    style={{ borderRadius: 0 }}
                  >
                    <Link href={href}>
                      {label === "Twitter" && (
                        <Twitter className="mr-2 h-4 w-4" />
                      )}
                      {label === "YouTube" && (
                        <Youtube className="mr-2 h-4 w-4" />
                      )}
                      {label === "GitHub" && (
                        <Github className="mr-2 h-4 w-4" />
                      )}
                      Visit {label}
                    </Link>
                  </Button>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
