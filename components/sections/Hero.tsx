"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";
import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), { ssr: false });
import { motion } from "framer-motion";

export default function Hero() {
    const { name, headline } = cvData as unknown as CVData;
    const firstName = name.split(" ")[0];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className={styles.hero}>
            <HeroCanvas />
            <div className="container">
                <div className={styles.inner}>
                    <motion.div
                        className={styles.content}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className={styles.badge}>Available for work</motion.div>

                        <h1 className={styles.title}>
                            <motion.span variants={itemVariants} className={styles.greeting}>Hi, I&apos;m {firstName}.</motion.span>
                            <motion.span variants={itemVariants} className={styles.block}>
                                I Engineer <span className={styles.highlight}>Scalable</span> Solutions & Lead Agile Teams.
                            </motion.span>
                        </h1>

                        <motion.p variants={itemVariants} className={styles.summary}>
                            Computer Science Undergraduate blending technical prowess with strategic project management to drive sustainable impact.
                        </motion.p>

                        <motion.div variants={itemVariants} className={styles.actions}>
                            <Button href="/Ramishka_Madhushan.pdf" external variant="primary">
                                <Download size={18} />
                                Download Resume
                            </Button>
                            <Button href="#projects" variant="outline">
                                View Projects
                                <ArrowRight size={18} />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src="/Profile/profile.jpg"
                                alt={firstName}
                                width={400}
                                height={500}
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
