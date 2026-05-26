import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI Implementation, Custom Software, Data & Analytics",
  description:
    "Practical AI delivered to production. Tekk Collective offers three focused services: AI Implementation (LLMs, agents, RAG), Custom Software Development, and Data & Analytics. Manchester-led, with engineering delivery from Lagos and Abuja.",
  alternates: {
    canonical: "https://tekkcollective.com/services"
  },
  openGraph: {
    title: "Services — AI Implementation, Custom Software, Data & Analytics | Tekk Collective",
    description:
      "Three focused services: AI Implementation (headline), Custom Software Development, and Data & Analytics. Manchester-led with cross-border engineering delivery.",
    url: "https://tekkcollective.com/services",
    type: "website"
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
