// // pages/api/saveCode.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import { v4 as uuidv4 } from "uuid";
// import fs from "fs";
// import path from "path";

// const filePath = path.join(process.cwd(), "codes.json");

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { code } = req.body;
//     const uniqueId = uuidv4();

//     if (!fs.existsSync(filePath)) {
//       fs.writeFileSync(filePath, JSON.stringify({}));
//     }

//     const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
//     data[uniqueId] = code;
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//     res.status(200).json({ uniqueId });
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }


import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import CodeStorageModel from "@/models/codeStorage";
import dbconnect from "@/lib/dbConnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try{
      const { code } = req.body;
      const uniqueId = uuidv4();
      await dbconnect();
      const newCode = new CodeStorageModel({
        uuid: uniqueId,
        code
      });
      await newCode.save();
      res.status(200).json({ uniqueId });

    }catch(error){
        console.error('Error saving code:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}