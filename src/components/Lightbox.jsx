import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onChange }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange(1);
      if (event.key === "ArrowLeft") onChange(-1);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, onChange]);

  const image = images[index];
  if (!image) return null;

  return (
    <div
      id="image-lightbox"
      className="lightbox active"
      aria-hidden="false"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" aria-label="Close lightbox" onClick={onClose}>
        &times;
      </button>
      <button
        className="lightbox-prev"
        aria-label="Previous image"
        onClick={(event) => {
          event.stopPropagation();
          onChange(-1);
        }}
      >
        &#8249;
      </button>
      <button
        className="lightbox-next"
        aria-label="Next image"
        onClick={(event) => {
          event.stopPropagation();
          onChange(1);
        }}
      >
        &#8250;
      </button>
      <div className="lightbox-counter">
        <span>
          {index + 1} / {images.length}
        </span>
      </div>
      <div className="lightbox-content">
        <img src={image.src} alt={image.alt || image.caption || "Image"} />
        <p className="lightbox-caption">{image.caption}</p>
      </div>
    </div>
  );
}
