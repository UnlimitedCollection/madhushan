import Link from "next/link";
import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import { cn } from "@/lib/utils";

export default function Footer() {
    const { contact, name } = cvData as unknown as CVData;
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={cn("container", styles.inner)}>
                <div className={styles.left}>
                    <p className={styles.copyright}>
                        © {year} {name}. All rights reserved.
                    </p>
                </div>

                <div className={styles.socials}>
                    {contact.github && (
                        <Link
                            href={`https://${contact.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={styles.socialLink}
                        >
                            <Github size={20} />
                        </Link>
                    )}
                    {contact.linkedin && (
                        <Link
                            href={`https://${contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className={styles.socialLink}
                        >
                            <Linkedin size={20} />
                        </Link>
                    )}
                    {contact.email && (
                        <Link
                            href={`mailto:${contact.email}`}
                            aria-label="Email"
                            className={styles.socialLink}
                        >
                            <Mail size={20} />
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    );
}
