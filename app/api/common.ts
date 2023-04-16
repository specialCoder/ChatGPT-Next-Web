import { NextRequest } from "next/server";

const OPENAI_URL = "api.openai.com";
const DEFAULT_PROTOCOL = "https";
const PROTOCOL = process.env.PROTOCOL ?? DEFAULT_PROTOCOL;
const BASE_URL = process.env.BASE_URL ?? OPENAI_URL;

export async function requestOpenai(req: NextRequest) {
  // const apiKey = req.headers.get("token");
  const apiKey = process.env.OPENAI_API_KEY;
  // const openaiPath = req.headers.get("path");

  // const openaiUrl = `${PROTOCOL}://${BASE_URL}/${openaiPath}`;
  const openaiUrl = "https://api.openai.com/v1/chat/completions";

  return fetch(openaiUrl, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    method: req.method,
    body: req.body,
  });
}
