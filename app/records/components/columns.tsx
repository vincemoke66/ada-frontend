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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Attendance = {
  id: string
  building: string
  time: Date
  studentName: string
  subject: string
}

export const columns: ColumnDef<Attendance>[] = [
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

      const rawDateTime: Date = row.getValue("time")

      const stringDate = rawDateTime.toLocaleDateString()
      const stringTime = rawDateTime.toLocaleTimeString()

      datetime.value = stringDate + " " + stringTime
      datetime.label = stringDate + " " + stringTime

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
  {
    accessorKey: "student",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student Name" />
    ),
    cell: ({ row }) => {
      const studentStruct = {
        value: "",
        label: "",
        icon: User,
      }

      const student = studentStruct

      student.value = row.getValue("student")
      student.label = row.getValue("student")

      if (!student) {
        return null
      }

      return (
        <div className="flex  items-center">
          {student.icon && (
            <student.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{student.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
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
]
