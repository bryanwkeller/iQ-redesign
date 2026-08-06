"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
  { label: "Solutions", href: "#solutions" },
]

export function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" })
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail("")
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="bg-primary/5 border-b border-border py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-foreground text-center">
            Empowering Clients. Unleashing Growth
          </p>
        </div>
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://www.iquanti.com/wp-content/uploads/2026/01/Slate-grey-without-tagline.png"
                alt="iQuanti"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              iQuanti is an AI-native growth marketing company built for the age of conversational and agentic transformation that turns consumer signals into enterprise impact.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary-ink transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary-ink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary-ink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div id="careers">
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-label)] text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for insights and updates
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Enter Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary-ink text-primary-foreground hover:bg-primary-ink/90 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="font-[family-name:var(--font-legal)] text-sm text-muted-foreground text-center">
            <Link href="https://www.iquanti.com/privacy-policy/" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            {" | "}
            &copy; Copyright {new Date().getFullYear()} iQuanti, Inc. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
