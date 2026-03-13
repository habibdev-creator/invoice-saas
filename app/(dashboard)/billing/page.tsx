"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DashboardHeader } from "@/components/sidebar"
import { PricingCards } from "@/components/pricing-cards"
import { Zap, CreditCard, Plus, Minus } from "lucide-react"
import { toast } from "sonner"

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
    buttonText: "Current Plan",
    buttonVariant: "outline" as const,
  },
  {
    name: "Starter",
    price: "$9",
    period: "month",
    description: "Great for freelancers",
    features: [
      "15 invoices per month",
      "PDF downloads",
      "Email support",
      "Custom branding",
    ],
    buttonText: "Upgrade to Starter",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    description: "For growing businesses",
    features: [
      "Unlimited invoices",
      "PDF downloads",
      "Priority support",
      "Analytics dashboard",
      "API access",
    ],
    highlighted: true,
    badge: "Most Popular",
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Lifetime",
    price: "$150",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      "Everything in Pro",
      "Lifetime access",
      "All future updates",
      "No recurring fees",
    ],
    badge: "Best Value",
    buttonText: "Get Lifetime Access",
    buttonVariant: "outline" as const,
  },
]

export default function BillingPage() {
  const [creditsToBuy, setCreditsToBuy] = useState(5)
  const [purchasing, setPurchasing] = useState(false)

  const handlePurchaseCredits = async () => {
    setPurchasing(true)
    try {
      toast.success(`Successfully purchased ${creditsToBuy} credits!`)
      setCreditsToBuy(5)
    } catch (error: any) {
      toast.error(error.message || "Failed to purchase credits")
    } finally {
      setPurchasing(false)
    }
  }

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Billing" />

      <div className="flex-1 space-y-8 p-4 md:p-6">
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
                  <span className="font-medium">0 / 3 invoices</span>
                </div>
                <Progress value={0} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  3 invoices remaining this month
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Available Credits</span>
                  <span className="font-medium">0 credits</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Credits can be used when you exceed your monthly limit
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Purchase Credits</CardTitle>
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
                    onClick={() => setCreditsToBuy(Math.max(1, creditsToBuy - 1))}
                    disabled={purchasing}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold">{creditsToBuy}</span>
                    <span className="ml-1 text-muted-foreground">credits</span>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setCreditsToBuy(Math.min(100, creditsToBuy + 1))}
                    disabled={purchasing}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                className="w-full gap-2"
                onClick={handlePurchaseCredits}
                disabled={purchasing}
              >
                <CreditCard className="h-4 w-4" />
                {purchasing ? "Processing..." : `Buy ${creditsToBuy} Credits for $${creditsToBuy}`}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Credits never expire and can be used anytime
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Available Plans</h2>
            <p className="text-sm text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>
          <PricingCards plans={plans} currentPlan="free" />
        </div>
      </div>
    </div>
  )
}
