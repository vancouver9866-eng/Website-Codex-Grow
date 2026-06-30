import BlogBriefPage, { generateMetadata as generateBriefMetadata } from "../[slug]/page";

const slug = "commercial-lighting-fixtures-supplier-vs-manufacturer";

export function generateMetadata() {
  return generateBriefMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
