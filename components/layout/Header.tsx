"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Smooth scroll handler
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // height of header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className={styles.header}>
            <div className={cn("container", styles.inner)}>
                <Link href="/" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    RM
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={styles.navLink}
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <div className={cn(styles.mobileNav, isOpen && styles.open)}>
                    <div className={styles.mobileNavContent}>
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={styles.mobileNavLink}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
