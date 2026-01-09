// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Enhanced navigation scroll effect
const topNav = document.querySelector(".top-nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    topNav.classList.add("scrolled");
  } else {
    topNav.classList.remove("scrolled");
  }
  
  lastScroll = currentScroll;
});

// Simple section reveal on scroll
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".top-nav a.nav-link");

const reveal = () => {
  const triggerPoint = window.innerHeight * 0.8;
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      section.classList.add("visible");
    }
  });
};

// Highlight active navigation link based on scroll position
const updateActiveNav = () => {
  let currentId = "home";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.25) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").slice(1);
    if (targetId === currentId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};

const handleScrollAndLoad = () => {
  reveal();
  updateActiveNav();
};

window.addEventListener("scroll", handleScrollAndLoad);
window.addEventListener("load", handleScrollAndLoad);

// Enhanced Lightbox functionality for clickable images
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

// Only get experience photos (exp-photo), not project screenshots
const clickableImages = document.querySelectorAll(".exp-photo.clickable-image");

let currentImageIndex = 0;
let images = [];
let activeGallery = null; // 'experience' or 'project'

// Collect only experience images - prioritize actual img src over data-image
clickableImages.forEach((element, index) => {
  // First, try to get the actual image source from the img element inside
  const imgElement = element.querySelector("img");
  let imgSrc = null;
  
  if (imgElement) {
    // Use the actual src from the img tag (this is the real image)
    imgSrc = imgElement.src;
    // If it's a relative path, make sure it's correct
    if (imgSrc && !imgSrc.startsWith('http')) {
      // Get the full path
      const imgPath = imgElement.getAttribute('src');
      imgSrc = imgPath;
    }
  }
  
  // Fallback to data-image if img src is not available
  if (!imgSrc) {
    imgSrc = element.getAttribute("data-image");
  }
  
  const caption = element.getAttribute("data-caption") || "";
  
  if (imgSrc) {
    images.push({ src: imgSrc, caption: caption });
    
    // Add click event to the entire clickable element
    element.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(index);
    });
    
    // Also make the img inside clickable
    if (imgElement) {
      imgElement.style.cursor = "pointer";
      imgElement.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(index);
      });
    }
  }
});

function openLightbox(index) {
  if (index < 0 || index >= images.length) return;
  
  currentImageIndex = index;
  activeGallery = "experience";
  
  // Reset image for smooth transition
  lightboxImage.style.opacity = "0";
  lightboxImage.style.transform = "scale(0.9)";
  
  updateLightboxImage();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
  activeGallery = null;
  // Reset transform for next open
  setTimeout(() => {
    lightboxImage.style.opacity = "0";
    lightboxImage.style.transform = "scale(0.9)";
  }, 300);
}

function updateLightboxImage() {
  if (images[currentImageIndex]) {
    const imageData = images[currentImageIndex];
    
    // Reset opacity for smooth transition
    lightboxImage.style.opacity = "0";
    lightboxImage.style.transform = "scale(0.9)";
    
    // Set the image source
    lightboxImage.src = imageData.src;
    lightboxImage.alt = imageData.caption || "Image";
    
    // Set caption
    lightboxCaption.textContent = imageData.caption || "";
    
    // Update counter - only show if there are images
    const counterText = document.getElementById("lightbox-counter-text");
    if (counterText && images.length > 0) {
      counterText.textContent = `${currentImageIndex + 1} / ${images.length}`;
    }
    
    // Animate in after image loads
    lightboxImage.onload = () => {
      setTimeout(() => {
        lightboxImage.style.opacity = "1";
        lightboxImage.style.transform = "scale(1)";
      }, 50);
    };
    
    // Handle image load errors
    lightboxImage.onerror = () => {
      console.error("Failed to load image:", imageData.src);
      lightboxImage.style.opacity = "1";
      lightboxImage.style.transform = "scale(1)";
    };
  }
}

// Event listeners
if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", (e) => {
    e.stopPropagation();
    showNextImage();
  });
}

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrevImage();
  });
}

// Close on background click
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("active")) return;
  
  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowRight") {
    showNextImage();
  } else if (e.key === "ArrowLeft") {
    showPrevImage();
  }
});

// Add this after the experience lightbox code (around line 240)
// Project Images Lightbox (separate from experience images)
const projectImages = document.querySelectorAll(".clickable-image-project");
let projectImagesArray = [];

projectImages.forEach((element, index) => {
  const imgElement = element.querySelector("img");
  let imgSrc = null;
  
  if (imgElement) {
    imgSrc = imgElement.src;
    if (imgSrc && !imgSrc.startsWith('http')) {
      imgSrc = imgElement.getAttribute('src');
    }
  }
  
  if (!imgSrc) {
    imgSrc = element.getAttribute("data-image");
  }
  
  const caption = element.getAttribute("data-caption") || "";
  
  if (imgSrc) {
    projectImagesArray.push({ src: imgSrc, caption: caption });
    
    element.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProjectLightbox(index);
    });
    
    if (imgElement) {
      imgElement.style.cursor = "pointer";
    }
  }
});

let currentProjectIndex = 0;

function openProjectLightbox(index) {
  if (index < 0 || index >= projectImagesArray.length) return;
  
  currentProjectIndex = index;
  activeGallery = "project";
  lightboxImage.style.opacity = "0";
  lightboxImage.style.transform = "scale(0.9)";
  
  updateProjectLightboxImage();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateProjectLightboxImage() {
  if (projectImagesArray[currentProjectIndex]) {
    const imageData = projectImagesArray[currentProjectIndex];
    
    lightboxImage.style.opacity = "0";
    lightboxImage.style.transform = "scale(0.9)";
    
    lightboxImage.src = imageData.src;
    lightboxImage.alt = imageData.caption || "Image";
    lightboxCaption.textContent = imageData.caption || "";
    
    const counterText = document.getElementById("lightbox-counter-text");
    if (counterText && projectImagesArray.length > 0) {
      counterText.textContent = `${currentProjectIndex + 1} / ${projectImagesArray.length}`;
    }
    
    lightboxImage.onload = () => {
      setTimeout(() => {
        lightboxImage.style.opacity = "1";
        lightboxImage.style.transform = "scale(1)";
      }, 50);
    };
    
    lightboxImage.onerror = () => {
      lightboxImage.style.opacity = "1";
      lightboxImage.style.transform = "scale(1)";
    };
  }
}

// Ensure we always know which gallery is currently active
function ensureActiveGallery() {
  if (activeGallery || !lightboxImage) return;

  const currentSrc = lightboxImage.src;
  if (!currentSrc) return;

  // Try to match against project images first
  const projectIndex = projectImagesArray.findIndex((img) => img.src === currentSrc);
  if (projectIndex !== -1) {
    activeGallery = "project";
    currentProjectIndex = projectIndex;
    return;
  }

  // Fallback: match against experience images
  const expIndex = images.findIndex((img) => img.src === currentSrc);
  if (expIndex !== -1) {
    activeGallery = "experience";
    currentImageIndex = expIndex;
  }
}

function showNextImage() {
  if (!lightbox || !lightbox.classList.contains("active")) return;

  ensureActiveGallery();

  if (activeGallery === "project") {
    if (projectImagesArray.length === 0) return;
    currentProjectIndex = (currentProjectIndex + 1) % projectImagesArray.length;
    updateProjectLightboxImage();
  } else if (activeGallery === "experience") {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
  }
}

function showPrevImage() {
  if (!lightbox || !lightbox.classList.contains("active")) return;

  ensureActiveGallery();

  if (activeGallery === "project") {
    if (projectImagesArray.length === 0) return;
    currentProjectIndex = (currentProjectIndex - 1 + projectImagesArray.length) % projectImagesArray.length;
    updateProjectLightboxImage();
  } else if (activeGallery === "experience") {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }
}

