"use client";
import { useState } from "react";

interface DomainTableProps {
  domains: string[];
}

export default function DomainTable({ domains }: DomainTableProps) {
  const [search, setSearch] = useState("");

  const filtered = domains.filter((d) => d.toLowerCase().includes(search.toLowerCase()));

  const downloadTXT = () => {
    const blob = new Blob([filtered.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "domains.txt";
    a.click();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 mb-4 w-full rounded border border-gray-700 bg-gray-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={downloadTXT}
        className="mb-4 bg-green-600 px-4 py-2 rounded hover:bg-green-700"
      >
        Export TXT
      </button>

      <ul className="overflow-auto max-h-[60vh] border border-gray-700 rounded p-2">
        {filtered.map((d, i) => (
          <li key={i} className="border-b border-gray-700 py-1">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
