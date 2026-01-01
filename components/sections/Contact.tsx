"use client";

import { useState } from "react";
import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import styles from "./Contact.module.css";
import Button from "@/components/ui/Button";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import Link from "next/link";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

export default function Contact() {
    const { contact } = cvData as unknown as CVData;
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <section id="contact" className="container section">
            <FadeIn>
                <h2 className="heading-xl">Get in Touch</h2>
            </FadeIn>

            <StaggerContainer className={styles.grid}>

                {/* Contact Info */}
                <StaggerItem className={styles.info}>
                    <p className={styles.text}>
                        I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className={styles.details}>
                        <a href={`mailto:${contact.email}`} className={styles.detailItem}>
                            <Mail className={styles.icon} />
                            <span>{contact.email}</span>
                        </a>
                        <div className={styles.detailItem}>
                            <Phone className={styles.icon} />
                            <span>{contact.phone}</span>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <h3 className="heading-md">Connect</h3>
                        <div className={styles.socialLinks}>
                            <Link href={`https://${contact.linkedin}`} target="_blank" className={styles.socialLink}>
                                <Linkedin /> LinkedIn
                            </Link>
                            <Link href={`https://${contact.github}`} target="_blank" className={styles.socialLink}>
                                <Github /> GitHub
                            </Link>
                        </div>
                    </div>
                </StaggerItem>

                {/* Form */}
                <StaggerItem>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {formState === "success" ? (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>✓</div>
                                <h3 className="heading-md">Message Sent!</h3>
                                <p>Thanks for reaching out.</p>
                                <button
                                    type="button"
                                    className={styles.resetBtn}
                                    onClick={() => setFormState("idle")}
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input type="email" id="email" required className={styles.input} placeholder="john@example.com" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea id="message" required className={styles.textarea} rows={4} placeholder="Hello..." />
                                </div>

                                <Button type="submit" disabled={formState === "submitting"} className={styles.submitBtn}>
                                    {formState === "submitting" ? "Sending..." : (
                                        <>Send <Send size={18} /></>
                                    )}
                                </Button>
                            </>
                        )}
                    </form>
                </StaggerItem>

            </StaggerContainer>
        </section>
    );
}
