"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DashboardHeader } from "@/components/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, Plus, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

const stats = [
  {
    title: "Invoices Created",
    value: "24",
    description: "This month",
    icon: FileText,
    trend: "+12% from last month",
  },
  {
    title: "Monthly Usage",
    value: "2/3",
    description: "Free invoices used",
    icon: TrendingUp,
    progress: 67,
  },
  {
    title: "Remaining Free",
    value: "1",
    description: "Invoice remaining",
    icon: Clock,
  },
]

const recentInvoices = [
  {
    id: "INV-001",
    client: "Acme Corp",
    amount: "$1,250.00",
    status: "paid",
    date: "Mar 5, 2026",
  },
  {
    id: "INV-002",
    client: "Globex Inc",
    amount: "$890.00",
    status: "pending",
    date: "Mar 4, 2026",
  },
  {
    id: "INV-003",
    client: "Wayne Enterprises",
    amount: "$3,500.00",
    status: "overdue",
    date: "Feb 28, 2026",
  },
  {
    id: "INV-004",
    client: "Stark Industries",
    amount: "$2,100.00",
    status: "paid",
    date: "Feb 25, 2026",
  },
  {
    id: "INV-005",
    client: "Umbrella Corp",
    amount: "$750.00",
    status: "pending",
    date: "Feb 20, 2026",
  },
]

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, { label: string; className: string }> = {
    paid: {
      label: "Paid",
      className: "bg-green-100 text-green-700 hover:bg-green-100",
    },
    pending: {
      label: "Pending",
      className: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
    },
    overdue: {
      label: "Overdue",
      className: "bg-red-100 text-red-700 hover:bg-red-100",
    },
  }

  const variant = variants[status] || variants.pending

  return (
    <Badge variant="secondary" className={variant.className}>
      {variant.label}
    </Badge>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Dashboard" />
      
      <div className="flex-1 space-y-6 p-4 md:p-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title} className="transition-all duration-300 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                {stat.trend && (
                  <p className="mt-1 text-xs text-green-600">{stat.trend}</p>
                )}
                {stat.progress !== undefined && (
                  <Progress value={stat.progress} className="mt-2 h-1.5" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Recent Invoices</h2>
            <p className="text-sm text-muted-foreground">
              Your latest invoice activity
            </p>
          </div>
          <Link href="/invoice/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Invoice
            </Button>
          </Link>
        </div>

        {/* Recent Invoices Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentInvoices.map((invoice) => (
                  <TableRow key={invoice.id} className="cursor-pointer transition-colors hover:bg-muted/50">
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>{invoice.amount}</TableCell>
                    <TableCell>
                      <StatusBadge status={invoice.status} />
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {invoice.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* View All Link */}
        <div className="flex justify-center">
          <Link href="/invoices">
            <Button variant="ghost" className="gap-2">
              View all invoices
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
