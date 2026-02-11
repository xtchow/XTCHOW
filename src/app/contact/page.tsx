import { CalEmbed } from "@/components/booking/CalEmbed";
import "./contact.scss";

export const metadata = {
  title: "Contact | Sarah Chow",
  description: "Book a meeting to discuss your project",
};

export default function ContactPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "your-username/30min";

  return (
    <main className="contact-page">
      <div className="container">
        <header className="contact-page__header">
          <h1>Let&apos;s Talk</h1>
          <p>
            Interested in working together? Book a time that works for you.
          </p>
        </header>

        <div className="contact-page__calendar">
          <CalEmbed calLink={calLink} />
        </div>

        <div className="contact-page__alt">
          <p>
            Prefer email? Reach out at{" "}
            <a href="mailto:sarah@xtchow.com">sarah@xtchow.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}
