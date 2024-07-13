// src/actions/subscribe.js
'use server';

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribe(formData: FormData) {
  const email = formData.get('email')?.toString(); // Cast to string or handle null

  console.log('Newsletter form submitted:', { email });

  if (!email) {
    throw new Error('Missing email address'); // Handle missing email address
  }

  // Send email to your own address
  await resend.emails.send({
    from: 'next@quadcydle.com',
    to: 'dhruvagrawat9@gmail.com', // Replace with your own email address
    subject: 'New subscription!',
    text: `Email: ${email}`,
  });

  // Send email to the user who filled the form
  await resend.emails.send({
    from: 'next@quadcydle.com',
    to: email,
    subject: 'Thank you for subscribing!',
    text: 'Dear user, Thank you for subscribing to our newsletter.',
  });

  // Perform your server-side logic here (e.g., saving to a database)
  return { message: 'Subscription successful!' };
}
