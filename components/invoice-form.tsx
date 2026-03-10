"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Trash2 } from "lucide-react"

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  price: number
}

export interface InvoiceData {
  businessName: string
  businessEmail: string
  businessAddress: string
  clientName: string
  clientEmail: string
  clientAddress: string
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  items: InvoiceItem[]
  taxRate: number
}

interface InvoiceFormProps {
  data: InvoiceData
  onChange: (data: InvoiceData) => void
}

export function InvoiceForm({ data, onChange }: InvoiceFormProps) {
  const updateField = <K extends keyof InvoiceData>(field: K, value: InvoiceData[K]) => {
    onChange({ ...data, [field]: value })
  }

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      price: 0,
    }
    onChange({ ...data, items: [...data.items, newItem] })
  }

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    const updatedItems = data.items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    )
    onChange({ ...data, items: updatedItems })
  }

  const removeItem = (id: string) => {
    onChange({ ...data, items: data.items.filter((item) => item.id !== id) })
  }

  return (
    <div className="space-y-6">
      {/* Business Info */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Your Business Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name</Label>
            <Input
              id="businessName"
              placeholder="Your Company Name"
              value={data.businessName}
              onChange={(e) => updateField("businessName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessEmail">Email</Label>
            <Input
              id="businessEmail"
              type="email"
              placeholder="you@company.com"
              value={data.businessEmail}
              onChange={(e) => updateField("businessEmail", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessAddress">Address</Label>
            <Input
              id="businessAddress"
              placeholder="123 Business St, City, State"
              value={data.businessAddress}
              onChange={(e) => updateField("businessAddress", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Client Info */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Client Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              placeholder="Client Company Name"
              value={data.clientName}
              onChange={(e) => updateField("clientName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientEmail">Client Email</Label>
            <Input
              id="clientEmail"
              type="email"
              placeholder="client@company.com"
              value={data.clientEmail}
              onChange={(e) => updateField("clientEmail", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientAddress">Client Address</Label>
            <Input
              id="clientAddress"
              placeholder="456 Client Ave, City, State"
              value={data.clientAddress}
              onChange={(e) => updateField("clientAddress", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Invoice Details */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                placeholder="INV-001"
                value={data.invoiceNumber}
                onChange={(e) => updateField("invoiceNumber", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoiceDate">Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={data.invoiceDate}
                onChange={(e) => updateField("invoiceDate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={data.dueDate}
                onChange={(e) => updateField("dueDate", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Line Items */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-base">Invoice Items</CardTitle>
          <Button type="button" variant="outline" size="sm" onClick={addItem} className="gap-1">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Description</TableHead>
                  <TableHead className="w-[15%]">Qty</TableHead>
                  <TableHead className="w-[20%]">Price</TableHead>
                  <TableHead className="w-[15%] text-right">Total</TableHead>
                  <TableHead className="w-[10%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Input
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, "description", e.target.value)}
                        className="h-9"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, "quantity", parseInt(e.target.value) || 1)}
                        className="h-9"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={item.price || ""}
                        onChange={(e) => updateItem(item.id, "price", parseFloat(e.target.value) || 0)}
                        className="h-9"
                      />
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      ${(item.quantity * item.price).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {data.items.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      No items added yet. Click &quot;Add Item&quot; to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Tax Rate */}
          <div className="mt-4 flex items-center justify-end gap-4">
            <Label htmlFor="taxRate" className="text-sm">Tax Rate (%)</Label>
            <Input
              id="taxRate"
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={data.taxRate}
              onChange={(e) => updateField("taxRate", parseFloat(e.target.value) || 0)}
              className="h-9 w-24"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
