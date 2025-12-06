"use client";
import { useState, useEffect } from "react";

export default function ResultsPage() {
  const [data, setData] = useState<any>({});
  const [selectedFile, setSelectedFile] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("reconData");
    if (stored) {
      const json = JSON.parse(stored);
      setData(json);
      setSelectedFile(Object.keys(json)[0]);
    }
  }, []);

  if (!Object.keys(data).length) return <p className="p-10">No data found.</p>;

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/4 border-r p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-4">Files</h2>
        {Object.keys(data).map((file) => (
          <div
            key={file}
            className={`p-2 rounded cursor-pointer mb-2 ${selectedFile === file ? "bg-blue-600" : "hover:bg-gray-700"}`}
            onClick={() => setSelectedFile(file)}
          >
            {file}
          </div>
        ))}
      </aside>

      <main className="w-3/4 p-6 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4">{selectedFile}</h1>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 mb-4 w-full rounded border"
          onChange={(e) => setFilter(e.target.value)}
        />

        <ul className="overflow-auto max-h-[70vh]">
          {data[selectedFile]?.map((line: string, i: number) => (
            <li key={i} className="border-b border-gray-700 py-1">
              {line}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
