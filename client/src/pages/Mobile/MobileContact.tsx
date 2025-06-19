import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MobileFooter from "../../components/MobileComponents/MobileFooter";
import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import axios from "axios";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function MobileContact() {
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    document.title = "Home - Tejas";
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSending(true);
    axios
      .post(`https://tejas-portfolio-website-2v7v.vercel.app/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setSuccess(true);
        setSending(false);
        reset();
        setTimeout(() => setSuccess(false), 5000);
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.error("Upload error: ", error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col">
      <MobileNavbar />

      <div className="flex-1 px-6 py-8 mt-20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-(family-name:--font-jaro) text-white mb-2">
            Contact Me
          </h1>
          <h2 className="text-white text-xl font-(family-name:--font-lalezar)">
            tejassraman@gmail.com
          </h2>
        </div>

        {success && (
          <div className="bg-[#6d6c9e] border border-green-400 text-[#61be3b] px-4 py-3 rounded-lg mb-4 text-center font-bold">
            Message sent successfully 🎉
          </div>
        )}

        {sending && (
          <div className="bg-[#6d6c9e] border border-gray-400 text-[#b0faff] px-4 py-3 rounded-lg mb-4 text-center font-bold">
            Message Uploading...
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="bg-[#1E6286] bg-opacity-80 rounded-lg p-6 space-y-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-transparent border-2 border-[#0096C7] rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white transition-colors"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-transparent border-2 border-[#0096C7] rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                {...register("message")}
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 bg-transparent border-2 border-[#0096C7] rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0096C7] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0077A3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      <MobileFooter />
    </div>
  );
}
