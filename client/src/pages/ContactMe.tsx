import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RAGChatbotModal from "../modals/RAGChatbotModal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { backendDomain } from "../lib/domainName";

export default function ContactMe() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "4. Contact Me - Tejas Raman";
    }, []);
    const [modalOpen, setModalOpen] = useState(false);

    const contactSchema = z.object({
        name: z
            .string()
            .min(2, "Please enter at least 2 characters")
            .max(100, "Name is too long"),
        email: z
            .string()
            .email("Please enter a valid email address"),
        message: z
            .string()
            .min(10, "Message should be at least 10 characters")
            .max(2000, "Message is too long"),
    });

    type ContactFormValues = z.infer<typeof contactSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        mode: "onTouched",
    });

    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data: ContactFormValues) => {
        try {
            const url = `${backendDomain}/form`;
            const response = await axios.post(url, data);
            console.log("Contact form submitted:", data);
            console.log("Server response:", response.data);
            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error("Failed to submit contact form:", error);
        } finally {
            setTimeout(() => setSubmitSuccess(false), 1200);
        }
    };
    return (
        <>
            {/* Horizontal Lines Y Lines*/}
            <div className="absolute inset-0 border-dashed border-x-2 border-primary mx-12 pointer-events-none"></div>
            <div className="w-screen h-screen bg-background flex flex-col cursor-main">
                {/* l-Nothing | Center-NavBar | R-Nothing */}
                <div className=" flex justify-center gap-12">
                    <button onClick={() => navigate("/")} className="cursor-pointer hover:underline my-3 font-heading text-accent">
                        Home
                    </button>
                    <button onClick={() => navigate("/Projects")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        Projects
                    </button>
                    <button onClick={() => setModalOpen(true)} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                       Jarvis
                    </button>
                    {/* <button onClick={() => navigate("/About")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        About
                    </button> */}
                    <button onClick={() => navigate("/Contact")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        Contact Me
                    </button>
                </div>
                {/* l-Nothing | Center-Main Content | R-Nothing */}
                <div className="flex-1 flex border-y-2 border-dashed border-primary overflow-hidden">
                    {/* Main Content */}
                    <div className="flex-1 mx-12 flex justify-center items-center">
                        <div className="flex gap-24 px-24 items-start mt-8 pb-12 max-w-330">
                            <div className="flex-5">
                                <p className="font-heading text-2xl ml-[-6px] text-secondary">Thanks for visiting<span className="ml-1 text-secondary animate-blink">_</span></p>
                                <p className="mt-3 font-primary text-xl">Before you go, checkout my other links or see more projects on my Github profile. If you want to reach out to work on a project or have a simple chat, you can fill out the contact form or email me directly at tejassraman@gmail.com and I’ll try to get back within 24hrs. Thank you</p>
                                <p className="font-heading text-2xl text-secondary mt-16">Connect With me</p>
                                <div className="flex mt-3 gap-4">
                                    <a
                                        href="https://github.com/traman2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-[#f5f3f3] shadow-md hover:text-white hover:bg-secondary/80 transition-colors cursor-pointer px-4 py-1 rounded-xl font-primary text-lg flex items-center gap-1.5"
                                    >
                                        <img src="/icons/connect/github.svg" alt="GitHub" className="w-5 h-5 transition-[filter] group-hover:invert" />
                                        <p>Github</p>
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/tejas-raman-1a892b255/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-[#f5f3f3] shadow-md hover:text-white hover:bg-secondary/80 transition-colors cursor-pointer px-4 py-1 rounded-xl font-primary text-lg flex items-center gap-1.5"
                                    >
                                        <img src="/icons/connect/linkedin.svg" alt="LinkedIn" className="w-5 h-5 transition-[filter] group-hover:invert" />
                                        <p>LinkedIn</p>
                                    </a>
                                    <a
                                        href="mailto:tejassraman@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group bg-[#f5f3f3] shadow-md hover:text-white hover:bg-secondary/80 transition-colors cursor-pointer px-4 py-1 rounded-xl font-primary text-lg flex items-center gap-1.5"
                                    >
                                        <img src="/icons/connect/mail.svg" alt="Email" className="w-5 h-5 transition-[filter]" />
                                        <p>Email</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-4 min-w-100 max-w-200">
                                <p className="font-heading text-2xl text-secondary">Contact Me</p>
                                <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="name" className="font-primary text-[#907171] text-xl">Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={`mt-1 block w-full rounded-xl bg-[#f5f3f3] px-4 py-2 font-primary text-[20px] focus:outline-none focus:ring-2 ${errors.name ? "ring-red-500" : "ring-primary/50 focus:ring-primary"}`}
                                                placeholder="Your full name"
                                                {...register("name")}
                                                aria-invalid={!!errors.name}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                            />
                                            {errors.name && (
                                                <p id="name-error" className="mt-1 text-red-600 font-footer text-sm">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
                                            <label htmlFor="email" className="font-primary text-[#907171] text-xl">Email</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className={`mt-1 block w-full rounded-xl bg-[#f5f3f3] px-4 py-2 font-primary text-[20px] focus:outline-none focus:ring-2 ${errors.email ? "ring-red-500" : "ring-primary/50 focus:ring-primary"}`}
                                                placeholder="you@example.com"
                                                {...register("email")}
                                                aria-invalid={!!errors.email}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                            />
                                            {errors.email && (
                                                <p id="email-error" className="mt-1 text-red-600 font-footer text-sm">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="font-primary text-[#907171] text-xl">Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className={`mt-1 block w-full rounded-xl bg-[#f5f3f3] px-4 py-2 font-primary text-[20px] focus:outline-none focus:ring-2 resize-none ${errors.message ? "ring-red-500" : "ring-primary/50 focus:ring-primary"}`}
                                            placeholder="How can I help?"
                                            {...register("message")}
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                        />
                                        {errors.message && (
                                            <p id="message-error" className="mt-1 text-red-600 font-footer text-sm">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`px-5 py-1 rounded-xl font-primary text-[20px] shadow-md transition-colors ${
                                                submitSuccess
                                                    ? "bg-green-600 text-white"
                                                    : "bg-[#f5f3f3] text-accent hover:bg-secondary hover:text-white"
                                            } ${isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                                        >
                                            {isSubmitting ? "Submitting..." : submitSuccess ? "Submitted" : "Submit"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* l-Nothing | Center-Footer | R-Nothing */}
                <div className="flex justify-center items-center h-12">
                    <p className="font-footer">Tejas Raman. Copyright 2025</p>
                </div>
            </div>
            {modalOpen && (
                <RAGChatbotModal onClose={() => setModalOpen(false)} />
            )}
        </>
    )
}