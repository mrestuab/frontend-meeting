import { useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import AdminLayout from "../components/layouts/AdminLayout";
import MeetingForm from "../components/molecules/MeetingForm";
import { createMeeting } from "../services/api";

export default function AdminAdd() {
  const navigate = useNavigate();

  const handleSubmit = async (payload) => {
    await createMeeting(payload);
    navigate("/admin");
  };

  return (
    <AdminLayout>
      <Typography variant="h4" className="mb-6">
        Tambah Meeting
      </Typography>
      <MeetingForm onSubmit={handleSubmit} />
    </AdminLayout>
  );
}