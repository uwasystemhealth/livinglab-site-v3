import nodemailer from 'nodemailer';
import { transporter } from 'middlewares/SMTP.js';
import { textMessageTemplate, htmlMessageTemplate } from 'middlewares/MailTemplates/download.js';
import path from 'path';
import { validateEmail, stringToLink } from 'helpers/validation.js';

export default async (req, res) => {
	if (req.method === 'POST') {
		try {
			const { 'Contact Email': contactEmail, 'Contact Name': contactName, roadmap } = req.body;

			// VALIDATIONS
			if (!validateEmail(contactEmail)) {
				throw new Error('Invalid Email');
			}
			const filename = `${stringToLink(roadmap)}.pdf`;

			const info = await transporter.sendMail({
				from: '"Living Lab Project" <no-reply@livinglabproj.com>',
				to: contactEmail,
				subject: 'Living Lab Downloadable Content',
				text: textMessageTemplate(contactName),
				html: htmlMessageTemplate(contactName),
				attachments: [
					{
						filename,
						path: path.join(process.cwd(), `/downloadables/${filename}`),
						contentType: 'application/pdf',
					},
				],
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
