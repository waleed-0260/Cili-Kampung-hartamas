"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";
import { locations } from "@/lib/data";

interface FormState {
  outlet: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  requests: string;
}

const initialForm: FormState = {
  outlet: "",
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  partySize: "",
  requests: "",
};

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-ck-charcoal/15 bg-white text-sm text-ck-charcoal placeholder:text-ck-charcoal/35 focus:outline-none focus:border-ck-leaf focus:ring-2 focus:ring-ck-leaf/15 transition-all";
  const labelClass = "block text-xs font-semibold text-ck-charcoal/60 tracking-wide uppercase mb-1.5";

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center text-center gap-5 py-16 px-8 bg-white rounded-3xl border border-ck-leaf/15"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            >
              <CheckCircle2 className="size-16 text-ck-leaf" />
            </motion.div>
            <h3 className="font-heading text-2xl font-semibold text-ck-charcoal">
              Reservation Received
            </h3>
            <p className="text-ck-charcoal/60 leading-relaxed max-w-sm">
              Thank you, {form.name || "valued guest"}. We have received your
              reservation request and will confirm via WhatsApp or call shortly.
            </p>
            <p className="text-sm text-ck-charcoal/45">
              Selected outlet: <strong className="text-ck-charcoal/70">{form.outlet || "Hartamas"}</strong>
              {" · "}{form.date} at {form.time}
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="mt-2 text-sm font-semibold text-ck-leaf hover:text-ck-leaf/80 underline underline-offset-2 transition-colors"
            >
              Make another reservation
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white rounded-3xl border border-ck-charcoal/8 p-8"
          >
            {/* Outlet */}
            <div>
              <label htmlFor="outlet" className={labelClass}>
                Outlet
              </label>
              <select
                id="outlet"
                name="outlet"
                value={form.outlet}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select an outlet…</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ahmad Razif"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+60 12-345 6789"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="ahmad@email.com"
                className={inputClass}
              />
            </div>

            {/* Date + Time + Party Size */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className={labelClass}>
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="time" className={labelClass}>
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select…</option>
                  {["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="partySize" className={labelClass}>
                  Party Size
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={form.partySize}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Pax…</option>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "pax" : "pax"}</option>
                  ))}
                  <option value="20+">20+ pax</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label htmlFor="requests" className={labelClass}>
                Special Requests
              </label>
              <textarea
                id="requests"
                name="requests"
                value={form.requests}
                onChange={handleChange}
                rows={3}
                placeholder="Birthday celebration, dietary requirements, high chair needed…"
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-ck-leaf text-ck-cream text-sm font-semibold hover:bg-ck-leaf/90 transition-colors"
              >
                <CalendarDays className="size-4" />
                Confirm Reservation
              </button>
              <a
                href="https://wa.me/60320111234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-ck-charcoal/15 text-sm font-medium text-ck-charcoal/70 hover:border-ck-leaf/40 hover:text-ck-leaf transition-all"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
