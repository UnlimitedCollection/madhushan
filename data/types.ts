export interface Contact {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
}

export interface CoreCompetencies {
    technical_and_project_management_skills: string[];
    soft_skills: string[];
    tools: string[];
}

export interface Education {
    institution: string;
    location: string;
    degree?: string;
    level?: string;
    dates: string;
}

export interface ProfessionalExperience {
    title: string;
    company: string;
    location: string;
    dates: string;
    responsibilities_and_achievements: string[];
    project_name?: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    link?: string;
}

export interface AcademicProjectCategory {
    category: string;
    projects: ProjectItem[];
    technologies: string[];
    program?: string;
}

export interface AcademicProjectSingle {
    name: string;
    type: string;
    description: string;
    technologies: string[];
}

export type AcademicProject = AcademicProjectCategory | AcademicProjectSingle;

export interface VolunteerExperience {
    role: string;
    organization: string;
    location: string;
}

export interface Certification {
    name: string;
    issuer: string;
    verification: string;
}

export interface Referee {
    name: string;
    title: string;
    organization: string;
    email: string;
    phone: string;
}

export interface References {
    statement: string;
    referees: Referee[];
}

export interface CVData {
    name: string;
    headline: string;
    contact: Contact;
    professional_summary: string;
    core_competencies: CoreCompetencies;
    education: Education[];
    professional_experience: ProfessionalExperience[];
    academic_projects: AcademicProject[];
    volunteer_experience: VolunteerExperience[];
    certifications: Certification[];
    achievements: string[];
    references_and_recommendations: References;
}
