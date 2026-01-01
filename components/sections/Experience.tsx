import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import styles from "./Experience.module.css";
import { Briefcase } from "lucide-react";

export default function Experience() {
    const { professional_experience } = cvData as unknown as CVData;

    // Show only top 3 roles for brevity
    const displayExp = professional_experience.slice(0, 3);

    return (
        <section id="experience" className="container section">
            <h2 className="heading-xl">Experience</h2>

            <div className={styles.timeline}>
                {displayExp.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineLeft}>
                            <span className={styles.date}>{job.dates}</span>
                        </div>
                        <div className={styles.timelineRight}>
                            <h3 className={styles.role}>{job.title}</h3>
                            <div className={styles.companyWrapper}>
                                <span className={styles.company}>{job.company}</span>
                            </div>
                            <ul className={styles.responsibilities}>
                                {job.responsibilities_and_achievements.slice(0, 2).map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
