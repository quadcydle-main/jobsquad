import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_PBUjbK9r_WxWYuwtHGBVzuXWwTAzywnAz');

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await resend.emails.send({
        from: 'dhruvagrawat9@gmail.com',
        to: 'dhruvagrawat999@gmail.com',
        subject: 'New Contact Form Submission',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      });

      res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
