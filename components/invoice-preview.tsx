"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText } from "lucide-react"
import type { InvoiceData } from "./invoice-form"

interface InvoicePreviewProps {
  data: InvoiceData
}

export function InvoicePreview({ data }: InvoicePreviewProps) {
  const subtotal = data.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  const taxAmount = subtotal * (data.taxRate / 100)
  const total = subtotal + taxAmount

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-"
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{data.businessName || "Your Business"}</h2>
              <p className="text-sm text-muted-foreground">{data.businessEmail || "email@company.com"}</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-bold text-primary">INVOICE</h3>
            <p className="text-sm text-muted-foreground">{data.invoiceNumber || "INV-000"}</p>
          </div>
        </div>

        {/* Addresses */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              From
            </p>
            <p className="font-medium">{data.businessName || "Your Business"}</p>
            <p className="text-sm text-muted-foreground">{data.businessAddress || "Your address"}</p>
            <p className="text-sm text-muted-foreground">{data.businessEmail || "your@email.com"}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Bill To
            </p>
            <p className="font-medium">{data.clientName || "Client Name"}</p>
            <p className="text-sm text-muted-foreground">{data.clientAddress || "Client address"}</p>
            <p className="text-sm text-muted-foreground">{data.clientEmail || "client@email.com"}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="mb-8 grid gap-4 rounded-lg bg-muted/50 p-4 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Invoice Number
            </p>
            <p className="font-medium">{data.invoiceNumber || "INV-000"}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Issue Date
            </p>
            <p className="font-medium">{formatDate(data.invoiceDate)}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Due Date
            </p>
            <p className="font-medium">{formatDate(data.dueDate)}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                  Description
                </th>
                <th className="px-4 py-3 text-center font-medium text-muted-foreground">
                  Qty
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Price
                </th>
                <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data.items.length > 0 ? (
                data.items.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "" : "bg-muted/20"}>
                    <td className="px-4 py-3">{item.description || "Item description"}</td>
                    <td className="px-4 py-3 text-center">{item.quantity}</td>
                    <td className="px-4 py-3 text-right">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right font-medium">
                      ${(item.quantity * item.price).toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                    No items added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax ({data.taxRate}%)</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>Thank you for your business!</p>
          <p className="mt-1">Payment is due within 30 days of the invoice date.</p>
        </div>
      </CardContent>
    </Card>
  )
}
