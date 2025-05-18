import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Card,
  CardBody,
} from "@material-tailwind/react";

import AdminLayout from "../components/layouts/AdminLayout";
import MeetingTable from "../components/organisms/MeetingTable";
import ParticipantTable from "../components/organisms/ParticipantTable"; // ⬅️ penting
import { getMeetings, getParticipants } from "../services/api"; // ⬅️ penting

export default function AdminDashboard() {
  const [meetings, setMeetings] = useState([]);
  const [participants, setParticipants] = useState([]); // ⬅️ tambahkan
  const [activeTab, setActiveTab] = useState("meetings");
  const navigate = useNavigate();

  const fetchMeetings = () => {
    getMeetings()
      .then((res) => setMeetings(res.data))
      .catch((err) => console.error("Gagal ambil data meeting:", err));
  };

  const fetchParticipants = () => {
    getParticipants()
      .then((res) => setParticipants(res.data))
      .catch((err) => console.error("Gagal ambil data peserta:", err));
  };

  useEffect(() => {
    if (activeTab === "meetings") fetchMeetings();
    if (activeTab === "participants") fetchParticipants();
  }, [activeTab]);

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Typography variant="h4" className="text-blue-700">
            Dashboard Admin
          </Typography>
          <Typography className="text-sm text-gray-600">
            Kelola penjadwalan meeting dan data peserta.
          </Typography>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-6">
          <TabsHeader className="bg-white shadow rounded-lg">
            <Tab value="meetings" onClick={() => setActiveTab("meetings")}>
              Penjadwalan Meeting
            </Tab>
            <Tab value="participants" onClick={() => setActiveTab("participants")}>
              Data Peserta
            </Tab>
          </TabsHeader>
        </Tabs>

        {/* Konten Tab */}
        {activeTab === "meetings" && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button color="green" onClick={() => navigate("/admin/tambah")}>
                + Tambah Meeting
              </Button>
            </div>
            <MeetingTable
              data={meetings}
              onDelete={fetchMeetings}
              onEdit={(id) => navigate(`/admin/edit/${id}`)}
            />
          </div>
        )}

        {activeTab === "participants" && (
          <ParticipantTable data={participants} />
        )}
      </div>
    </AdminLayout>
  );
}