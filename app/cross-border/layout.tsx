import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross-Border AI Practice — UK ↔ Africa",
  description:
    "When your AI project crosses borders, your team should too. Tekk Collective's cross-border AI practice — UK companies entering Africa, African companies expanding into UK and EU, and the data, regulatory, and operational realities of working across these markets.",
  alternates: {
    canonical: "https://tekkcollective.com/cross-border"
  },
  openGraph: {
    title: "Cross-Border AI Practice — UK ↔ Africa | Tekk Collective",
    description:
      "AI consultancy with native presence in Manchester, Lagos, and Abuja. The cross-border AI practice almost no other consultancy can credibly serve.",
    url: "https://tekkcollective.com/cross-border",
    type: "website"
  }
};

export default function CrossBorderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
