import BlogBriefPage, { generateMetadata as generateBriefMetadata } from "../[slug]/page";

const slug = "how-to-choose-commercial-lighting-fixtures";

export function generateMetadata() {
  return generateBriefMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return <BlogBriefPage params={Promise.resolve({ slug })} />;
}
