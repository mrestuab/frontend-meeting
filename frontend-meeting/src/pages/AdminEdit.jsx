import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import AdminLayout from "../components/layouts/AdminLayout";
import MeetingForm from "../components/molecules/MeetingForm";
import { getMeetingById, updateMeeting } from "../services/api";

export default function AdminEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    getMeetingById(id).then((res) => setInitialData(res.data));
  }, [id]);

  const handleSubmit = async (payload) => {
    await updateMeeting(id, payload);
    navigate("/admin");
  };

  if (!initialData) return <p className="p-8">Loading...</p>;

  return (
    <AdminLayout>
      <Typography variant="h4" className="mb-6">
        Edit Meeting
      </Typography>
      <MeetingForm onSubmit={handleSubmit} initialData={initialData} />
    </AdminLayout>
  );
}