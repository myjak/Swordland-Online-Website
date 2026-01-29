"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ExternalLink, Server } from "lucide-react";
import { Separator } from "@/src/components/ui/separator";
import { Card } from "@/src/components/ui/card";

// Set the server IP here to easily update it everywhere
const SERVER_IP = "*********************";

export function JoinSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Handle error if needed
    }
  };

  return (
    <section id="join" className="relative py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-card md:text-4xl">
            Join the Adventure!
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-card/60">
            Dive into Swordland Online directly on our official Hytale server.
            No downloads needed—just connect and begin your journey in Aincrad
            alongside hundreds of adventurers!
          </p>
        </div>

        {/* Join Card as a Card component with no rounding */}
        <Card className="relative grid gap-0 md:grid-cols-[1fr_auto_1fr] border border-border bg-card shadow-lg overflow-hidden p-0 rounded-none">
          {/* Server Info */}
          <div className="flex flex-col items-center md:items-start justify-center px-8 py-10 bg-card/90">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/10 shadow">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-2xl font-extrabold text-primary tracking-tight drop-shadow text-center md:text-left">
              {SERVER_IP}
            </h3>
            <Button
              variant="default"
              size="lg"
              className="px-8 py-2 mt-4 mb-6 bg-primary shadow-primary/30 shadow-lg hover:bg-primary/90 transition w-full md:w-auto"
              onClick={handleCopy}
              type="button"
              aria-label={`Copy server IP ${SERVER_IP}`}
            >
              {copied ? (
                <>
                  Copied!
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Connect Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-xs text-emerald-500 font-medium mb-2 text-center md:text-left tracking-wide">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              250+ players online now
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed">
              Connect to our official multiplayer server. All custom features
              included—just hop in!
            </p>
          </div>

          {/* Vertical Separator with space at top and bottom */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex-1" />
            <Separator
              orientation="vertical"
              className="bg-primary w-1 mx-0"
              style={{ minHeight: "120px", height: "85%" }}
            />
            <div className="flex-1" />
          </div>

          {/* How to Join */}
          <div className="flex flex-col justify-center px-8 py-10 bg-card/95">
            <h4 className="mb-5 font-display text-lg font-semibold text-primary tracking-tight text-center md:text-left">
              How to Join
            </h4>
            <ol className="list-decimal pl-6 space-y-3 text-base text-card-foreground/80 text-left">
              <li>
                Launch{" "}
                <span className="font-semibold text-primary">Hytale</span> on
                your PC or Mac.
              </li>
              <li>
                Navigate to{" "}
                <span className="font-semibold text-primary">Multiplayer</span>{" "}
                mode.
              </li>
              <li>
                Add this server address:{" "}
                <span className="font-semibold text-card-foreground bg-primary/10 rounded px-1 py-0.5">
                  {SERVER_IP}
                </span>
              </li>
              <li>
                Connect and step into Aincrad!
                <br />
                <span className="text-xs text-muted-foreground">
                  All mods and content will load automatically.
                </span>
              </li>
            </ol>
          </div>
        </Card>
      </div>
    </section>
  );
}
