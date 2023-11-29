import { NextResponse } from "next/server";
import { products } from "../products";

export async function GET(req: Request) {
  let currentProducts = products;

  return NextResponse.json(currentProducts);
}
