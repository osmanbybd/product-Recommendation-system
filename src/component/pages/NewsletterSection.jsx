import { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email address!",
      });
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TAMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: `Thanks for subscribing with ${email}`,
          timer: 1500,
          showConfirmButton: false,
        });
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Subscription failed!",
          text: "Please try again later.",
        });
      });
  };

  return (
    <section className="bg-[#687FE5] rounded-2xl p-10  container  mx-auto my-10 glass-section text-white">
      <h3 className="text-3xl font-semibold mb-4 text-center">
        Subscribe to our Newsletter
      </h3>
      <p className="text-center mb-6">
        Get the latest updates and offers delivered straight to your inbox.
      </p>

      <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-3 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary px-6">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
