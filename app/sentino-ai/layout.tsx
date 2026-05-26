import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentino AI — Our Academic Research Platform",
  description:
    "Sentino AI is our in-house AI-powered academic research platform. Multi-source search across arXiv, PubMed, IEEE Xplore, and more, with RAG chat over PDFs. Built and validated in partnership with the University of Greater Manchester.",
  alternates: {
    canonical: "https://tekkcollective.com/sentino-ai"
  },
  openGraph: {
    title: "Sentino AI — Our Academic Research Platform | Tekk Collective",
    description:
      "Multi-source academic search with RAG chat over PDFs. Built by Tekk Collective in partnership with the University of Greater Manchester.",
    url: "https://tekkcollective.com/sentino-ai",
    type: "website"
  }
};

export default function SentinoAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
