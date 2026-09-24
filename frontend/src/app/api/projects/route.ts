import { NextResponse } from 'next/server';
import { PROJECTS } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featuredOnly = searchParams.get('featured') === 'true';

  const data = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return NextResponse.json({
    success: true,
    message: 'Projects retrieved successfully',
    data,
    timestamp: new Date().toISOString(),
  });
}
