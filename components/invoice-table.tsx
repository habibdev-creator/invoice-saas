"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, Download, Trash2, FileText } from "lucide-react"

interface Invoice {
  id: string
  invoiceNumber: string
  client: string
  amount: number
  status: "paid" | "pending" | "overdue"
  date: string
}

interface InvoiceTableProps {
  invoices: Invoice[]
}

function StatusBadge({ status }: { status: Invoice["status"] }) {
  const variants: Record<Invoice["status"], { label: string; className: string }> = {
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

  const variant = variants[status]

  return (
    <Badge variant="secondary" className={variant.className}>
      {variant.label}
    </Badge>
  )
}

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
      invoice.client.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search invoices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[70px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <TableRow key={invoice.id} className="transition-colors hover:bg-muted/50">
                  <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.client}</TableCell>
                  <TableCell>${invoice.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</TableCell>
                  <TableCell>
                    <StatusBadge status={invoice.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">{invoice.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Download className="h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-32">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="font-medium">No invoices found</p>
                    <p className="text-sm text-muted-foreground">
                      {search || statusFilter !== "all"
                        ? "Try adjusting your filters"
                        : "Create your first invoice to get started"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
