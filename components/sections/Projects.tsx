import { CVData } from "@/data/types";
import cvData from "@/data/cv.json";
import styles from "./Projects.module.css";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const { academic_projects } = cvData as unknown as CVData;

    // Flatten the project list for a grid view
    // Focusing on Category 2 (AWS ML) as seemingly more impactful, or mix.
    // Let's grab all single projects from categories.

    const allProjects = academic_projects.flatMap(item => {
        if ("category" in item) {
            return item.projects.map(p => ({
                ...p,
                tags: item.technologies
            }));
        } else {
            return [{
                name: item.name,
                description: item.description,
                link: undefined,
                tags: item.technologies
            }];
        }
    });

    // Limit to 4 for the landing page
    const displayProjects = allProjects.slice(0, 4);

    return (
        <section id="projects" className="container section">
            <h2 className="heading-xl">Projects</h2>

            <div className={styles.grid}>
                {displayProjects.map((proj, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.cardTitle}>{proj.name}</h3>
                        <p className={styles.cardDesc}>{proj.description}</p>
                        <div className={styles.tags}>
                            {proj.tags?.slice(0, 3).map(t => (
                                <span key={t} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                        {proj.link && (
                            <Link
                                href={proj.link}
                                target="_blank"
                                className={styles.link}
                            >
                                View Code <ExternalLink size={16} />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
