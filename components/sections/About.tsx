import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import styles from "./About.module.css";
import { GraduationCap, Award, Code, Users } from "lucide-react";

export default function About() {
    // Extract data to show only key highlights for a one-page feel
    const {
        education,
        certifications,
        core_competencies
    } = cvData as unknown as CVData;

    const topSkills = core_competencies.technical_and_project_management_skills.slice(0, 10);

    return (
        <section id="about" className="container section">
            <h2 className="heading-xl">About Me</h2>

            <div className={styles.grid}>

                {/* Skills */}
                <div className={styles.cardFull}>
                    <div className={styles.headerRow}>
                        <Code className={styles.icon} />
                        <h3 className="heading-md">Top Skills</h3>
                    </div>
                    <div className={styles.tags}>
                        {topSkills.map((skill) => (
                            <span key={skill} className={styles.tag}>{skill}</span>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className={styles.card}>
                    <div className={styles.headerRow}>
                        <GraduationCap className={styles.icon} />
                        <h3 className="heading-md">Education</h3>
                    </div>
                    <div className={styles.educationList}>
                        {education.map((edu, idx) => (
                            <div key={idx} className={styles.eduItem}>
                                <h4 className={styles.eduInst}>{edu.institution}</h4>
                                <p className={styles.eduDegree}>{edu.degree || edu.level}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications (Limited) */}
                <div className={styles.card}>
                    <div className={styles.headerRow}>
                        <Award className={styles.icon} />
                        <h3 className="heading-md">Certifications</h3>
                    </div>
                    <ul className={styles.list}>
                        {certifications.slice(0, 4).map((cert, idx) => (
                            <li key={idx}>{cert.name}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
