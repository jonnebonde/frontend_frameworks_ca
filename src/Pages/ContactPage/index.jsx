import ContactForm from "../../Components/ContactForm";
import { useEffect } from "react";

function ContactPage() {
  useEffect(() => {
    document.title = "WeGotIt | Contact Us";
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
