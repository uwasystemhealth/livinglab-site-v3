import nodemailer from 'nodemailer';
import { transporter } from 'middlewares/SMTP.js';
import { validateEmail, validatePhone, validateWebsite, notEmpty } from 'helpers/validation';

export default async (req, res) => {
	if (req.method === 'POST') {
		try {
			// FIELD VALIDATION
			const fields = ['Business Mailing Address', 'Business Name', 'Business Website', 'Contact Email', 'Contact Name', 'Contact Phone'];

			const validateThrowError = (value, validator, error) => {
				if (!validator(value) && (!!value || validator == notEmpty)) {
					throw error;
				}
			};

			fields.forEach((field) => {
				if (!req.body.hasOwnProperty(field)) {
					throw `Field ${field} is not present`;
				}
				const value = req.body[field];
				switch (field) {
					case 'Contact Email':
						validateThrowError(value, notEmpty, 'Required Field');
						validateThrowError(value, validateEmail, 'Invalid Email');
						break;
					case 'Contact Phone':
						validateThrowError(value, notEmpty, 'Required Field');
						validateThrowError(value, validatePhone, 'Invalid Phone Number');
						break;
					case 'Business Website':
						validateThrowError(value, validateWebsite, 'Invalid Website');
						break;
					default:
						validateThrowError(value, notEmpty, `Required Field ${field}`);
				}
			});

			// Creation of the Message
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
			res.end(JSON.stringify({ message: err }));
		}
	} else {
		// Handle any other HTTP method
		res.statusCode = 400;
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({ message: 'ONLY POST IS SUPPORTED' }));
	}
};
