"use server"

import { Resend } from "resend"
import { ContactEmail } from "@/components/emails/contact-email"
import { ContactConfirmation } from "@/components/emails/contact-confirmation"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactFormWithConfirmation(prevState: any, formData: FormData) {
  console.log("📧 Contact Form: Submission received")

  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    console.log("📧 Contact Form: Data extracted:", {
      name: name?.toString(),
      email: email?.toString(),
      messageLength: message?.toString()?.length,
    })

    // Basic validation
    if (!name || !email || !message) {
      console.error("❌ Contact Form: Missing required fields")
      return {
        success: false,
        error: "All fields are required",
      }
    }

    const nameStr = name.toString().trim()
    const emailStr = email.toString().trim()
    const messageStr = message.toString().trim()

    if (!nameStr || !emailStr || !messageStr) {
      console.error("❌ Contact Form: Empty fields after trimming")
      return {
        success: false,
        error: "All fields are required",
      }
    }

    if (!emailStr.includes("@")) {
      console.error("❌ Contact Form: Invalid email format")
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ Contact Form: RESEND_API_KEY not configured")
      return {
        success: false,
        error: "Email service is not configured. Please try again later.",
      }
    }

    console.log("📧 Contact Form: Sending emails via Resend...")

    // Send notification email to Mohamed
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: "Mohamed Datt <contact@mohameddatt.com>",
      to: ["d.mohamed1504@gmail.com"],
      replyTo: emailStr,
      subject: `New Portfolio Contact: ${nameStr}`,
      react: ContactEmail({
        name: nameStr,
        email: emailStr,
        message: messageStr,
      }),
    })

    if (notificationError) {
      console.error("❌ Contact Form: Notification email error:", notificationError)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    // Send confirmation email to user
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: "Mohamed Datt <onboarding@resend.dev>",
      to: [emailStr],
      subject: "Thanks for reaching out!",
      react: ContactConfirmation({
        name: nameStr,
      }),
    })

    if (confirmationError) {
      console.warn("⚠️ Contact Form: Confirmation email failed (but notification sent):", confirmationError)
      // Don't fail the whole process if confirmation email fails
    }

    console.log("✅ Contact Form: Emails sent successfully:", {
      notification: notificationData,
      confirmation: confirmationData,
    })

    return {
      success: true,
      message: `Thanks ${nameStr}! Your message has been sent to Mohamed. He'll get back to you soon!`,
    }
  } catch (error) {
    console.error("💥 Contact Form Error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
