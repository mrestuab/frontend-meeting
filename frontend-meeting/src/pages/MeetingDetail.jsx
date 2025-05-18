import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMeetingById } from "../services/api";

export default function MeetingDetail() {
  const { id } = useParams();
  const [meeting, setMeeting] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMeetingById(id)
      .then((res) => setMeeting(res.data))
      .catch((err) => console.error("Gagal ambil detail:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-8">Loading...</p>;
  if (!meeting) return <p className="p-8">Meeting tidak ditemukan.</p>;

  return (
    <div className="max-w-2xl mx-auto p-8 border shadow-md mt-10 rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Detail Meeting</h1>
      <div className="space-y-3 text-sm text-gray-800">
        <p><strong>ID:</strong> {meeting.id}</p>
        <p><strong>Judul:</strong> {meeting.title}</p>
        <p><strong>Deskripsi:</strong> {meeting.description}</p>
        <p><strong>Kategori (Schedule):</strong> {meeting.schedule_id}</p>
        <p><strong>Status:</strong> {meeting.status}</p>
        <p><strong>Tanggal Dibuat:</strong> {new Date(meeting.created_at).toLocaleString()}</p>
      </div>
    </div>
  );
}
