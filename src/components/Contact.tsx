import { useEffect } from "react";
import ContactForm from "./Contact/ContactForm";
import Information from "./Contact/Information";

function Contact() {
  useEffect(() => {
    document.title = "Pizzify | Contact Us";
  }, []);
  return (
    <>
      <Information />
      <ContactForm />
    </>
  );
}

export default Contact;
