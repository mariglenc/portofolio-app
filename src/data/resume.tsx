import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mariglen Cullhaj",
  initials: "MC",
  url: "https://mariglencullhaj.com",
  location: "Tirana, Albania",
  locationLink: "https://maps.app.goo.gl/uodmjQ4ksGFfQ8bm7",
  description:
    "Software Developer and Tech Enthusiast. Passionate about creating innovative solutions and helping others.",
  summary:
    "In 2022, I transitioned from my IT role to focus full-time on developing and scaling my projects. My journey includes pursuing a degree in computer science, collaborating on exciting projects, and engaging in tech communities.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "MongoDB",
    "Jenkins",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://blog.mariglencullhaj.com", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mariglen@example.com",
    tel: "+355671234567",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mariglenc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mariglen-%C3%A7ullhaj-2278511a3",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/cullhajmariglen",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/c/mariglencullhaj",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EA-TECH",
      href: "https://eatech.al/",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/eatech.svg",
      start: "January 2023",
      end: "Present",
      description:
        "Developing web applications using modern JavaScript frameworks and building RESTful APIs. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      company: "Ketri Web",
      badges: [],
      href: "https://ketri.al",
      location: "Tirana, Albania",
      title: "Full Stack Developer",
      logoUrl: "/ketri.png",
      start: "June 2021",
      end: "December 2022",
      description:
        "Worked on developing scalable backend services and APIs. Enhanced application performance and implemented security best practices.",
    },
    {
      company: "Freelance Developer",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Tirana, Albania",
      title: "Web Developer",
      logoUrl: "/Upwork-Logo-1.png",
      start: "January 2020",
      end: "May 2021",
      description:
        "Provided web development services to various clients, building responsive and user-friendly websites. Leveraged technologies such as React and Node.js.",
    },
  ],
  education: [
    {
      school: "University of Tirana",
      href: "https://unitir.edu.al",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/unitir.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "My Portfolio",
      href: "https://www.mariglencullhaj.com/",
      dates: "January 2024 - Present",
      active: true,
      description:
        "A personal portfolio showcasing my projects and skills as a software developer.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mariglencullhaj.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "albafilters",
      href: "https://alba-filters-front-end.vercel.app/",
      dates: "March 2023 - July 2023",
      active: true,
      description:
        "The Albafilters presentation page showcases the company's water filter products and services in a clean and visually appealing format.",
      technologies: [
        "React",
        "Next.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://alba-filters-front-end.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Blog",
      href: "https://blog.mariglencullhaj.com/",
      dates: "March 2023 - July 2023",
      active: true,
      description:
        "A task management application to help users manage their tasks efficiently.",
      technologies: [
        "React",
        "Next.js",
        "Nest js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog.mariglencullhaj.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ]
} as const;
