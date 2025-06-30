import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SendTo = process.env.CONTACT_EMAIL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 2. Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 3. Auto-reply to user change it to your own email
    await transporter.sendMail({
      from: `"Muhammed Sanjid" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hey 👋</p>
        <p>Thanks for dropping your email! I&apos;ll reach out shortly.</p>
        <p>Regards, Sanjid</p>
      `,
    });

    // 4. Notification to alternate email change it to your own email
    await transporter.sendMail({
      from: `"Hire Me Form" <${process.env.SMTP_USER}>`,
      to: SendTo,
      subject: "New Hire Me Submission",
      text: `New email received from: ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
