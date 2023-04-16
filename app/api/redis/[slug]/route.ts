import { NextRequest, NextResponse } from "next/server";
import redisInstance from "@/app/database/redis";

// redis set
export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const { value, options } = await req.json();

  try {
    const result = await redisInstance.set(slug, value, options);
    return NextResponse.json({
      code: 1,
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      code: 0,
      message: String(error),
    });
  }
}

// redis get
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  try {
    const value = await redisInstance.get(slug);
    return NextResponse.json({
      code: 1,
      data: value,
    });
  } catch (error) {
    return NextResponse.json({
      code: 0,
      message: String(error),
    });
  }
}
