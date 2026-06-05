"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import { useRef, useState } from "react"

const interestOptions = [
  "Performance Marketing",
  "SEO & Search Intelligence",
  "Creative & Experience",
  "Marketing Analytics",
  "Marketing Technology",
  "Other",
]

export function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })
  const [submitted, setSubmitted] = useState(false)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacyAccepted) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/50">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:pt-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                Get In Touch
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 font-medium leading-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to turn consumer signals into growth? Let&apos;s build your AI-native marketing strategy together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-foreground">
                  We&apos;ll be in touch soon.
                </h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. A member of our team will respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-8 space-y-5"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-foreground mb-1">
                    Getting started is easy.
                  </h3>
                  <p className="text-sm text-muted-foreground">required fields*</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your name*</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company name*</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Your work email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">
                      Phone number{" "}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="interest">Interested in*</Label>
                    <Select
                      required
                      value={form.interest}
                      onValueChange={(value) => setForm((prev) => ({ ...prev, interest: value }))}
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {interestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="message">
                      Add message{" "}
                      <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="min-h-[42px] resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    I confirm I have read iQuanti&apos;s Privacy Policy.*
                  </Label>
                </div>

                <div className="rounded-lg border border-border bg-secondary/50 p-4 flex items-center gap-4">
                  <div className="w-8 h-8 rounded border border-border bg-background shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">I&apos;m not a robot</p>
                    <p className="text-xs text-muted-foreground">reCAPTCHA · Privacy · Terms</p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!privacyAccepted}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Contact Us
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
