import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import MeetingDetail from "./pages/MeetingDetail";
import TambahMeeting from "./pages/AdminAdd";
import EditMeeting from "./pages/AdminEdit";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/meetings/:id" element={<MeetingDetail />} />
      <Route path="/admin/tambah" element={<TambahMeeting />} />
      <Route path="/admin/edit/:id" element={<EditMeeting />} />

      <Route path="/user" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
