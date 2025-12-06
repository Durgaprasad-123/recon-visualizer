"use client";
import { useState } from "react";

interface FileTabsProps {
  files: string[];
  selected: string;
  onSelect: (file: string) => void;
}

export default function FileTabs({ files, selected, onSelect }: FileTabsProps) {
  return (
    <div className="flex flex-col space-y-2">
      {files.map((file) => (
        <div
          key={file}
          className={`p-2 rounded cursor-pointer ${selected === file ? "bg-blue-600" : "hover:bg-gray-700"}`}
          onClick={() => onSelect(file)}
        >
          {file}
        </div>
      ))}
    </div>
  );
}
