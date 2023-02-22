const photoGalleryThumbnailPhotosElement = document.querySelector(
  ".photo-gallery .all-photos"
);
const photoGalleryCurrentPhotoElement = document.querySelector(
  ".photo-gallery .showcase"
);
const nextPhotoElement = document.querySelector(".photo-gallery .next-photo i");
const previousPhotoElement = document.querySelector(
  ".photo-gallery .previous-photo i"
);

let imageElements = [];
let currentImageIndex = 0;

const setCurrentPicture = () => {
  photoGalleryCurrentPhotoElement.innerHTML = "";
  photoGalleryCurrentPhotoElement.appendChild(imageElements[currentImageIndex]);

  for (let i = 0; i < photoGalleryThumbnailPhotosElement.children.length; i++) {
    if (i !== currentImageIndex) {
      photoGalleryThumbnailPhotosElement.children[i].classList.remove(
        "selected"
      );
    } else {
      photoGalleryThumbnailPhotosElement.children[i].classList.add("selected");
    }
  }
};

const setElementsAtMobileSize = () => {
  document.querySelector(".photo-gallery").classList.add("shrinked");
  document.querySelector(".photo-gallery .content").classList.add("shrinked");
  document
    .querySelector(".photo-gallery .all-photos")
    .classList.add("shrinked");

  document.querySelectorAll(".photo-gallery .thumbnail").forEach((element) => {
    element.classList.add("shrinked");
  });

  document.querySelectorAll(".photo-gallery .buttons i").forEach((element) => {
    element.classList.remove("fa-2xl");
    element.classList.add("fa-lg");
  });
};

const setElementsAtNormalSize = () => {
  document.querySelector(".photo-gallery").classList.remove("shrinked");
  document
    .querySelector(".photo-gallery .content")
    .classList.remove("shrinked");
  document
    .querySelector(".photo-gallery .all-photos")
    .classList.remove("shrinked");
  document
    .querySelectorAll(".photo-gallery .all-photos .thumbnail")
    .forEach((element) => {
      element.classList.remove("shrinked");
    });

  document.querySelectorAll(".photo-gallery .buttons i").forEach((element) => {
    element.classList.add("fa-2xl");
    element.classList.remove("fa-lg");
  });
};

nextPhotoElement.addEventListener("click", () => {
  if (currentImageIndex !== 9) {
    currentImageIndex++;
    setCurrentPicture();
  }
});

previousPhotoElement.addEventListener("click", () => {
  if (currentImageIndex !== 0) {
    currentImageIndex--;
    setCurrentPicture();
  }
});

for (let i = 0; i < 10; i++) {
  const imageElement = document.createElement("img");
  imageElement.alt = "photo-gallery-pic";
  imageElement.src = `https://source.unsplash.com/random/600x400?sig=${i}`;

  imageElements.push(imageElement);

  const divElement = document.createElement("div");
  divElement.classList.add("thumbnail");

  if (i == currentImageIndex) {
    divElement.classList.add("selected");
    photoGalleryCurrentPhotoElement.appendChild(imageElement);
  }

  divElement.addEventListener("click", () => {
    currentImageIndex = i;
    setCurrentPicture();
  });

  photoGalleryThumbnailPhotosElement.appendChild(divElement);
}

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.clientWidth < 600) {
    nextPhotoElement.classList.remove("fa-2xl")
    previousPhotoElement.classList.remove("fa-2xl")

    nextPhotoElement.classList.add("fa-xl")
    previousPhotoElement.classList.add("fa-xl")

  }else{
    nextPhotoElement.classList.add("fa-2xl")
    previousPhotoElement.classList.add("fa-2xl")

    nextPhotoElement.classList.remove("fa-xl")
    previousPhotoElement.classList.remove("fa-xl")
  }
});

window.addEventListener("resize", () => {
  if (document.body.clientWidth < 600) {
    nextPhotoElement.classList.remove("fa-2xl")
    previousPhotoElement.classList.remove("fa-2xl")

    nextPhotoElement.classList.add("fa-xl")
    previousPhotoElement.classList.add("fa-xl")

  }else{
    nextPhotoElement.classList.add("fa-2xl")
    previousPhotoElement.classList.add("fa-2xl")

    nextPhotoElement.classList.remove("fa-xl")
    previousPhotoElement.classList.remove("fa-xl")
  }
});
