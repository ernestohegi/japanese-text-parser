import { Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Help | Yochimu - Japanese Text Parser",
  };
}

export default function AboutLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
