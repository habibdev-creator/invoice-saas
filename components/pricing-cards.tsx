"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingPlan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  buttonText: string
  buttonVariant?: "default" | "outline"
}

interface PricingCardsProps {
  plans: PricingPlan[]
  currentPlan?: string
}

export function PricingCards({ plans, currentPlan }: PricingCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => {
        const isCurrentPlan = currentPlan === plan.name.toLowerCase()
        
        return (
          <Card
            key={plan.name}
            className={cn(
              "relative transition-all duration-300 hover:shadow-lg",
              plan.highlighted && "border-primary shadow-lg",
              isCurrentPlan && "ring-2 ring-primary ring-offset-2"
            )}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="shadow-sm">{plan.badge}</Badge>
              </div>
            )}
            {isCurrentPlan && (
              <div className="absolute -top-3 right-4">
                <Badge variant="secondary" className="shadow-sm">Current Plan</Badge>
              </div>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.buttonVariant || "default"}
                disabled={isCurrentPlan}
              >
                {isCurrentPlan ? "Current Plan" : plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
