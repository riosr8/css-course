const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");

selectPlanButtons.forEach((planButton) => {
  planButton.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});

const closeModal = () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
};

backdrop.addEventListener("click", closeModal);

modalNoButton.addEventListener("click", closeModal);
