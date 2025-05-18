import { Navbar, Typography } from "@material-tailwind/react";

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar className="bg-white shadow-md px-8 py-3 mb-6">
        <Typography variant="h5" color="blue">
          Dashboard User
        </Typography>
      </Navbar>

      <main className="px-8">{children}</main>
    </div>
  );
}
