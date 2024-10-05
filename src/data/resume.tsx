// import { Icons } from "@/components/icons";
// import { HomeIcon, NotebookIcon } from "lucide-react";

// export const DATA = {
//   name: "Dillion Verma",
//   initials: "DV",
//   url: "https://dillion.io",
//   location: "San Francisco, CA",
//   locationLink: "https://www.google.com/maps/place/sanfrancisco",
//   description:
//     "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
//   summary:
//     "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
//   avatarUrl: "/me.png",
//   skills: [
//     "React",
//     "Next.js",
//     "Typescript",
//     "Node.js",
//     "Python",
//     "Go",
//     "Postgres",
//     "Docker",
//     "Kubernetes",
//     "Java",
//     "C++",
//   ],
//   navbar: [
//     { href: "/", icon: HomeIcon, label: "Home" },
//     { href: "/blog", icon: NotebookIcon, label: "Blog" },
//   ],
//   contact: {
//     email: "hello@example.com",
//     tel: "+123456789",
//     social: {
//       GitHub: {
//         name: "GitHub",
//         url: "https://dub.sh/dillion-github",
//         icon: Icons.github,

//         navbar: true,
//       },
//       LinkedIn: {
//         name: "LinkedIn",
//         url: "https://dub.sh/dillion-linkedin",
//         icon: Icons.linkedin,

//         navbar: true,
//       },
//       X: {
//         name: "X",
//         url: "https://dub.sh/dillion-twitter",
//         icon: Icons.x,

//         navbar: true,
//       },
//       Youtube: {
//         name: "Youtube",
//         url: "https://dub.sh/dillion-youtube",
//         icon: Icons.youtube,
//         navbar: true,
//       },
//       email: {
//         name: "Send Email",
//         url: "#",
//         icon: Icons.email,

//         navbar: false,
//       },
//     },
//   },

//   work: [
//     {
//       company: "Atomic Finance",
//       href: "https://atomic.finance",
//       badges: [],
//       location: "Remote",
//       title: "Bitcoin Protocol Engineer",
//       logoUrl: "/atomic.png",
//       start: "May 2021",
//       end: "Oct 2022",
//       description:
//         "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
//     },
//     {
//       company: "Shopify",
//       badges: [],
//       href: "https://shopify.com",
//       location: "Remote",
//       title: "Software Engineer",
//       logoUrl: "/shopify.svg",
//       start: "January 2021",
//       end: "April 2021",
//       description:
//         "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
//     },
//     {
//       company: "Nvidia",
//       href: "https://nvidia.com/",
//       badges: [],
//       location: "Santa Clara, CA",
//       title: "Software Engineer",
//       logoUrl: "/nvidia.png",
//       start: "January 2020",
//       end: "April 2020",
//       description:
//         "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
//     },
//     {
//       company: "Splunk",
//       href: "https://splunk.com",
//       badges: [],
//       location: "San Jose, CA",
//       title: "Software Engineer",
//       logoUrl: "/splunk.svg",
//       start: "January 2019",
//       end: "April 2019",
//       description:
//         "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
//     },
//     {
//       company: "Lime",
//       href: "https://li.me/",
//       badges: [],
//       location: "San Francisco, CA",
//       title: "Software Engineer",
//       logoUrl: "/lime.svg",
//       start: "January 2018",
//       end: "April 2018",
//       description:
//         "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
//     },
//     {
//       company: "Mitre Media",
//       href: "https://mitremedia.com/",
//       badges: [],
//       location: "Toronto, ON",
//       title: "Software Engineer",
//       logoUrl: "/mitremedia.png",
//       start: "May 2017",
//       end: "August 2017",
//       description:
//         "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
//     },
//   ],
//   education: [
//     {
//       school: "Buildspace",
//       href: "https://buildspace.so",
//       degree: "s3, s4, sf1, s5",
//       logoUrl: "/buildspace.jpg",
//       start: "2023",
//       end: "2024",
//     },
//     {
//       school: "University of Waterloo",
//       href: "https://uwaterloo.ca",
//       degree: "Bachelor's Degree of Computer Science (BCS)",
//       logoUrl: "/waterloo.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "Wilfrid Laurier University",
//       href: "https://wlu.ca",
//       degree: "Bachelor's Degree of Business Administration (BBA)",
//       logoUrl: "/laurier.png",
//       start: "2016",
//       end: "2021",
//     },
//     {
//       school: "International Baccalaureate",
//       href: "https://ibo.org",
//       degree: "IB Diploma",
//       logoUrl: "/ib.png",
//       start: "2012",
//       end: "2016",
//     },
//   ],
//   projects: [
//     {
//       title: "Chat Collect",
//       href: "https://chatcollect.com",
//       dates: "Jan 2024 - Feb 2024",
//       active: true,
//       description:
//         "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://chatcollect.com",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
//     },
//     {
//       title: "Magic UI",
//       href: "https://magicui.design",
//       dates: "June 2023 - Present",
//       active: true,
//       description:
//         "Designed, developed and sold animated UI components for developers.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Stripe",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://magicui.design",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/magicuidesign/magicui",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.magicui.design/bento-grid.mp4",
//     },
//     {
//       title: "llm.report",
//       href: "https://llm.report",
//       dates: "April 2023 - September 2023",
//       active: true,
//       description:
//         "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://llm.report",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/dillionverma/llm.report",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "",
//       video: "https://cdn.llm.report/openai-demo.mp4",
//     },
//     {
//       title: "Automatic Chat",
//       href: "https://automatic.chat",
//       dates: "April 2023 - March 2024",
//       active: true,
//       description:
//         "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "PostgreSQL",
//         "Prisma",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//         "Stripe",
//         "Cloudflare Workers",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://automatic.chat",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "",
//       video:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
//     },
//   ]
// } as const;
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mariglen",
  initials: "M",
  url: "https://mariglen.com",
  location: "Tirana, Albania",
  locationLink: "https://www.google.com/maps/place/Tirana",
  description:
    "Software Developer and Tech Enthusiast. Passionate about creating innovative solutions and helping others.",
  summary:
    "In 2020, I transitioned from my software engineering role to focus full-time on developing and scaling my projects. My journey includes pursuing a degree in computer science, collaborating on exciting projects, and engaging in tech communities.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Python",
    "MongoDB",
    "Docker",
    "GraphQL",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mariglen@example.com",
    tel: "+355671234567",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mariglen",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mariglen",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/mariglen",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "https://youtube.com/c/mariglen",
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
      company: "Tech Solutions",
      href: "https://techsolutions.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/techsolutions.png",
      start: "January 2023",
      end: "Present",
      description:
        "Developing web applications using modern JavaScript frameworks and building RESTful APIs. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      company: "Startup Inc.",
      badges: [],
      href: "https://startup.com",
      location: "Tirana, Albania",
      title: "Software Engineer",
      logoUrl: "/startup.png",
      start: "June 2021",
      end: "December 2022",
      description:
        "Worked on developing scalable backend services and APIs. Enhanced application performance and implemented security best practices.",
    },
    {
      company: "Freelance Developer",
      href: "https://freelance.com",
      badges: [],
      location: "Tirana, Albania",
      title: "Web Developer",
      logoUrl: "/freelance.png",
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
      href: "https://mariglen.com",
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
          href: "https://mariglen.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task Manager",
      href: "https://taskmanager.com",
      dates: "March 2023 - July 2023",
      active: true,
      description:
        "A task management application to help users manage their tasks efficiently.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://taskmanager.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ]
} as const;
