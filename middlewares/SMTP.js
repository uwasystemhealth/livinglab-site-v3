import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.SMTP_AUTH_USER, // generated ethereal user
		pass: process.env.SMTP_AUTH_PASS, // generated ethereal password
	},
});
