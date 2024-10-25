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
    title: "Catalogue",
    description: "An overview of our offerings products.",
    file: "/brochure/DEAL MAGSIL Catalogue.pdf",
  },
  {
    id: 2,
    title: "React Brochure",
    description: "A complete guide to our React-based products and services.",
    file: "/brochure/react.pdf",
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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-900">
          Download Our Brochures
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
          Get detailed information on our products and services by downloading
          our brochures. Stay informed and up-to-date with the latest insights.
        </p>
      </header>

      {/* Brochure Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6">
        {brochures.map((brochure) => (
          <Card
            key={brochure.id}
            className="bg-white shadow-xl rounded-lg transition-transform transform hover:scale-105 duration-300"
          >
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className="text-blue-800 font-bold"
              >
                {brochure.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                className="mt-2 text-gray-600"
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
                  className="bg-blue-700 hover:bg-blue-800 text-white mt-2"
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
