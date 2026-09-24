import { NextResponse } from 'next/server';
import { SKILL_CATEGORIES } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Skill categories retrieved successfully',
    data: SKILL_CATEGORIES,
    timestamp: new Date().toISOString(),
  });
}
