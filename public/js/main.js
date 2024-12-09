const cards = document.querySelectorAll(".card__one");
const filterContainer = document.querySelector(".filterContent__container");
const cardFilters = document.querySelector(".card__filters");
const cardFiltersBody = document.querySelector(".card__filters-body");
const filterButton = document.querySelector(".filter__button");
const filterCardButton = document.querySelector(".bi-box-arrow-left");
const body = document.body;
const radioLabel = document.querySelectorAll(".radio-switch__label");
const filterButtonIcon = document.querySelector(".filterButton");
const icons = document.querySelectorAll(".filterButton");

[...cards].forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
  card.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      card.classList.toggle("is-flipped");
    }
  });
});

const toggleIcon = document.querySelector(".toggle__btn");
const toggleIconBtn = document.querySelector(".toggleIcon i");
const dropdownMenu = document.querySelector(".dropdown__menu");

toggleIcon.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleIconBtn.classList = isOpen ? "bi bi-x-lg" : "bi bi-list";
};

function toggleSidebar() {
  let isHidden = filterButton.getAttribute("aria-hidden") === "true";
  filterButton.setAttribute("aria-hidden", !isHidden);

  if (isHidden) {
    filterButtonIcon.setAttribute("tabindex", "0");
  } else {
    filterButtonIcon.setAttribute("tabindex", "-1");
  }
  filterContainer.classList.toggle("centered");
  cardFilters.classList.toggle("closed");
  filterButton.classList.toggle("show");
  filterCardButton.classList.toggle("closed");
  cardFiltersBody.classList.toggle("closed");
  body.classList.toggle("sidebar-open");

  if (screen.width < 768 && document.body.classList.contains("sidebar-open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function hideFilters() {
  if (window.innerWidth < 1100) {
    cardFilters.classList.add("closed");
    filterButton.classList.add("show");
    cardFiltersBody.classList.toggle("closed");
  } else {
    cardFilters.classList.remove("closed");
    filterButton.classList.remove("show");
  }
}

window.addEventListener("load", function () {
  hideFilters();
});

document.querySelectorAll(".radio-switch__marker").forEach(function (marker) {
  marker.addEventListener("click", function () {
    var radios = document.querySelectorAll(
      'input[type="radio"][role="switch"]'
    );
    var checked = Array.from(radios).find(function (radio) {
      return radio.checked;
    });
    var nextIndex = Array.from(radios).indexOf(checked) + 1;
    var next = radios[nextIndex];
    if (!next) {
      next = radios[0];
    }
    checked.checked = false;
    next.checked = true;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let labels = document.querySelectorAll(".radio-switch__label");
  let marker = document.querySelector(".radio-switch__marker");
  let switchWrapper = document.querySelector(".toggle__switch-wrapper");

  function toggleRadio(input) {
    if (input) {
      input.checked = true;
    }
  }

  function handleItemClick(item) {
    let radioInput = item.querySelector('input[type="radio"]');
    toggleRadio(radioInput);
  }

  labels.forEach(function (label) {
    label.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let radioInput = label.parentElement.querySelector(
          'input[type="radio"]'
        );
        if (radioInput) {
          toggleRadio(radioInput);
        }
      }
    });
  });
  icons.forEach(function (icon) {
    icon.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        toggleSidebar();
      }
    });
  });

  marker.addEventListener("click", function (event) {
    event.stopPropagation();
    switchWrapper.click();
  });

  switchWrapper.addEventListener("click", function (event) {
    const target = event.target;
    let item = target.closest(".radio-switch__item");
    if (item) {
      handleItemClick(item);
    }
  });
});

// Statistics counter
const counters = document.querySelectorAll(".content__statistics-numbers");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target + " +";
    }
  };
  updateCount();
});

const addAnotherRowBtn = document.getElementById("addAnotherRowBtn");
const removeRowBtn = document.getElementById("removeRowBtn");
const rowsContainer = document.getElementById("rowsContainer");
const templateRow = document.getElementById("templateRow");
let rowCount = 1;

// Function to update button visibility
function updateButtons() {
  removeRowBtn.style.display = rowCount > 1 ? "inline-block" : "none";
  addAnotherRowBtn.disabled = rowCount >= 5;
}

// Event listener for adding rows
addAnotherRowBtn.addEventListener("click", function () {
  if (rowCount < 5) {
    const newRow = templateRow.cloneNode(true);
    newRow.querySelectorAll("input").forEach((input) => (input.value = ""));
    newRow.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0; //
      select.removeAttribute("hidden");
    });
    rowsContainer.appendChild(newRow);
    rowCount++;
    updateButtons();
  }
});

// Event listener for removing the last row
removeRowBtn.addEventListener("click", function () {
  if (rowCount > 1) {
    const lastRow = rowsContainer.lastElementChild;
    if (lastRow) {
      rowsContainer.removeChild(lastRow);
      rowCount--;
      updateButtons();
    }
  }
});
updateButtons();

// Checkbox
function toggleCheckboxOnEnter(event) {
  if (event.key === "Enter") {
    const checkbox = event.target;
    checkbox.checked = !checkbox.checked;
  }

  const checkboxes = document.querySelectorAll(".form-check-input");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("keydown", toggleCheckboxOnEnter);
  });
}
