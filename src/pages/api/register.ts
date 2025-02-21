/** @format */

import { signUp } from "@/utils/db/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  try {
    signUp(
      req.body,
      ({ status, message }: { status: boolean; message: string }) => {
        if (status) {
          return res.status(200).json({ status, message });
        }
        return res.status(400).json({ status, message });
      }
    );
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
}
