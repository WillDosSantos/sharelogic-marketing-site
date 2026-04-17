"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { BUTTON_MOTION } from "@/lib/motion/button";
import { cn } from "@/lib/utils/cn";

type Field = "firstName" | "lastName" | "email" | "company";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
};

export function HomeFollowLeadForm() {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<Field, string>> = {};
    if (!values.firstName.trim()) next.firstName = "Required";
    if (!values.lastName.trim()) next.lastName = "Required";
    if (!values.email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.12)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="follow-firstName" className="text-sm font-medium text-[#666666]">
            First name <span className="text-[#2750F5]">*</span>
          </label>
          <input
            id="follow-firstName"
            name="firstName"
            autoComplete="given-name"
            value={values.firstName}
            onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))}
            className={cn(
              "mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#2b59f5]/20",
              errors.firstName ? "border-red-300" : "border-slate-200",
            )}
            placeholder="Jane"
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName ? <p className="mt-1 text-xs text-red-600">{errors.firstName}</p> : null}
        </div>
        <div>
          <label htmlFor="follow-lastName" className="text-sm font-medium text-[#666666]">
            Last name <span className="text-[#2750F5]">*</span>
          </label>
          <input
            id="follow-lastName"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))}
            className={cn(
              "mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#2b59f5]/20",
              errors.lastName ? "border-red-300" : "border-slate-200",
            )}
            placeholder="Doe"
            aria-invalid={Boolean(errors.lastName)}
          />
          {errors.lastName ? <p className="mt-1 text-xs text-red-600">{errors.lastName}</p> : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="follow-email" className="text-sm font-medium text-[#666666]">
          Email <span className="text-[#2750F5]">*</span>
        </label>
        <input
          id="follow-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={cn(
            "mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#2b59f5]/20",
            errors.email ? "border-red-300" : "border-slate-200",
          )}
          placeholder="your@email.com"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
      </div>

      <div className="mt-5">
        <label htmlFor="follow-company" className="text-sm font-medium text-[#666666]">
          Company name
        </label>
        <input
          id="follow-company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#2b59f5]/20"
          placeholder="Acme Corp"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={BUTTON_MOTION.whileHover}
        whileTap={BUTTON_MOTION.whileTap}
        transition={BUTTON_MOTION.transition}
        className="mt-8 w-full rounded-full bg-[#2b59f5] py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2448d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b59f5]"
      >
        Schedule a call with a specialist
      </motion.button>

      {submitted ? (
        <p className="mt-5 text-center text-sm text-slate-600" role="status">
          Thanks—we&apos;ll be in touch. (This form is frontend-only until you connect a backend.)
        </p>
      ) : null}
    </form>
  );
}
