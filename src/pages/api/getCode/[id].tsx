import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "codes.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id === "string") {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      if (data[id]) {
        res.status(200).json({ code: data[id] });
      } else {
        res.status(404).json({ message: "Code not found" });
      }
    } else {
      res.status(404).json({ message: "File not found" });
    }
  } else {
    res.status(400).json({ message: "Invalid ID" });
  }
}
