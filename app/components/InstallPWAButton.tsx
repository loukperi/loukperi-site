"use client";

import { useEffect, useMemo, useState } from "react";

declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  }

  interface Navigator {
    standalone?: boolean;
  }
}

type InstallPWAButtonProps = {
  label?: string;
};

const IOS_HELP_DISMISSED_KEY = "loukperi-ios-install-help-dismissed";

function isIosDevice(userAgent: string) {
  return /iphone|ipad|ipod/i.test(userAgent);
}

function isSafariBrowser(userAgent: string) {
  const hasSafari = /safari/i.test(userAgent);
  const hasOtherMajorBrowser = /crios|fxios|edgios|opios|mercury/i.test(userAgent);
  return hasSafari && !hasOtherMajorBrowser;
}

export default function InstallPWAButton({
  label = "Προσθήκη στην αρχική οθόνη",
}: InstallPWAButtonProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isIosSafari, setIsIosSafari] = useState(false);
  const [showIosHelp, setShowIosHelp] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateStandaloneState = () => {
      const standaloneByMedia =
        typeof window !== "undefined" &&
        window.matchMedia("(display-mode: standalone)").matches;

      const standaloneByNavigator =
        typeof navigator !== "undefined" && !!navigator.standalone;

      setIsStandalone(standaloneByMedia || standaloneByNavigator);
    };

    updateStandaloneState();

    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const ios = isIosDevice(ua);
    const safari = isSafariBrowser(ua);
    setIsIosSafari(ios && safari);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsStandalone(true);
      setShowIosHelp(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const canShowIosInstructions = useMemo(() => {
    if (!isMounted || isStandalone || !isIosSafari) return false;

    try {
      const dismissed = localStorage.getItem(IOS_HELP_DISMISSED_KEY) === "true";
      return !dismissed;
    } catch {
      return true;
    }
  }, [isMounted, isStandalone, isIosSafari]);

  const shouldRenderButton = useMemo(() => {
    if (!isMounted || isStandalone) return false;
    return !!deferredPrompt || canShowIosInstructions;
  }, [isMounted, isStandalone, deferredPrompt, canShowIosInstructions]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        setIsInstalling(true);
        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
      } finally {
        setDeferredPrompt(null);
        setIsInstalling(false);
      }
      return;
    }

    if (canShowIosInstructions) {
      setShowIosHelp(true);
    }
  };

  const handleCloseIosHelp = () => {
    setShowIosHelp(false);
  };

  const handleDontShowAgain = () => {
    try {
      localStorage.setItem(IOS_HELP_DISMISSED_KEY, "true");
    } catch {
      // ignore storage errors
    }
    setShowIosHelp(false);
  };

  if (!shouldRenderButton) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        onClick={handleInstallClick}
        disabled={isInstalling}
        aria-label={label}
      >
        {isInstalling ? "Γίνεται εγκατάσταση..." : label}
      </button>

      {showIosHelp ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0B1F3A] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-200/90">
                  Install App
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Προσθήκη στην αρχική οθόνη
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseIosHelp}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 transition hover:bg-white/10 hover:text-white"
                aria-label="Κλείσιμο"
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Σε iPhone ή iPad η εγκατάσταση γίνεται από το Safari μέσω του
              μενού κοινής χρήσης.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#3A8DFF]/15 text-sm font-semibold text-blue-200">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-white">Πάτησε το Share</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Άνοιξε το κάτω ή πάνω μενού του Safari και πάτησε το
                      κουμπί κοινής χρήσης.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#3A8DFF]/15 text-sm font-semibold text-blue-200">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      Επίλεξε “Add to Home Screen”
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Κάνε scroll στη λίστα επιλογών μέχρι να βρεις την αντίστοιχη
                      επιλογή.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#3A8DFF]/15 text-sm font-semibold text-blue-200">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-white">Πάτησε “Add”</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Η LoukPeri θα προστεθεί στην αρχική οθόνη σαν εφαρμογή.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCloseIosHelp}
                className="inline-flex items-center justify-center rounded-2xl bg-[#3A8DFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(58,141,255,0.28)] transition hover:bg-[#5a9eff]"
              >
                Το κατάλαβα
              </button>

              <button
                type="button"
                onClick={handleDontShowAgain}
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                Να μη ξαναεμφανιστεί
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}