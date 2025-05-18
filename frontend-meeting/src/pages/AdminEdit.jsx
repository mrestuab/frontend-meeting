// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { getMeetingById, updateMeeting } from "../services/api";
// import MeetingForm from "../components/molecules/MeetingForm";
// import { Typography } from "@material-tailwind/react";

// export default function EditMeeting() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [meeting, setMeeting] = useState(null);

//   useEffect(() => {
//     getMeetingById(id)
//       .then((res) => setMeeting(res.data))
//       .catch((err) => {
//         console.error(err);
//         alert("Meeting tidak ditemukan");
//       });
//   }, [id]);

//   const handleUpdate = async (data) => {
//     try {
//       await updateMeeting(id, data);
//       alert("Berhasil diupdate!");
//       navigate("/admin");
//     } catch (err) {
//       console.error(err);
//       alert("Gagal update data");
//     }
//   };

//   if (!meeting) return <p className="p-8">Loading...</p>;

//   return (
//     <div className="p-8 max-w-3xl mx-auto">
//       <Typography variant="h4" className="mb-4">Edit Meeting</Typography>
//       <MeetingForm onSubmit={handleUpdate} initialData={meeting} />
//     </div>
//   );
// }

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