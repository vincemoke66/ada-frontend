import { Attendance, columns } from "./components/columns"
import { DataTable } from "./components/data-table"

async function getData(): Promise<Attendance[]> {
  const url = "http://192.168.147.250:8080/api/attendance"

  const response = await fetch(url, { cache: "no-store" })
  const responseData = await response.json()

  const formattedData =
    responseData && responseData.data
      ? responseData.data.map((item: any) => ({
          time: new Date(item.CreatedAt),
          student: item.StudentName,
          section: item.Section,
          course: item.Course,
          room: item.RoomName,
          subject: item.Subject,
        }))
      : []

  console.log(formattedData)

  return formattedData
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
