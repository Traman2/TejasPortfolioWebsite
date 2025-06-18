import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Footer from "../../components/DesktopComponents/Footer";
import axios from "axios";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [solid, setSolid] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const projectHandler = () => {
    navigate("/Project");
  };
  const homeHandler = () => {
    navigate("/");
  };
  const contactHandler = () => {
    navigate("/Contact");
  };

  const onSubmit = async (data: ContactFormData) => {
    axios
      .post(`https://tejas-portfolio-website-2v7v.vercel.app/`, 
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        reset();
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.error("Upload error: ", error);
      })
  };

  return (
    <div
      className=" fixed inset-0 min-h-screen w-full overflow-y-auto bg-[#0F3462] flex flex-col"
      onScroll={(e) => setSolid(e.currentTarget.scrollTop > 120)}
    >
      <nav className="fixed top-0 w-full p-4 z-50 mt-2">
        <div className="max-w-[900px] mx-auto flex flex-row items-center justify-between px-6 space-y-0">
          <div
            className={`flex items-center space-x-2 rounded-2xl px-2 py-2 ${
              solid ? "bg-[#1E6286]/90" : "bg-transparent"
            }`}
          >
            <img
              src="/tdesign--code.svg"
              alt="Logo"
              className="w-[30px] h-[30px]"
            />
            <span
              className={`font-medium text-white text-[18px] ml-1 transition-all duration-300 ease-in-out transform font-(family-name:--font-lalezar) ${
                solid ? "translate-x-0 opacity-100 pt-0.5" : "-translate-x-4 opacity-0"
              }`}
            >
              Tejas Raman
            </span>
          </div>
          <div className="bg-[#1E6286]/90 rounded-[40px] px-3 py-2 mr-3">
            <div className="flex space-x-2 font-medium">
              <button
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]`}
                onClick={() => homeHandler()}
              >
                Home
              </button>
              <button
                className="text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]"
                onClick={() => projectHandler()}
              >
                Project
              </button>
              <button
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px] bg-[#0096C7]`}
                onClick={() => contactHandler()}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="max-w-[800px] w-full px-8">
          <div className="text-center mb-8">
            <h1 className="text-white text-3xl font-bold mb-2">Contact Me</h1>
            <h2 className="text-white text-xl">tejassraman@gmail.com</h2>
          </div>

          <div className="bg-[#1E6286]/80 rounded-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0 ${
                      errors.name ? "border-red-500" : "border-[#0096C7]"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0 ${
                      errors.email ? "border-red-500" : "border-[#0096C7]"
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full px-4 py-3 border-2 rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-0 resize-none ${
                    errors.message ? "border-red-500" : "border-[#0096C7]"
                  }`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#0096C7] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0077A3] transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
