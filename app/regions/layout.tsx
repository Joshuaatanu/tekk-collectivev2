import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regions — UK, Europe, West Africa",
  description:
    "Tekk Collective works across three regions with native presence in each: UK (Manchester HQ), Europe (UK-via-UK-entity), and West Africa (Lagos and Abuja engineering teams).",
  alternates: {
    canonical: "https://tekkcollective.com/regions"
  },
  openGraph: {
    title: "Regions — UK, Europe, West Africa | Tekk Collective",
    description:
      "AI consultancy with native presence across UK, Europe, and West Africa. Pick your region.",
    url: "https://tekkcollective.com/regions",
    type: "website"
  }
};

export default function RegionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
