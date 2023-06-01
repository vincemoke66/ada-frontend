"use client"

import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  CalendarClock,
  Ghost,
  MoreHorizontal,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import { buildings, floors, statuses } from "../data/data"
import { DataTableColumnHeader } from "./data-table-column-header"
import { format } from "date-fns"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  id: string
  building: string
  time: Date
  student: string
  subject: string
}

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "student",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student" />
    ),
  },
  {
    accessorKey: "section",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Section" />
    ),
  },
  {
    accessorKey: "course",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Course" />
    ),
  },
  {
    accessorKey: "room",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Room" />
    ),
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
      const datetimestruct = {
        value: "",
        label: "",
        icon: CalendarClock,
      }

      const datetime = datetimestruct

      const formattedTime = format(new Date(row.getValue("time")), "MM/dd/yy h:mm:ss a")

      datetime.value = formattedTime
      datetime.label = formattedTime

      if (!datetime) {
        return null
      }

      return (
        <div className="flex items-center">
          {datetime.icon && (
            <datetime.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{datetime.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
]
