"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const uploadZip = async () => {
    if (!file) return;
    setLoading(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();

    // Store in localStorage to pass to results page
    localStorage.setItem("reconData", JSON.stringify(data));
    router.push("/results");
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">Recon Visualizer</h1>
      <input
        type="file"
        accept=".zip"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 p-2 border rounded w-80"
      />
      <button
        onClick={uploadZip}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Processing..." : "Upload ZIP"}
      </button>
    </div>
  );
}
