import { NextResponse } from "next/server";

import { sendContactEmail, validateContactPayload } from "@/lib/contact-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateContactPayload(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    await sendContactEmail(validation.data);

    return NextResponse.json({
      message: "Thank you, your message has been sent.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your message right now. Please try again later or email us directly.",
      },
      { status: 500 }
    );
  }
}
