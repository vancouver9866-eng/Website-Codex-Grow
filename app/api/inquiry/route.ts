import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 5000;

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const recipient = process.env.INQUIRY_RECIPIENT;

  if (!recipient) {
    return NextResponse.json({ error: "Inquiry email is not configured." }, { status: 503 });
  }

  try {
    const body = await request.json();

    if (clean(body.website)) {
      return NextResponse.json({ success: true });
    }

    const fields = {
      name: clean(body.name, 120),
      company: clean(body.company, 160),
      email: clean(body.email, 254),
      phone: clean(body.phone ?? body.whatsapp, 80),
      country: clean(body.country, 120),
      product: clean(body.product ?? body.model, 180),
      quantity: clean(body.quantity, 120),
      message: clean(body.message),
      source: clean(body.source, 500),
    };

    if (!fields.name || !fields.company || !fields.email || !fields.country || !fields.message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const payload = new URLSearchParams({
      ...fields,
      _subject: `New Growcean inquiry: ${fields.company}`,
      _template: "table",
      _replyto: fields.email,
      _captcha: "false",
    });

    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://growcean.com",
        Referer: "https://growcean.com/",
      },
      body: payload,
      cache: "no-store",
    });

    const result = await response.json().catch(() => null);

    const accepted = result?.success === true || result?.success === "true";

    if (!response.ok || !accepted) {
      return NextResponse.json({ error: "The inquiry could not be sent. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "The inquiry could not be sent. Please try again." }, { status: 500 });
  }
}
