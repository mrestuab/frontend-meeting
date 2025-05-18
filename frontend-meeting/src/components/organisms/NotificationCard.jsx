// import { Card, CardBody, Typography } from "@material-tailwind/react";

// export default function NotificationCard({ notif, detail, isActive, onClick }) {
//   return (
//     <Card
//       className={`mb-3 shadow-sm cursor-pointer hover:bg-blue-gray-50 transition-all ${
//         isActive ? "bg-blue-gray-50" : ""
//       }`}
//       onClick={onClick}
//     >
//       <CardBody>
//         {!detail ? (
//           <>
//             <p className="font-medium text-blue-700">{notif.message}</p>
//             <p className="text-sm text-gray-500">
//               {new Date(notif.created_at).toLocaleString("id-ID")}
//             </p>
//           </>
//         ) : (
//           <>
//             <Typography variant="h5" className="mb-2">
//               {detail.title}
//             </Typography>
//             <p className="text-sm mb-1 text-gray-700">
//               <strong>Status:</strong> {detail.status}
//             </p>
//             <p className="text-sm mb-1 text-gray-700">
//               <strong>Jadwal:</strong>{" "}
//               {new Date(detail.schedule_id).toLocaleString("id-ID")}
//             </p>
//             <p className="text-sm text-gray-700">
//               <strong>Deskripsi:</strong> {detail.description}
//             </p>
//           </>
//         )}
//       </CardBody>
//     </Card>
//   );
// }

import { Card, CardBody, Typography, Chip } from "@material-tailwind/react";

const statusColor = {
  scheduled: "blue",
  done: "green",
  cancelled: "red",
};

export default function NotificationCard({ notif, detail, isActive, onClick }) {
  return (
    <Card
      className={`mb-3 cursor-pointer shadow-sm transition-all ${
        isActive ? "bg-blue-gray-50" : "hover:bg-blue-gray-50"
      }`}
      onClick={onClick}
    >
      <CardBody>
        {!detail ? (
          <>
            <Typography className="font-medium text-blue-700">
              {notif.message}
            </Typography>
            <p className="text-sm text-gray-500">
              {new Date(notif.created_at).toLocaleString("id-ID")}
            </p>
          </>
        ) : (
          <>
            <Typography variant="h5" className="mb-2">
              {detail.title}
            </Typography>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <span>
                <strong>Status:</strong>{" "}
                <Chip
                  value={detail.status}
                  color={statusColor[detail.status] || "gray"}
                  size="sm"
                  className="inline-block"
                />
              </span>
              <span>
                <strong>Jadwal:</strong>{" "}
                {new Date(detail.schedule_id).toLocaleString("id-ID")}
              </span>
              <span>
                <strong>Deskripsi:</strong> {detail.description}
              </span>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}
