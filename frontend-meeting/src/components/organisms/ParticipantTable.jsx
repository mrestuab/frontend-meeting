import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
} from "@material-tailwind/react";

export default function ParticipantTable({ data }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(data);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(data);
    } else {
      const keyword = search.toLowerCase();
      const result = data.filter((p) =>
        p.id.toLowerCase().includes(keyword)
      );
      setFiltered(result);
    }
  }, [search, data]);

  return (
    <Card className="overflow-x-auto shadow-md">
      <CardBody>
        <div className="mb-4">
          <Input
            label="Cari berdasarkan ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="w-full text-sm text-left">
          <thead className="bg-blue-gray-50 text-blue-gray-700">
            <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nama</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Telepon</th>
                <th className="p-4">Instansi</th>
            </tr>
            </thead>
            <tbody>
            {filtered.map((p, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-4">{p.id}</td>
                <td className="p-4">{p.name}</td>
                <td className="p-4">{p.email}</td>
                <td className="p-4 capitalize">{p.role}</td>
                <td className="p-4">{p.phone || "-"}</td>
                <td className="p-4">{p.organization || "-"}</td>
                </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  Tidak ada peserta ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}