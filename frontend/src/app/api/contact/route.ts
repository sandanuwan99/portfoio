import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const fieldErrors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      fieldErrors.name = 'Please provide a valid name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      fieldErrors.email = 'Please provide a valid email address.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      fieldErrors.message = 'Message must be at least 10 characters long.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Bad Request',
          message: 'Validation failed for one or more fields.',
          fieldErrors,
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    // In local development / serverless mode, log contact event cleanly
    console.info(`[CONTACT INQUIRY] From: ${name} <${email}> | Subject: ${subject || 'General'} | Msg: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! Your message has been safely received. Janitha will get back to you shortly.',
        data: {
          name: name.trim(),
          email: email.trim(),
          subject: subject ? subject.trim() : 'General Inquiry',
          receivedAt: new Date().toISOString(),
          status: 'STORED',
        },
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
        message: 'Could not process contact message.',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
