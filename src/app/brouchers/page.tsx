// src/app/brochure/page.js
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function Brouchers() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Download Our Brochure
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Get detailed information on our products and services by downloading
          our brochure.
        </p>
      </header>

      {/* Image or Brochure Preview */}
      <div className="w-full max-w-lg mb-6">
        <Image
          src="/images/brochure-preview.jpg" // Replace with your preview image in public/images
          alt="Brochure Preview"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Download Button */}
      <Link href="/brochure.pdf" target="_blank" download>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PictureAsPdfIcon />}
        >
          Download Brochure
        </Button>
      </Link>
    </main>
  );
}
