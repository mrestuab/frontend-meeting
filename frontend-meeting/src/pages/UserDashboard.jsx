import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import axios from "axios";
import UserLayout from "../components/layouts/UserLayout";
import NotificationCard from "../components/organisms/NotificationCard";

export default function UserDashboard() {
  const [notifications, setNotifications] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get("http://localhost:8088/api/notifications");
      setNotifications(res.data.reverse());
    } catch (err) {
      console.error("Gagal ambil notifikasi:", err);
    }
  };

  const fetchMeetingDetail = async (meetingId) => {
    if (activeId === meetingId) {
      setActiveId(null);
      setSelectedDetail(null);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8088/api/meetings/${meetingId}`);
      setSelectedDetail(res.data);
      setActiveId(meetingId);
    } catch (err) {
      console.error("Gagal ambil detail meeting:", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <UserLayout>
      <Typography variant="h4" color="blue-gray" className="mb-6">
        Notifikasi Meeting
      </Typography>

      {notifications.length === 0 ? (
        <p>Belum ada notifikasi.</p>
      ) : (
        notifications.map((n, i) => (
          <NotificationCard
            key={i}
            notif={n}
            isActive={activeId === n.meeting_id}
            detail={activeId === n.meeting_id ? selectedDetail : null}
            onClick={() => fetchMeetingDetail(n.meeting_id)}
          />
        ))
      )}
    </UserLayout>
  );
}
