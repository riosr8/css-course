const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanButtons.forEach((planButton) => {
  planButton.addEventListener("click", () => {
    backdrop.classList.add("open");
    if (modal) modal.classList.add("open");
  });
});

const closeModal = () => {
  backdrop.classList.remove("open");
  if (modal) modal.classList.remove("open");
};

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
