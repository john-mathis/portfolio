import NBA from "../../assets/nba-project.png";
import Prime from "../../assets/barbershop-project.jpg";
import Muzfi from "../../assets/muzfi-project.png";

export const projects = [
  {
    id: "nba",
    title: "NBA Stats",
    image: NBA,
    liveUrl: "https://the-nba-stats.netlify.app/",
    repoUrl: "https://github.com/john-mathis/NBA",
    stack: "MongoDB · Express · React · Node.js",
    description: "Live NBA stats dashboard with player search and game logs.",
  },
  {
    id: "prime",
    title: "Prime Barbershop",
    image: Prime,
    liveUrl: "https://barbershop-omega.vercel.app/",
    repoUrl: "https://github.com/john-mathis/Barbershop",
    stack: "Next.js · TailwindCSS · Stripe API",
    description: "Salon booking site with custom CMS and online checkout.",
  },
  {
    id: "muzfi",
    title: "Muzfi Marketplace",
    image: Muzfi,
    liveUrl: "https://muzfi.com/",
    repoUrl: "",
    stack: "React · Node.js · PostgreSQL",
    description: "Peer‑to‑peer gear marketplace with reviews and messaging.",
  },
];
export default projects;



