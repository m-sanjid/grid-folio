"use client";

import React from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const copyEmail = () => {
    // Give your email here
    navigator.clipboard.writeText("contact@sanjid.in");
    toast.success("Email copied to clipboard");
  };

  return (
    <div
      id="contact"
      className="bg-noise w-full rounded-3xl p-8 text-black md:col-span-3 lg:col-span-2 dark:text-white"
    >
      <div className="flex h-full flex-col justify-between">
        <h2 className="text-2xl font-medium">Have a project in mind?</h2>
        <div className="mt-2 flex items-center gap-4">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 rounded-2xl bg-neutral-200 px-6 py-3 transition-colors dark:bg-zinc-800"
          >
            <span>Copy email</span>
            <Copy className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
