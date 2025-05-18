import { Button, Chip } from "@material-tailwind/react";

const statusColor = {
  scheduled: "blue",
  done: "green",
  cancelled: "red",
};

export default function MeetingTable({ data, onDelete, onEdit }) {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-blue-gray-50 text-blue-gray-700 uppercase text-xs">
          <tr>
            <th className="px-6 py-4">Judul</th>
            <th className="px-6 py-4">Tanggal</th>
            <th className="px-6 py-4">Deskripsi</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Tanggal Dibuat</th>
            <th className="px-6 py-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((m, i) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{m.title}</td>
              <td className="px-6 py-4">
                {new Date(m.schedule_id).toLocaleString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="px-6 py-4">{m.description}</td>
              <td className="px-6 py-4">
                <Chip
                  size="sm"
                  color={statusColor[m.status] || "gray"}
                  value={m.status}
                  className="capitalize"
                />
              </td>
              <td className="px-6 py-4">
                {new Date(m.created_at).toLocaleString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="px-6 py-4 flex gap-2">
                <Button size="sm" color="blue" onClick={() => onEdit(m.id)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  color="red"
                  onClick={() => {
                    if (confirm("Yakin hapus meeting ini?")) onDelete(m.id);
                  }}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}