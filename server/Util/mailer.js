import nodemailer from 'nodemailer';

const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailer1499@gmail.com',
      pass: 'olxc gzke ytcf yhqu', 
    },
  });

  let mailOptions = {
    from: 'mailer1499@gmail.com',
    to,
    subject,
    text,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

export const sendSubscriptionConfirmation = async (email) => {
  const subject = 'Subscription Confirmation';
  const text = `
    Dear Subscriber,

    Thank you for subscribing to our service. We are excited to have you with us!
    Best regards,
    RENU Foundation
  `;

  await sendMail(email, subject, text);
};
