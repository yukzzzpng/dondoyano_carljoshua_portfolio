export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    school: "Pamantasan ng Lungsod ng Valenzuela",
    years: "2022 - 2026",
    description: "BS Information Technology, Graduate",
    logo: "/images/plv.jpg",
    alt: "College logo",
  },
  {
    school: "Pamantasan ng Lungsod ng Valenzuela",
    years: "2020 - 2022",
    description: "Senior High School",
    logo: "/images/plv.jpg",
    alt: "Senior High School logo",
  },
  {
    school: "Lawang Bato National High School",
    years: "2016 - 2020",
    description: "Junior High School",
    logo: "/images/lbnhs.jpg",
    alt: "Junior High School logo",
  },
  {
    school: "Lawang Bato Elementary School",
    years: "2010 - 2016",
    description: "Elementary School",
    logo: "/images/lbes.jpg",
    alt: "Elementary School logo",
  },
];

export const skillGroups = [
  {
    title: "Technical Support",
    tags: [
      "PC Troubleshooting",
      "Hardware Diagnosis",
      "System Assembly",
      "OS Installation",
      "Preventive Maintenance",
      "Peripheral Setup",
      "End-User Support",
    ],
  },
  {
    title: "Networking",
    tags: [
      "Ethernet Cabling",
      "Cable Management",
      "I/O Termination",
      "Switch Maintenance",
      "Cisco Packet Tracer",
      "Networking Basics",
    ],
  },
  {
    title: "Systems & Tools",
    items: [
      { name: "Windows", title: "Windows", icon: "fab fa-windows" },
      { name: "Linux", title: "Linux", icon: "fab fa-linux" },
      { name: "Hardware", title: "Computer Hardware", icon: "fas fa-desktop" },
      { name: "Servers", title: "Server Support", icon: "fas fa-server" },
      { name: "Network", title: "Network Support", icon: "fas fa-network-wired" },
      { name: "Repair", title: "Hands-on Repair", icon: "fas fa-screwdriver-wrench" },
    ],
  },
  {
    title: "Office Tools",
    items: [
      { name: "Word", icon: "fab fa-microsoft" },
      { name: "Excel", icon: "fas fa-file-excel" },
      { name: "PowerPoint", icon: "fas fa-file-powerpoint" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      { name: "Figma", icon: "fab fa-figma" },
      {
        name: "Canva",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      },
    ],
  },
];

export const certifications = [
  {
    id: "national",
    kind: "National Certificate",
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA",
    summary:
      "National certification in installing, configuring, and maintaining computer systems and networks.",
    baseName: "national-certificate",
  },
  {
    id: "netacad",
    kind: "NetAcad Certificate",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    summary:
      "Cisco Networking Academy certificate covering networking fundamentals, devices, and basic connectivity.",
    baseName: "netacad-certificate",
  },
];

const cssTech = [{ name: "CSS", icon: "fab fa-css3-alt" }];
const blenderTech = [
  {
    name: "Blender",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
  },
];

export const projects = [
  {
    tag: "Front-End Developer",
    title: "EnrollMate",
    description:
      "EnrollMate is a web-based enrollment system for Pamantasan ng Lungsod ng Valenzuela (PLV) that helps students and staff manage enrollment processes online.",
    tech: cssTech,
    images: [
      {
        src: "/images/enrollmate1.png",
        alt: "Admin Dashboard",
        caption: "Enroll Now module for Student Page",
      },
      {
        src: "/images/enrollmate2.png",
        alt: "QR Scan Interface",
        caption: "Request Module for load revision",
      },
      {
        src: "/images/enrollmate3.png",
        alt: "Ride Tracking Map",
        caption: "My Schedule Module for Faculty Page",
      },
    ],
  },
  {
    tag: "Front-End Developer",
    title: "Lakbay",
    description:
      "Lakbay is a web-based travel platform that showcases tourist attractions across the Philippines, helping users discover destinations and plan trips.",
    tech: cssTech,
    images: [
      {
        src: "/images/lakbay1.png",
        alt: "Project 2 Image 1",
        caption:
          "Website projects with screenshots taken during the drafting and development phase.",
      },
      {
        src: "/images/lakbay2.png",
        alt: "Project 2 Image 2",
        caption:
          "Website projects with screenshots taken during the drafting and development phase.",
      },
      {
        src: "/images/lakbay3.png",
        alt: "Project 2 Image 3",
        caption:
          "Website projects with screenshots taken during the drafting and development phase.",
      },
    ],
  },
  {
    tag: "Front-End Developer",
    title: "Bread & Beyond",
    description:
      "Bread & Beyond is an online concept for selling different types of breads and cakes, highlighting products, flavors, and a simple ordering experience.",
    tech: cssTech,
    images: [
      { src: "/images/b1.jpg", alt: "Project 3 Image 1", caption: "Home Page of Bread & Beyond" },
      { src: "/images/b2.jpg", alt: "Project 3 Image 2", caption: "Buy Now Section" },
      { src: "/images/b3.jpg", alt: "Project 3 Image 3", caption: "Limited Offers" },
    ],
  },
  {
    tag: "Blender",
    title: "Donut",
    description:
      "Donut is my first Blender activity, where I learned the basics of 3D modeling, materials, lighting, and rendering using a classic donut scene.",
    tech: blenderTech,
    images: [
      { src: "/images/donut1.png", alt: "Rendered donut", caption: "Rendered Image" },
      {
        src: "/images/donut2.png",
        alt: "Donut modeling",
        caption: "Work-in-progress donut modeling in Blender",
      },
      {
        src: "/images/donut3.png",
        alt: "Donut modeling",
        caption: "Work-in-progress donut modeling in Blender",
      },
    ],
  },
  {
    tag: "Blender",
    title: "Scream",
    description:
      "Scream is my second Blender activity, featuring a stylized 3D scene inspired by the Scream character, focused on mood, lighting, and materials.",
    tech: blenderTech,
    images: [
      { src: "/images/scream1.jpg", alt: "Scream render", caption: "Rendered Image" },
      { src: "/images/scream2.png", alt: "Scream mask", caption: "Making of Scream's Mask" },
      {
        src: "/images/scream3.png",
        alt: "Scream modeling",
        caption: "Work-in-progress scream modeling in Blender",
      },
    ],
  },
  {
    tag: "Blender",
    title: "Mustang",
    description:
      "Mustang is a Blender project where I modeled and rendered a 3D Mustang car to practice hard-surface modeling and realistic lighting.",
    tech: blenderTech,
    images: [
      { src: "/images/mustang1.png", alt: "Mustang render", caption: "Rendered Image" },
      {
        src: "/images/mustang2.png",
        alt: "Mustang modeling",
        caption: "Work-in-progress mustang modeling in Blender",
      },
      { src: "/images/mustang3.png", alt: "Mustang render", caption: "Rendered Image" },
    ],
  },
  {
    tag: "Game Development",
    title: "Slime Out",
    description:
      "Slime Out is a maze-style video game where you guide a slime character through different levels, avoiding obstacles and finding the exit.",
    tech: [
      {
        name: "Unity",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      },
    ],
    images: [
      {
        src: "/images/slime1.jpg",
        alt: "Slime Out mobile test",
        caption: "Mobile testing phase of the Slime Out maze game.",
      },
      {
        src: "/images/slime2.png",
        alt: "Slime Out menu",
        caption: "Menu page in development for the Slime Out game.",
      },
      {
        src: "/images/slime3.png",
        alt: "Slime Out in Unity",
        caption: "Game creation process of Slime Out in Unity.",
      },
    ],
  },
  {
    tag: "UI/UX Design",
    title: "PC Parts",
    description:
      "PC Parts is a Figma final project that explains different PC components and how they fit together inside a build, designed to make hardware easier to understand.",
    tech: [
      {
        name: "Figma",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    images: [
      { src: "/images/pc1.png", alt: "Computer parts design", caption: "Computer Parts Figma" },
      { src: "/images/pc2.png", alt: "PC peripherals", caption: "Description of PC peripherals" },
      { src: "/images/pc3.png", alt: "PC parts quiz", caption: "Quiz Part" },
    ],
  },
];

export const projectGallery = projects.flatMap((project) => project.images);

export const experiencePhotos = {
  it: [
    { src: "/images/1.jpg", alt: "PC inspection", caption: "PC Inspection and Troubleshooting" },
    {
      src: "/images/2.jpg",
      alt: "Cable work",
      caption: "Making Ethernet Cables and I/O Ports and Cable Management",
    },
    { src: "/images/3.jpg", alt: "IT Support activity", caption: "Computer Preventive Maintenance" },
    { src: "/images/4.jpg", alt: "IT Support activity", caption: "Cleaning Network Switch" },
  ],
  logistics: [
    {
      src: "/images/11.jpg",
      alt: "Logistic Department activity",
      caption: "Making labels, barcodes, and transmittals",
    },
    {
      src: "/images/22.jpg",
      alt: "Logistic Department activity",
      caption: "Making labels, barcodes, and transmittals",
    },
    {
      src: "/images/33.jpg",
      alt: "Logistic Department activity",
      caption: "Making labels, barcodes, and transmittals",
    },
    {
      src: "/images/44.jpg",
      alt: "Logistic Department activity",
      caption: "Making labels, barcodes, and transmittals",
    },
  ],
};

export const experienceGallery = [
  ...experiencePhotos.it,
  ...experiencePhotos.logistics,
];
