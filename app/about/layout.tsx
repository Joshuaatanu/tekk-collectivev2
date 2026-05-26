import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — An AI Consultancy Built Across Borders",
  description:
    "Tekk Collective is a Manchester-headquartered AI consultancy with engineering teams in Lagos and Abuja. Co-founded by Joshua Atanu and Oyinkansola Soleye. We ship our own AI products (Sentino AI, GAVL, YALP), so we know what AI implementation actually involves.",
  alternates: {
    canonical: "https://tekkcollective.com/about"
  },
  openGraph: {
    title: "About — An AI Consultancy Built Across Borders | Tekk Collective",
    description:
      "Founders Joshua Atanu and Oyinkansola Soleye, with engineering teams in Lagos and Abuja. Honest about scope, practical over flashy, build then advise.",
    url: "https://tekkcollective.com/about",
    type: "website"
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
