import { NextResponse } from "next/server";
import JSZip from "jszip";

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file) return NextResponse.json({ error: "No file uploaded" });

  const zip = new JSZip();
  const content = await zip.loadAsync(Buffer.from(await file.arrayBuffer()));

  const result: any = {};

  for (const [filename, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const text = await entry.async("string");
    result[filename] = text.split("\n").filter(Boolean);
  }

  return NextResponse.json(result);
}
