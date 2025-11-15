"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "rebound_demo_seen";

export function ModalRegrowth() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) === "true") return;
    setOpen(true);
  }, []);

  useEffect(() => {
    function onKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (open) {
      document.addEventListener("keydown", onKeydown);
    }
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="regrowth-title"
      aria-describedby="regrowth-body"
    >
      <div
        ref={dialogRef}
        className="relative w-[90vw] max-w-md rounded-3xl bg-[var(--color-porcelain)] p-8 text-center shadow-2xl"
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute right-4 top-4 text-[var(--color-slate)] hover:text-[var(--color-olive)]"
        >
          <X className="h-5 w-5" />
        </button>
        <p id="regrowth-title" className="text-xs uppercase tracking-[0.6em] text-[var(--color-gold)]">
          Regrowth
        </p>
        <p id="regrowth-body" className="mt-4 text-lg font-medium text-[var(--color-slate)]">
          THis is a demo website
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={closeModal} className="w-full">
            Make it yours today!
          </Button>
          <button
            onClick={closeModal}
            className="text-sm font-medium text-[var(--color-olive)] underline-offset-4 hover:underline"
          >
            Continue to site
          </button>
        </div>
      </div>
    </div>
  );
}
