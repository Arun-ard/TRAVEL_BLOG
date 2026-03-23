// Sample blog posts data
const posts = [
  {
    id: 0,
    title: "Kerala-God's Own Country",
    category: "Kerala",
    date: "March 12, 2025",
    excerpt: "Kerala (often called God's Own Country) is the southwestern state in India known for its lush greenery, backwaters, beaches, hill stations.",
    image: "Eco-friendly-Travel-In-Kerala.jpg",
    gallery: [
      "kerala/176311869869170e6a7a793.jpeg",
      "kerala/kathakali.jpg",
      "kerala/1_PQFNCUeUuF1QS-uB_eswPA.jpg"
    ],
    youtube: "3qPGPJzscro",
    content: `
      <p>The sun rises slowly over the still waters. Kingfishers dart between coconut palms. Life moves at the pace of the current.</p>
      <p>For three days we lived on a kettuvallam — a rice boat turned houseboat — eating fresh karimeen pollichathu, drinking coconut water straight from the shell, and falling asleep to the sound of water lapping against wood.</p>
      <p><strong>Best time:</strong> December–March for clear skies, or June–September for lush greenery and fewer tourists.</p>
    `
  },
  {
    id: 1,
    title: "Munnar’s Tea Gardens — Emerald Hills & Misty Mornings",
    category: "nature",
    date: "February 19, 2025",
    excerpt: "Waking up to endless rolling tea plantations, misty mountains, and cool air — Munnar is a nature lover’s paradise.",
    image: "tea-gardens.jpg",
    gallery: ["munnar/4e119b87-00ed-47e2-bd34-7617d72cdd70.jpg",
              "munnar/istockphoto-511119924-612x612.jpg",
              "munnar/mattupetty-dam.jpg"],

    youtube: "1aOxFKkHnbY",
    content: `<p>This breathtaking hill station is famous for its endless rolling tea plantations, misty mountains, cool climate, and scenic viewpoints. It's perfect for nature lovers, with attractions like Eravikulam National Park (home to the Nilgiri Tahr) and Mattupetty Dam.</p>`
  },
  {
    id: 2,
    title: "Alleppey (Alappuzha) — Venice of the East",
    category: "backwaters",
    date: "January 8, 2025",
    excerpt: "Drift through serene backwaters on a traditional houseboat, surrounded by palm-fringed canals and authentic Kerala village life.",    
    image: "houseboats_in_kottayam_2_438-56a3be175f9b58b7d0d39246.jpg",
    gallery: ["alapuzha/download.jpg",
              "alapuzha/alappey-beach.jpg",
              "alapuzha/lighthouse.webp"],
    youtube: "m_6LhqQEsMM",
    content: `<p>Known as the "Venice of the East," Alleppey is renowned for its serene backwaters, palm-fringed canals, and iconic houseboat cruises where you can relax and enjoy authentic Kerala village life.</p>`
  },
  {
    id: 3,
    title: "Wayanad — Mystical Hills & Tribal Culture",
    category: "nature",
    date: "October 2024",
    excerpt: "Wayanad is a mystical hill station in Kerala known for its lush forests, waterfalls, and rich tribal culture.",    
    image: "IMG_0487.webp",
    gallery: ["wayanad/1656771413_arnold_antoo_yp6fohzfdvs_unsplash.jpg.webp",
              "wayanad/image.webp",
              "wayanad/chembra-peak.jpg"],
    youtube: "Ti5u3vTSB6Q",
    content: `<p>A lush green paradise with misty hills, dense forests, wildlife sanctuaries, waterfalls, and adventure spots like Chembra Peak and Edakkal Caves. Great for trekking, wildlife spotting, and escaping into nature.</p>`
  },
  {
    id: 4,
    title: "Thiruvananthapuram — City of Culture & Coastal Charm",
    category: "city",
    date: "October 2024",
    excerpt: "Thiruvananthapuram (Trivandrum) is Kerala’s vibrant capital.",    
    image: "napier-museum-thiruvananthapuram-kerala-1-attr-hero.jpg",
    gallery: ["trivandrum/trivandrum1.webp",
              "trivandrum/trivandrum2.jpg",
              "trivandrum/trivandrum3.jpg"],
    youtube: "CoTOnAxygZs",
    content: `<p>September–October is magic hour in Zermatt and Grindelwald. The larches turn bright gold.</p>`
  },
  {
    id: 5,
    title: "Varkala — Cliffside Beaches & Spiritual Vibes",
    category: "beach",
    date: "October 2024",
    excerpt: "Varkala is a coastal town in Kerala known for its stunning cliffside beaches and spiritual atmosphere.",    
    image: "1-varkala-cliff-varkala-kerala-attr-hero.jpg",
    gallery: ["varkala/832651196.jpg",
              "varkala/images.jpg",
              "varkala/kappil-beach-1727452074_793df661390d99a3fac2.webp"],
    youtube: "162UXsHCUDI",
    content: `<p>Famous for its dramatic red cliffs overlooking golden beaches and the Arabian Sea. It's a laid-back spot with great surfing, cliff-top cafes, yoga retreats, and stunning sunsets—very different from typical flat beaches.</p>`
  }
];

// DOM elements
const postsGrid     = document.getElementById("posts-grid");
const modal         = document.getElementById("post-modal");
const modalClose    = document.querySelector(".modal-close");
const modalHero     = document.getElementById("modal-hero");
const modalMeta     = document.getElementById("modal-meta");
const modalTitle    = document.getElementById("modal-title");
const modalContent  = document.getElementById("modal-content");
const videoWrapper  = document.getElementById("video-wrapper");
const galleryImgs   = [
  document.getElementById("gallery-1"),
  document.getElementById("gallery-2"),
  document.getElementById("gallery-3")
];

// Render all posts initially
function renderPosts(data = posts) {
  postsGrid.innerHTML = "";
  data.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <span class="category-tag">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(post.id));
    postsGrid.appendChild(card);
  });
}

// Filter posts
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.category;
    if (cat === "all") {
      renderPosts(posts);
    } else {
      renderPosts(posts.filter(p => p.category === cat));
    }
  });
});

// Open modal with post content
function openModal(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  modalHero.src = post.image;
  modalMeta.textContent = `${post.date}`;
  modalTitle.textContent = post.title;
  modalContent.innerHTML = post.content;

  // YouTube embed
  videoWrapper.innerHTML = post.youtube
    ? `<iframe src="https://www.youtube.com/embed/${post.youtube}" frameborder="0" allowfullscreen></iframe>`
    : "";

  // Gallery
  galleryImgs.forEach((img, i) => {
    img.src = post.gallery[i] || "";
    img.style.display = post.gallery[i] ? "block" : "none";
  });

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "";
  videoWrapper.innerHTML = ""; // stop video
}

// Events
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

document.getElementById("surprise-me").addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * posts.length);
  openModal(randomId);
});

// Mobile menu
document.querySelector(".mobile-menu-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("active");
});

// Init
renderPosts();

// Highlight current section in nav (optional improvement)
window.addEventListener("scroll", () => {
  const sections = ["home","posts","destinations","about"];
  let current = "";

  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el && window.scrollY >= el.offsetTop - 200) {
      current = sec;
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});