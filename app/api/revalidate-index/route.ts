import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
 
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/';
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}


// import { NextResponse } from 'next/server';
 
// export async function GET() {
//   return NextResponse.json({ message: "hello how you doing" });
// }

