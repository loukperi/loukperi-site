"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

export default function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setShowFallback(false);
      console.log("beforeinstallprompt fired");
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowFallback(false);
      console.log("appinstalled fired");
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );
    window.addEventListener("appinstalled", handleAppInstalled);

    const timer = window.setTimeout(() => {
      setShowFallback(true);
      console.log("fallback shown");
    }, 2000);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.clearTimeout(timer);
    };
  }, []);

  if (isInstalled) return null;

  if (deferredPrompt) {
    return (
      <button
        onClick={async () => {
          if (!deferredPrompt) return;
          await deferredPrompt.prompt();
          await deferredPrompt.userChoice;
          setDeferredPrompt(null);
        }}
        className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white"
      >
        Εγκατάσταση εφαρμογής
      </button>
    );
  }

  if (showFallback) {
    return (
      <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
        Εγκατάσταση: χρησιμοποίησε το εικονίδιο install του browser ή “Add to Home Screen”.
      </div>
    );
  }

  return null;
}