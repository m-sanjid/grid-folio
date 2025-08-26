"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast.success("Thanks! You'll hear from me soon.");
        setEmail("");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Connection issue. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      id="newsletter"
      className="bg-noise w-full rounded-3xl p-8 text-black md:col-span-2 dark:text-white"
    >
      <h2 className="mb-6 text-xl font-medium md:text-2xl">
        Get design tips & guides straight to your inbox for free!
      </h2>

      <motion.div layout className="flex flex-col gap-4 sm:flex-row">
        <motion.input
          layoutId="newsletter-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="Your email address"
          className="flex-1 rounded-2xl bg-neutral-200 px-6 py-3 text-black outline-hidden dark:bg-zinc-800 dark:text-white"
        />
        <motion.button
          layoutId="newsletter-button"
          type="submit"
          disabled={isSubmitting}
          className="rounded-2xl bg-neutral-200 px-6 py-3 transition-colors dark:bg-zinc-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </motion.button>
      </motion.div>
    </form>
  );
};

export default Newsletter;
