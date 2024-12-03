import CustomerQueryEmail from "@/emails/CustomerQuery";
import { Resend } from "resend";
import { sendCustomerQueryEmail } from "@/helpers/sendCustomerQuery";

export async function POST(req) {
  try {
    const { customerName, customerEmail, customerPhone, description } =
      await req.json();
    // const { data, error } = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: "abhijeetkarmakar150@gmail.com",
    //   subject: "New Customer Inquiry",
    //   react: CustomerQueryEmail({
    //     username,
    //     customerName,
    //     customerEmail,
    //     customerPhone,
    //     description,
    //   }),
    // });

    const emailResponse = await sendCustomerQueryEmail({
      customerName,
      customerEmail,
      customerPhone,
      description,
    });

    if (!emailResponse.success) {
      return Response.json({ error: emailResponse.message }, { status: 500 });
    }

    return Response.json(emailResponse);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
