import BlogBriefPage, { generateMetadata as generateBriefMetadata } from "../[slug]/page";

const slug = "led-lighting-supplier-vs-manufacturer";

export function generateMetadata() {
  return generateBriefMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
