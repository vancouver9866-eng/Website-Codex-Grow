import BlogBriefPage, { generateMetadata as generateBriefMetadata } from "../[slug]/page";

const slug = "best-chandelier-manufacturer-for-restaurant";

export function generateMetadata() {
  return generateBriefMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
