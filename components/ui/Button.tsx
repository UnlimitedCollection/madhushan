import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    href?: string;
    external?: boolean;
}

export default function Button({
    className,
    variant = "primary",
    href,
    external,
    children,
    ...props
}: ButtonProps) {
    const rootClassName = cn(
        styles.btn,
        variant === "primary" ? styles.primary : styles.outline,
        className
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={rootClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={rootClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    );
}
