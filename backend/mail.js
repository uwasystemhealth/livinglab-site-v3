import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: true, // true for 465, false for other ports
	auth: {
		type: 'OAuth2',
		user: process.env.GOOGLE_USER,
		clientId:process.env.GOOGLE_OAUTH_CLIENT_ID,
		clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
		refreshToken:process.env.GMAIL_REFRESH_TOKEN,
		accessToken: process.env.GMAIL_ACCESS_TOKEN
	},
});
