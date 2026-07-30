export interface Screenshot {
  path: string;
  type: "mobile" | "web";
  alt?: string;
}

export interface ItemMetric {
  label: string;
  value: string;
}

export interface Contributor {
  name: string;
  linkedinUrl: string;
}

export interface ContentItem {
  title: string;
  coverImage: string | string[];
  description: string;
  shortDescription?: string;
  category?: string;
  status?: string;
  role?: string;
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  videoPath?: string;
  videoAspectRatio?: string;
  technologies: string[];
  features: string[];
  highlights?: string[];
  metrics?: ItemMetric[];
  githubUrl?: string;
  caseStudyUrl?: string;
  paperUrl?: string;
  descriptionUrl?: string;
  appVideoUrl?: string;
  webVideoUrl?: string;
  contributors?: Contributor[];
  screenshots?: Screenshot[];
}
