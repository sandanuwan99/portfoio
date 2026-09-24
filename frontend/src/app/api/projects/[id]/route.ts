import { NextResponse } from 'next/server';
import { PROJECTS } from '@/lib/data';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id || p.slug === id);

  if (!project) {
    return NextResponse.json(
      {
        success: false,
        error: 'Not Found',
        message: `Project with identifier '${id}' was not found.`,
        timestamp: new Date().toISOString(),
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Project retrieved successfully',
    data: project,
    timestamp: new Date().toISOString(),
  });
}
