import nodemailer from 'nodemailer';

//get email and password from .env file
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request) {
  const { name } = await request.json();
  const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
      user: email,
      pass: pass,
    },
  });

  const mailOptions = {
    from: email, // Replace with your email address
    to: 'siddhant.v@angle.services', // Replace with the recipient email address
    subject: 'New Form Submission',
    text: `Name: ${name}`,
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
