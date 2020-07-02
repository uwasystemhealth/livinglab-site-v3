import nodemailer from 'nodemailer';
import { transporter } from 'middlewares/SMTP.js';

export default async (req, res) => {
	if (req.method === 'POST') {
		try {
			const htmlMessage = Object.entries(req.body).reduce(
				(previousValue, [currentKey, currentValue]) => `${previousValue}<br/><b>${currentKey}</b> : ${currentValue}`,
				''
			);
			const textMessage = Object.entries(req.body).reduce(
				(previousValue, [currentKey, currentValue]) => `${previousValue}\n${currentKey}:${currentValue}`,
				''
			);

			// send mail with defined transport object
			const info = await transporter.sendMail({
				from: '"Living Lab Project" <no-reply@livinglabproj.com>',
				to: process.env.MAIL_RECEIVING_ACCOUNT,
				subject: 'Living Lab Contact Page',
				text: textMessage,
				html: htmlMessage,
			});

			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ message: 'success' }));
		} catch (err) {
			console.log(err);
			res.statusCode = 400;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ message: 'wrong or incomplete parameters' }));
		}
	} else {
		// Handle any other HTTP method
		res.statusCode = 400;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ message: 'ONLY POST IS SUPPORTED' }));
	}
};
