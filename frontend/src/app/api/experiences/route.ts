import { NextResponse } from 'next/server';
import { EXPERIENCES } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Experiences retrieved successfully',
    data: EXPERIENCES,
    timestamp: new Date().toISOString(),
  });
}
