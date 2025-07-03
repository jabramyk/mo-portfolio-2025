import { Html, Head, Body, Container, Section, Text, Heading, Hr, Link } from "@react-email/components"

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Submission</Heading>

            <Text style={text}>You've received a new message through your portfolio contact form.</Text>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Text style={label}>From:</Text>
              <Text style={value}>{name}</Text>

              <Text style={label}>Email:</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Text>

              <Text style={label}>Message:</Text>
              <Text style={messageText}>{message}</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footer}>
              This email was sent from your portfolio contact form at{" "}
              <Link href="https://mohameddatt.com" style={link}>
                mohameddatt.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const section = {
  padding: "0 48px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0 20px",
  padding: "0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const infoSection = {
  margin: "32px 0",
}

const label = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "16px 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const value = {
  color: "#333",
  fontSize: "16px",
  margin: "0 0 16px",
}

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
  padding: "16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "6px",
  border: "1px solid #e9ecef",
}

const link = {
  color: "#22c55e",
  textDecoration: "underline",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "16px 0 0",
}

export default ContactEmail
