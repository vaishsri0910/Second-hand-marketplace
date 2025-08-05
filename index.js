// Scroll arrow for categories
function scrollRight() {
  const container = document.getElementById("category-scroll");
  container.scrollBy({ left: 200, behavior: "smooth" });
}

// Wait for DOM before attaching events
document.addEventListener("DOMContentLoaded", function () {
  // Search Button Handler
  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-input");

  searchBtn.addEventListener("click", function () {
    const query = searchInput.value.trim();
    if (query) {
      alert(`You searched for: ${query}`);
    } else {
      alert("Please enter a product name.");
    }
  });

  // Dark Mode Toggle
  const darkSwitch = document.getElementById("darkModeSwitch");

  if (darkSwitch) {
    // Load saved mode
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      darkSwitch.checked = true;
    }

    // Toggle event
    darkSwitch.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  } else {
    console.warn("Dark mode switch not found in DOM");
  }
});


const wishlistItems = [
  {
    id: 1,
    name: "Vintage Watch",
    image: "face cards/bike.jpg",
    description: "Classic style, well-maintained.",
  },
  {
    id: 2,
    name: "Leather Bag",
    image: "face cards/book.jpg",
    description: "Genuine leather shoulder bag.",
  },
  {
    id: 3,
    name: "Retro Lamp",
    image: "face cards/fashion.jpg",
    description: "Adds aesthetic warmth to your space.",
  },
];

function loadWishlist() {
  const wishlistContainer = document.getElementById("wishlist");
  wishlistContainer.innerHTML = "";

  wishlistItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "wishlist-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <button class="remove-btn" onclick="removeFromWishlist(${index})">Remove</button>
      </div>
    `;
    wishlistContainer.appendChild(card);
  });
}

function removeFromWishlist(index) {
  wishlistItems.splice(index, 1);
  loadWishlist();
}

document.addEventListener("DOMContentLoaded", loadWishlist);

// dropdown

{/* <script> */}
  const flagImg = document.getElementById('selected-flag');
  const label = document.getElementById('selected-label');
  const dropdownContent = document.getElementById('dropdown-content');

  dropdownContent.addEventListener('click', function (e) {
    const target = e.target.closest('a');
    if (!target) return;

    e.preventDefault();

    // Get country code and name
    const code = target.getAttribute('data-code');
    const name = target.textContent.trim();

    // Update main label and flag
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    label.innerHTML = `${name} ▾`;

    // Move selected to top
    dropdownContent.prepend(target);
  });
{/* </script> */}

