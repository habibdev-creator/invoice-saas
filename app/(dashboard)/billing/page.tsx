"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/sidebar"
import { PricingCards } from "@/components/pricing-cards"
import { Check, Zap, CreditCard, Plus, Minus } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "3 invoices per month",
      "PDF downloads",
      "Basic templates",
      "Email support",
    ],
    buttonText: "Downgrade",
    buttonVariant: "outline" as const,
  },
  {
    name: "Starter",
    price: "$9",
    period: "month",
    description: "Great for freelancers",
    features: [
      "15 invoices per month",
      "Email sending",
      "Custom branding",
      "Priority support",
    ],
    buttonText: "Upgrade",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    description: "For growing businesses",
    features: [
      "Unlimited invoices",
      "Payment tracking",
      "Analytics dashboard",
      "API access",
      "Dedicated support",
    ],
    highlighted: true,
    badge: "Most Popular",
    buttonText: "Upgrade",
  },
]

export default function BillingPage() {
  const [credits, setCredits] = useState(5)
  const usedInvoices = 2
  const totalInvoices = 3
  const usagePercentage = (usedInvoices / totalInvoices) * 100

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Billing" />
      
      <div className="flex-1 space-y-8 p-4 md:p-6">
        {/* Current Plan */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>Manage your subscription</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Free Plan
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Monthly Usage</span>
                  <span className="font-medium">{usedInvoices} / {totalInvoices} invoices</span>
                </div>
                <Progress value={usagePercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {totalInvoices - usedInvoices} invoice{totalInvoices - usedInvoices !== 1 ? "s" : ""} remaining this month
                </p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Next billing date</p>
                  <p className="text-sm text-muted-foreground">April 1, 2026</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Credits Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Invoice Credits</CardTitle>
                  <CardDescription>Buy extra invoices anytime</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">1 credit = 1 invoice</span>
                  <span className="text-sm font-medium">$1 per credit</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setCredits(Math.max(1, credits - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold">{credits}</span>
                    <span className="ml-1 text-muted-foreground">credits</span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setCredits(Math.min(100, credits + 1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full gap-2">
                <CreditCard className="h-4 w-4" />
                Buy {credits} Credits for ${credits}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade Plans */}
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Upgrade Your Plan</h2>
            <p className="text-sm text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>
          <PricingCards plans={plans} currentPlan="free" />
        </div>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Add or update your payment information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium">No payment method</p>
                  <p className="text-sm text-muted-foreground">Add a card to upgrade your plan</p>
                </div>
              </div>
              <Button variant="outline">Add Card</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
