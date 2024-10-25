// // src/app/brochure/page.js
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@mui/material";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// export default function Brouchers() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">
//           Download Our Brochure
//         </h1>
//         <p className="text-lg text-gray-600 mt-2">
//           Get detailed information on our products and services by downloading
//           our brochure.
//         </p>
//       </header>

//       {/* Download Button */}
//       <Link href="/brochure/react.pdf" target="_blank" download>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<PictureAsPdfIcon />}
//         >
//           Download Brochure
//         </Button>
//       </Link>
//     </main>
//   );
// }

// src/app/brochure/page.js
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const brochures = [
  {
    id: 1,
    title: "React Brochure",
    description: "A complete guide to our React-based products and services.",
    file: "/brochure/react.pdf",
  },
  {
    id: 2,
    title: "Next.js Brochure",
    description: "An overview of our offerings built with Next.js.",
    file: "/brochure/nextjs.pdf",
  },
  {
    id: 3,
    title: "UI/UX Design Brochure",
    description: "Detailed insights into our design process and services.",
    file: "/brochure/design.pdf",
  },
];

export default function Brouchers() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 ">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Download Our Brochures
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Get detailed information on our products and services by downloading
          our brochures.
        </p>
      </header>

      {/* Brochure Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-4">
        {brochures.map((brochure) => (
          <Card key={brochure.id} className="bg-white shadow-lg rounded-lg">
            {/* <Image
              src="/images/brochure-preview.jpg" // Replace with individual preview images if available
              alt={`${brochure.title} Preview`}
              width={500}
              height={300}
              className="rounded-t-lg object-cover"
            /> */}
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className="text-gray-800 font-semibold"
              >
                {brochure.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-2"
              >
                {brochure.description}
              </Typography>
            </CardContent>
            <CardActions className="p-4 pt-0">
              <Link href={brochure.file} target="_blank" download>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PictureAsPdfIcon />}
                  className="mt-2"
                >
                  Download
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </main>
  );
}
