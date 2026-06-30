import Image from "next/image";
import { factoryGroups, factoryImages, homepageFactoryImages, type FactoryImage, type FactoryImageGroup } from "@/lib/factoryImages";

function GalleryCard({ image, priority = false }: { image: FactoryImage; priority?: boolean }) {
  return (
    <figure className="factory-gallery-card">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 32vw"
        priority={priority}
      />
      <figcaption>
        <strong>{image.caption}</strong>
        <span>{image.description}</span>
      </figcaption>
    </figure>
  );
}

export function FactoryGallerySection({
  mode = "homepage",
  groups,
}: {
  mode?: "homepage" | "full";
  groups?: FactoryImageGroup[];
}) {
  const selected = mode === "homepage" ? homepageFactoryImages : factoryImages.filter((image) => !groups || groups.includes(image.group));

  if (mode === "homepage") {
    return (
      <div className="factory-gallery-grid homepage">
        {selected.map((image, index) => <GalleryCard key={image.id} image={image} priority={index < 2} />)}
      </div>
    );
  }

  return (
    <div className="factory-gallery-groups">
      {factoryGroups
        .filter((group) => !groups || groups.includes(group.key))
        .map((group) => {
          const items = selected.filter((image) => image.group === group.key);
          if (!items.length) return null;
          return (
            <section className="factory-gallery-group" key={group.key}>
              <div className="section-heading">
                <div>
                  <p className="section-label">{group.label.toUpperCase()}</p>
                  <h2>{group.label}</h2>
                </div>
              </div>
              <div className="factory-gallery-grid">
                {items.map((image, index) => <GalleryCard key={image.id} image={image} priority={index < 1} />)}
              </div>
            </section>
          );
        })}
    </div>
  );
}
