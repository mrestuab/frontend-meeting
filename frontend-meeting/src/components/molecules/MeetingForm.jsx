import { Input, Textarea, Button, Select, Option } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function MeetingForm({ onSubmit, initialData = {} }) {
  const isEdit = Object.keys(initialData).length > 0;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    schedule_id: "",
    status: "scheduled",
  });

  useEffect(() => {
    if (isEdit) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        schedule_id: initialData.schedule_id || "",
        status: initialData.status || "scheduled",
      });
    }
  }, [initialData, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      created_at: new Date().toISOString(),
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <Input
        label="Judul"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <Textarea
        label="Deskripsi"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <Input
        type="datetime-local"
        name="schedule_id"
        label="Jadwal Meeting"
        value={formData.schedule_id}
        onChange={handleChange}
        required
      />

      <Select
        label="Status Meeting"
        value={formData.status}
        onChange={(val) => setFormData((prev) => ({ ...prev, status: val }))}
        required
      >
        <Option value="scheduled">Belum Dilaksanakan</Option>
        <Option value="done">Sudah Selesai</Option>
        <Option value="cancelled">Dibatalkan</Option>
      </Select>

      <Button type="submit" color="green" fullWidth>
        Simpan
      </Button>
    </form>
  );
}
