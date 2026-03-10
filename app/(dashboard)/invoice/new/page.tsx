"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/sidebar"
import { InvoiceForm, type InvoiceData } from "@/components/invoice-form"
import { InvoicePreview } from "@/components/invoice-preview"
import { Download, Send, Save } from "lucide-react"

const initialInvoiceData: InvoiceData = {
  businessName: "",
  businessEmail: "",
  businessAddress: "",
  clientName: "",
  clientEmail: "",
  clientAddress: "",
  invoiceNumber: `INV-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  items: [
    {
      id: "1",
      description: "",
      quantity: 1,
      price: 0,
    },
  ],
  taxRate: 0,
}

export default function CreateInvoicePage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(initialInvoiceData)

  return (
    <div className="flex flex-col">
      <DashboardHeader title="Create Invoice" />
      
      <div className="flex-1 p-4 md:p-6">
        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Invoice
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Send className="h-4 w-4" />
            Send Invoice
          </Button>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-6 xl:grid-cols-2">
          {/* Form */}
          <div>
            <InvoiceForm data={invoiceData} onChange={setInvoiceData} />
          </div>

          {/* Preview */}
          <div className="xl:sticky xl:top-24 xl:h-fit">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Live Preview</h2>
              <p className="text-sm text-muted-foreground">
                See your invoice as you build it
              </p>
            </div>
            <InvoicePreview data={invoiceData} />
          </div>
        </div>
      </div>
    </div>
  )
}
