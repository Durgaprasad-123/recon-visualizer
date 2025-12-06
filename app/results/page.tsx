"use client";
import { useState, useEffect } from "react";
import FileTabs from "../../components/FileTabs";
import DomainTable from "../../components/DomainTable";

export default function ResultsPage() {
  const [data, setData] = useState<any>({});
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("reconData");
    if (stored) {
      const json = JSON.parse(stored);
      setData(json);
      setSelectedFile(Object.keys(json)[0]);
    }
  }, []);

  if (!Object.keys(data).length) return <p className="p-10">No data found. Please upload a ZIP first.</p>;

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/4 p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-4">Files</h2>
        <FileTabs files={Object.keys(data)} selected={selectedFile} onSelect={setSelectedFile} />
      </aside>

      <main className="w-3/4 p-6 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold mb-4">{selectedFile}</h1>
        <DomainTable domains={data[selectedFile]} />
      </main>
    </div>
  );
}
