import nodemailer from 'nodemailer';

//get email and password from .env file
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const { name, userEmail, phone, message, subject } = await request.json();

  const finalSubject = subject
    ? `New query for ${subject} from ${name}`
    : `New query from ${name}`;

  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email,
    to: 'siddhant.v@angle.services',
    subject: `${finalSubject}`,
    text: `Name: ${name}`,
    html: `
      <h1>New query from ${name}</h1>
      <p>Email: ${userEmail}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending email', { status: 500 });
  }
}
