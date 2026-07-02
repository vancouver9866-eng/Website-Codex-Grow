import BlogBriefPage, { generateMetadata as generateBriefMetadata } from "../[slug]/page";

const slug = "led-ceiling-light-moq";

export function generateMetadata() {
  return generateBriefMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
