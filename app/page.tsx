"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Send, Clock, Check, Zap, Shield, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">InvoiceFlow</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Start</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Trusted by 10,000+ freelancers
            </Badge>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Create professional invoices in{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                30 seconds
              </span>
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              The simplest way for freelancers, developers, designers, and agencies to create, 
              send, and track professional invoices. Get paid faster.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/invoice/new">
                <Button size="lg" className="gap-2">
                  Create Free Invoice
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline">
                  Sign Up Free
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required. Start with 3 free invoices.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need to get paid
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features that help you create professional invoices and get paid on time.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Instant Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create beautiful, professional invoices in under 30 seconds with our intuitive form.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Download PDF</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Export your invoices as professional PDF documents ready to share with clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Send to Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Send invoices directly to your clients via email with just one click.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Track Status</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor payment status with real-time tracking for all your invoices.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free and scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Free Plan */}
            <Card className="relative transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>3 invoices per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>PDF downloads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Basic templates</span>
                  </li>
                </ul>
                <Link href="/signup" className="block">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="relative transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>15 invoices per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email sending</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom branding</span>
                  </li>
                </ul>
                <Link href="/signup" className="block">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-primary shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="shadow-sm">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited invoices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Payment tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Link href="/signup" className="block">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Lifetime Deal */}
            <Card className="relative bg-muted/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="secondary" className="shadow-sm">Limited Offer</Badge>
              </div>
              <CardHeader>
                <CardTitle>Lifetime</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Lifetime access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>First 200 users only</span>
                  </li>
                </ul>
                <Link href="/signup" className="block">
                  <Button variant="outline" className="w-full">Claim Deal</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to get paid faster?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join thousands of freelancers who trust InvoiceFlow for their invoicing needs.
            </p>
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Creating Invoices
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <FileText className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">InvoiceFlow</span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </Link>
              <Link href="/login" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Login
              </Link>
              <Link href="/signup" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Sign Up
              </Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 InvoiceFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
