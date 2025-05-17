"use client";

import React from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@sanjid.in");
    toast.success("Email copied to clipboard");
  };

  return (
    <div id="contact" className="bg-noise text-black dark:text-white rounded-3xl p-8 md:col-span-2">
      <div className="flex flex-col h-full justify-between">
        <h2 className="text-2xl font-medium">Have a project in mind?</h2>
        <div className="mt-auto flex items-center gap-4">
          <button onClick={copyEmail} className="flex items-center gap-2 dark:bg-zinc-800 bg-neutral-200 rounded-full px-6 py-3 transition-colors">
            <span>Copy email</span>
            <Copy className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
