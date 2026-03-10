"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/sidebar"
import { InvoiceTable } from "@/components/invoice-table"
import { Plus } from "lucide-react"

const invoices = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    client: "Acme Corporation",
    amount: 1250.00,
    status: "paid" as const,
    date: "Mar 5, 2026",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    client: "Globex Industries",
    amount: 890.00,
    status: "pending" as const,
    date: "Mar 4, 2026",
  },
  {
    id: "3",
    invoiceNumber: "INV-003",
    client: "Wayne Enterprises",
    amount: 3500.00,
    status: "overdue" as const,
    date: "Feb 28, 2026",
  },
  {
    id: "4",
    invoiceNumber: "INV-004",
    client: "Stark Industries",
    amount: 2100.00,
    status: "paid" as const,
    date: "Feb 25, 2026",
  },
  {
    id: "5",
    invoiceNumber: "INV-005",
    client: "Umbrella Corporation",
    amount: 750.00,
    status: "pending" as const,
    date: "Feb 20, 2026",
  },
  {
    id: "6",
    invoiceNumber: "INV-006",
    client: "Cyberdyne Systems",
    amount: 4200.00,
    status: "paid" as const,
    date: "Feb 15, 2026",
  },
  {
    id: "7",
    invoiceNumber: "INV-007",
    client: "Oscorp Industries",
    amount: 1800.00,
    status: "pending" as const,
    date: "Feb 10, 2026",
  },
  {
    id: "8",
    invoiceNumber: "INV-008",
    client: "LexCorp",
    amount: 5500.00,
    status: "overdue" as const,
    date: "Feb 5, 2026",
  },
]

export default function InvoicesPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader title="Invoices" />
      
      <div className="flex-1 space-y-6 p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Invoice History</h2>
            <p className="text-sm text-muted-foreground">
              View and manage all your invoices
            </p>
          </div>
          <Link href="/invoice/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Invoice
            </Button>
          </Link>
        </div>

        {/* Invoice Table */}
        <InvoiceTable invoices={invoices} />
      </div>
    </div>
  )
}
