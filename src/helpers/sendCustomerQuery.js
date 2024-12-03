// import nodemailer from "nodemailer";
import CustomerQueryEmail from "@/emails/CustomerQuery";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";
import { Resend } from "resend";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: process.env.NODEMAILER_GUSERNAME,
//     pass: process.env.NODEMAILER_GPASS,
//   },
// });

// async..await is not allowed in global scope, must use a wrapper
export async function sendCustomerQueryEmail({
  customerName,
  customerEmail,
  customerPhone,
  description,
}) {
  // send mail with defined transport object
  try {
    // const emailHtml = render(
    //   <CustomerQueryEmail
    //     username={username}
    //     customerName={customerName}
    //     customerEmail={customerEmail}
    //     customerPhone={customerPhone}
    //     description={description}
    //   />
    // );

    //NODEMAILER

    // const info = transporter.sendMail({
    //   from: `${username} from Crimsoune <info@mysterymessage.com>`, // sender address
    //   to: email, // list of receivers
    //   subject: `New Customer Inquiry from ${customerName}`, // Subject line
    //   // text: "Hello world?", // plain text body
    //   html: emailHtml, // html body
    // });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    //   <p>
    //   <span style="font-weight: bold; color: #333;">Received By:</span>
    //   <span style="color: #555; display: block; margin-bottom: 10px;" id="username"></span>
    // </p>
    // SENDGRID
    //   const msg = {
    //     to: [users[0].email, users[1].email], // Change to your recipient
    //     from: "info.crimsoune@gmail.com", // Change to your verified sender
    //     subject: `New Customer Inquiry From ${customerName}`,
    //     //   text: "and easy to do anywhere, even with Node.js",
    //     html: ` <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px; width: 100%; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
    //   <div style="background-color: #9b7eb9; color: #fff; padding: 10px 20px; border-radius: 8px 8px 0 0; text-align: center; font-size: 24px; font-weight: bold;">
    //     New Customer Inquiry
    //   </div>
    //   <div style="padding: 20px; background-color: #fff; border-radius: 0 0 8px 8px;">
    //     <p>
    //       <span style="font-weight: bold; color: #333;">Customer Name:</span>
    //       <span style="color: #555; display: block; margin-bottom: 10px;" id="customerName">${customerName}</span>
    //     </p>
    //     <p>
    //       <span style="font-weight: bold; color: #333;">Customer Email:</span>
    //       <span style="color: #555; display: block; margin-bottom: 10px;" id="customerEmail">${customerEmail}</span>
    //     </p>
    //     <p>
    //       <span style="font-weight: bold; color: #333;">Customer Phone:</span>
    //       <span style="color: #555; display: block; margin-bottom: 10px;" id="customerPhone">${customerPhone}</span>
    //     </p>
    //     <p>
    //       <span style="font-weight: bold; color: #333;">Description:</span>
    //       <br />
    //       <span style="color: #555; display: block; margin-bottom: 10px;" id="description">${description}</span>
    //     </p>
    //   </div>
    // </div>`,
    //   };

    //   await sgMail.send(msg);

    //RESEND
    const { data, error } = await resend.emails.send({
      from: "Crimsoune <info@crimsoune.in>",
      to: [
        "abhiclasher152@gmail.com",
        "rishikeshchowdhury08@gmail.com",
        "subhrajeetm3@gmail.com",
      ],
      subject: `New Customer Inquiry From ${customerName}`,
      react: CustomerQueryEmail({
        customerName,
        customerEmail,
        customerPhone,
        description,
      }),
    });

    if (error) {
      return Response.json({ success: false, error });
    }

    return {
      success: true,
      message: "Customer query email sent successfully",
    };
  } catch (error) {
    console.error("Error while sending customer query email ", error);
    return {
      success: false,
      message: error.message,
    };
  }
}
