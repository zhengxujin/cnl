import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "CNL Moments",
  EMAIL: "zhengxujin@qq.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "CNL Moments",
  DESCRIPTION: "Personal portfolio & journal focused on power fittings and global trade.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Industry notes, trade insights and personal stories.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My professional experience and work history.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Personal projects and portfolio works.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/zhengxujin"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/xujin-zheng"
  }
];