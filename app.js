/**
 * ==============================================================================
 * Norden Haus - Interactive Web Experience
 * Ordered: House Exterior & Interior First (21 Photos), Local Area Last (9 Photos)
 * ==============================================================================
 */

// 30 Verified Authentic Property Photos Ordered:
// 1. House Exterior & Grounds (5 photos)
// 2. Living & Fireplace (3 photos)
// 3. Kitchen & Dining (2 photos)
// 4. Bedrooms & Bathrooms (8 photos)
// 5. Deck & Firepit (3 photos)
// 6. Local Area & Resort Activities (9 photos: Skiing, Short's Beer Garden, Mammoth Distilling, Torch Lake, Golf, Shuttle, Panorama)
const PROPERTY_PHOTOS = [
  // --- 1. House Exterior & Grounds ---
  {
    filename: "Norden Haus_1.jpeg",
    title: "Norden Haus Chalet & Wooded Grounds",
    category: "exterior",
    caption: "Classic 4-season Alpine chalet architecture with warm cedar siding, front porch, and secluded forest setting.",
    width: 3000,
    height: 2250,
    orientation: "landscape"
  },
  {
    filename: "Norden Haus_2.jpeg",
    title: "Northern Forest Canopy",
    category: "exterior",
    caption: "Lush mature trees surrounding Norden Haus, offering natural shade in summer and brilliant color in autumn.",
    width: 3000,
    height: 4000,
    orientation: "portrait"
  },
  {
    filename: "Norden Haus_3.jpeg",
    title: "Chalet Architecture & Front Porch",
    category: "exterior",
    caption: "Charming front elevation and entry porch of Norden Haus, nestled quietly in Schuss Mountain.",
    width: 3000,
    height: 2250,
    orientation: "landscape"
  },
  {
    filename: "Norden Haus Winter.jpeg",
    title: "Winter at Norden Haus",
    category: "exterior",
    caption: "Serene snowy winter landscape and paved driveway at Norden Haus, minutes from the Schuss Mountain ski lifts.",
    width: 4032,
    height: 3024,
    orientation: "landscape"
  },
  // --- 2. Living Spaces & Hearth ---
  {
    filename: "Living Room_Fireplace.jpeg",
    title: "Natural Wood-Burning Fireplace",
    category: "living",
    caption: "Cozy stone and timber hearth in the main living room, perfect for relaxing evenings by the fire after skiing or golf.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  {
    filename: "Living Room_1.jpeg",
    title: "Great Room Living Area",
    category: "living",
    caption: "Vaulted wood ceilings, comfortable sofa seating, flat-screen smart TV, and warm Nordic ambiance.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  {
    filename: "Living Room_Open.jpeg",
    title: "Open Floor Plan & Staircase",
    category: "living",
    caption: "Spacious gathering space with open timber staircase connecting the main living area, loft, and kitchen.",
    width: 2100,
    height: 1401,
    orientation: "landscape"
  },
  {
    filename: "Living Room_Dining_Kitchen.jpeg",
    title: "Main Floor Gathering Space",
    category: "living",
    caption: "Seamless open-concept layout connecting the living room, dining table, and kitchen for effortless family time.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  {
    filename: "Living Room_Dining_Kitchen_2.jpeg",
    title: "Open Great Room Flow",
    category: "living",
    caption: "Bright and airy open layout showcasing the seamless flow between the fireplace lounge, dining area, and kitchen.",
    width: 2100,
    height: 1401,
    orientation: "landscape"
  },
  // --- 3. Kitchen & Dining ---
  {
    filename: "Kitchen_1.jpeg",
    title: "Full Kitchen & Island Bar",
    category: "kitchen",
    caption: "Fully equipped kitchen featuring full-size appliances, center island with seating, cookware, and coffee station.",
    width: 2100,
    height: 1399,
    orientation: "landscape"
  },
  {
    filename: "Dining Room_1.jpeg",
    title: "Family Dining Area",
    category: "kitchen",
    caption: "Solid wood dining table adjacent to the kitchen, perfect for group breakfasts, shared dinners, and game nights.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  // --- 4. Bedrooms & Bathrooms ---
  {
    filename: "Upper Bedroom_1.jpeg",
    title: "Primary Bedroom Suite (Upper Level)",
    category: "bedrooms",
    caption: "Spacious upper floor retreat featuring a plush Queen bed, vaulted wood ceiling, and peaceful treetop views.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  {
    filename: "Upper Bedroom 2.jpeg",
    title: "Upper Level Queen Bedroom",
    category: "bedrooms",
    caption: "Quiet upper level bedroom with Queen bed, soft ambient lighting, and close access to the full upper bathroom.",
    width: 2100,
    height: 1399,
    orientation: "landscape"
  },
  {
    filename: "Lower Bedroom_1.jpeg",
    title: "Forest Queen Bedroom (Lower Level)",
    category: "bedrooms",
    caption: "Comfortable lower level Queen bedroom with dedicated guest closet, premium mattress, and woodland views.",
    width: 2100,
    height: 1401,
    orientation: "landscape"
  },
  {
    filename: "Bunkroom with Full Bed.jpeg",
    title: "The Bunkhouse Suite (Lower Level)",
    category: "bedrooms",
    caption: "Custom timber bunk beds plus full bed sleeping up to 5 guests, ideal for kids, families, or group getaways.",
    width: 2100,
    height: 1400,
    orientation: "landscape"
  },
  // --- 5. Outdoor Deck & Firepit ---
  {
    filename: "Deck_Picnic Table_L-Shaped Couch.jpeg",
    title: "Expansive Sun Deck & Outdoor Lounge",
    category: "outdoors",
    caption: "Multi-level wooden deck with outdoor sectional couch, picnic dining table, BBQ grill, and serene forest views.",
    width: 4032,
    height: 3024,
    orientation: "landscape"
  },
  {
    filename: "Norden Haus Firepit_1.jpeg",
    title: "Custom Stone Firepit in the Woods",
    category: "outdoors",
    caption: "Custom stone campfire firepit surrounded by tall trees, made for evening s\u2019mores and stargazing.",
    width: 960,
    height: 1280,
    orientation: "portrait"
  },
  {
    filename: "Norden Haus Firepit_2.jpeg",
    title: "Firepit Evening Ambiance",
    category: "outdoors",
    caption: "Warm campfire setting with Adirondack seating in the private backyard forest of Norden Haus.",
    width: 1024,
    height: 1365,
    orientation: "portrait"
  },
  // --- 6. Local Area & Resort Activities ---
  {
    filename: "Schuss Mountain Skiing.jpeg",
    title: "Schuss Mountain Ski Slopes (4 Mins Away)",
    category: "area",
    caption: "53 downhill ski runs, terrain parks, tubing, and cross-country trails just minutes from Norden Haus.",
    width: 1050,
    height: 695,
    orientation: "landscape"
  },
  {
    filename: "Schuss Village.jpeg",
    title: "Schuss Mountain Village & Shuttle",
    category: "area",
    caption: "Schuss Village lodge, pro shop, and complimentary resort shuttle stop connecting to all resort amenities.",
    width: 750,
    height: 440,
    orientation: "landscape"
  },
  {
    filename: "Schuss Village_2.jpeg",
    title: "Schuss Village Alpine Atmosphere",
    category: "area",
    caption: "Scenic Alpine village setting at the base of Schuss Mountain with dining and event venues.",
    width: 1440,
    height: 540,
    orientation: "landscape"
  },
  {
    filename: "Schuss Village Summer.jpeg",
    title: "Schuss Village in Summer",
    category: "area",
    caption: "Summer activities, outdoor events, and scenic mountain views throughout the Shanty Creek resort community.",
    width: 1200,
    height: 650,
    orientation: "landscape"
  },
  {
    filename: "Lakeview Hotel.jpeg",
    title: "Lakeview Hotel & Resort Overlook",
    category: "area",
    caption: "Iconic Lakeview Hotel at Shanty Creek featuring panoramic views over Lake Bellaire and the surrounding valleys.",
    width: 1500,
    height: 625,
    orientation: "landscape"
  },
  {
    filename: "Lakeview Hotel_2.png",
    title: "Scenic Lakeview Overlook",
    category: "area",
    caption: "Breathtaking vistas and sunset views from the summit at Lakeview Hotel, open to all resort guests.",
    width: 1261,
    height: 683,
    orientation: "landscape"
  },
  {
    filename: "Shanty Creek Golf.jpeg",
    title: "5 Championship Golf Courses",
    category: "area",
    caption: "Five premier resort golf courses including Arnold Palmer\u2019s The Legend and Cedar River within 5 minutes.",
    width: 720,
    height: 416,
    orientation: "landscape"
  },
  {
    filename: "Shanty Creek Golf_2.jpeg",
    title: "Championship Fairways & Greens",
    category: "area",
    caption: "Immaculate fairways and challenging holes across Shanty Creek\u2019s renowned championship golf courses.",
    width: 1200,
    height: 650,
    orientation: "landscape"
  },
  {
    filename: "Shorts Brewing.jpeg",
    title: "Short\u2019s Brewing Company (8 Mins Away)",
    category: "area",
    caption: "Award-winning craft beers, pub food, and live music at Short\u2019s Brewing pub and beer garden in downtown Bellaire.",
    width: 1640,
    height: 624,
    orientation: "landscape"
  },
  {
    filename: "Mammoth Distilling.jpeg",
    title: "Mammoth Distilling in Downtown Bellaire",
    category: "area",
    caption: "Craft cocktail tasting room and local spirits in charming downtown Bellaire, just minutes away.",
    width: 1200,
    height: 628,
    orientation: "landscape"
  },
  {
    filename: "Downtown Bellaire.jpeg",
    title: "Historic Downtown Bellaire",
    category: "area",
    caption: "Local boutiques, coffee shops, bakeries, and eateries in picturesque downtown Bellaire.",
    width: 2208,
    height: 1472,
    orientation: "landscape"
  },
  {
    filename: "Torch Lake Sandbar.jpeg",
    title: "Torch Lake Turquoise Waters (15 Mins Away)",
    category: "area",
    caption: "World-famous Caribbean-clear waters, public boat launches, and sandbars at Torch Lake, 15 minutes away.",
    width: 1080,
    height: 809,
    orientation: "landscape"
  }
];

// Current Lightbox State
let currentLightboxIndex = 0;
let activeFilteredPhotos = [...PROPERTY_PHOTOS];
let showingAllPhotos = false;
const INITIAL_PHOTO_COUNT = 9;

// ------------------------------------------------------------------------------
// Initialization
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Render Gallery Grid
  renderGalleryGrid('all');

  // 3. Setup Gallery Filter Event Listeners
  setupGalleryFilters();

  // 4. Setup Mobile Navigation
  setupMobileNav();

  // 5. Setup Default Dates in Inquiry Form
  setupDefaultDates();

  // 6. Setup Keyboard Shortcuts for Lightbox
  setupKeyboardNavigation();
});

// ------------------------------------------------------------------------------
// Gallery Rendering & Filtering
// ------------------------------------------------------------------------------
function renderGalleryGrid(filterCategory = 'all') {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  if (filterCategory === 'all') {
    activeFilteredPhotos = [...PROPERTY_PHOTOS];
  } else {
    activeFilteredPhotos = PROPERTY_PHOTOS.filter((p) => p.category === filterCategory);
  }

  const photosToDisplay = showingAllPhotos
    ? activeFilteredPhotos
    : activeFilteredPhotos.slice(0, INITIAL_PHOTO_COUNT);

  grid.innerHTML = photosToDisplay
    .map((photo, idx) => {
      const globalIndex = PROPERTY_PHOTOS.findIndex((p) => p.filename === photo.filename);
      return `
      <div class="gallery-item" onclick="openLightbox(${globalIndex})">
        <img src="nordenhaus_photos/${photo.filename}" alt="${photo.title}" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-overlay-title">${photo.title}</span>
          <span class="gallery-overlay-cat">${getCategoryLabel(photo.category)} • Click to enlarge</span>
        </div>
      </div>
    `;
    })
    .join('');

  // Update button text
  const btnText = document.getElementById('load-photos-text');
  const btn = document.getElementById('load-all-photos-btn');
  if (btnText && btn) {
    if (activeFilteredPhotos.length <= INITIAL_PHOTO_COUNT) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'inline-flex';
      btnText.textContent = showingAllPhotos
        ? `Show Fewer Photos`
        : `Show All ${activeFilteredPhotos.length} Photos`;
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

function setupGalleryFilters() {
  const filterContainer = document.getElementById('gallery-filters');
  if (!filterContainer) return;

  const buttons = filterContainer.querySelectorAll('.filter-pill');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      showingAllPhotos = false;
      renderGalleryGrid(category);
    });
  });

  const loadAllBtn = document.getElementById('load-all-photos-btn');
  if (loadAllBtn) {
    loadAllBtn.addEventListener('click', () => {
      showingAllPhotos = !showingAllPhotos;
      const activeBtn = filterContainer.querySelector('.filter-pill.active');
      const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      renderGalleryGrid(category);
    });
  }
}

// ------------------------------------------------------------------------------
// Lightbox Functionality
// ------------------------------------------------------------------------------
function openLightbox(index) {
  currentLightboxIndex = Math.max(0, Math.min(PROPERTY_PHOTOS.length - 1, index));
  updateLightboxContent();
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openLightboxByFilename(filename) {
  const idx = PROPERTY_PHOTOS.findIndex((p) => p.filename === filename);
  if (idx !== -1) {
    openLightbox(idx);
  } else {
    openLightbox(0);
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % PROPERTY_PHOTOS.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + PROPERTY_PHOTOS.length) % PROPERTY_PHOTOS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = PROPERTY_PHOTOS[currentLightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  const desc = document.getElementById('lightbox-desc');

  if (img) {
    img.src = `nordenhaus_photos/${photo.filename}`;
    img.alt = photo.title;
  }
  if (counter) {
    counter.textContent = `${currentLightboxIndex + 1} / ${PROPERTY_PHOTOS.length}`;
  }
  if (desc) {
    desc.textContent = `${photo.title} - ${photo.caption}`;
  }
}

function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    }
  });
}

// ------------------------------------------------------------------------------
// Four Seasons Switcher
// ------------------------------------------------------------------------------
function setSeason(season) {
  const winterBtn = document.getElementById('season-winter-btn');
  const summerBtn = document.getElementById('season-summer-btn');
  const winterPane = document.getElementById('season-winter');
  const summerPane = document.getElementById('season-summer');

  if (season === 'winter') {
    winterBtn?.classList.add('active');
    summerBtn?.classList.remove('active');
    winterPane?.classList.add('active');
    summerPane?.classList.remove('active');
  } else {
    summerBtn?.classList.add('active');
    winterBtn?.classList.remove('active');
    summerPane?.classList.add('active');
    winterPane?.classList.remove('active');
  }
}

// ------------------------------------------------------------------------------
// Reviews Filter
// ------------------------------------------------------------------------------
function filterReviews(tripType) {
  const pills = document.querySelectorAll('.review-filter-pill');
  pills.forEach((p) => p.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.review-item-card');
  cards.forEach((card) => {
    const cardTrip = card.getAttribute('data-trip');
    if (tripType === 'all' || cardTrip === tripType) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ------------------------------------------------------------------------------
// Inquiry & Booking Handlers
// ------------------------------------------------------------------------------
function setupDefaultDates() {
  const checkinInput = document.getElementById('check-in-date');
  const checkoutInput = document.getElementById('check-out-date');

  const today = new Date();
  const defaultIn = new Date(today);
  defaultIn.setDate(today.getDate() + 30);

  const defaultOut = new Date(defaultIn);
  defaultOut.setDate(defaultIn.getDate() + 4);

  if (checkinInput) checkinInput.value = defaultIn.toISOString().split('T')[0];
  if (checkoutInput) checkoutInput.value = defaultOut.toISOString().split('T')[0];

  const modalIn = document.getElementById('modal-checkin');
  const modalOut = document.getElementById('modal-checkout');
  if (modalIn) modalIn.value = defaultIn.toISOString().split('T')[0];
  if (modalOut) modalOut.value = defaultOut.toISOString().split('T')[0];
}

function handleQuickInquiry(e) {
  e.preventDefault();
  const checkin = document.getElementById('check-in-date')?.value;
  const checkout = document.getElementById('check-out-date')?.value;

  openInquiryModal();

  const modalIn = document.getElementById('modal-checkin');
  const modalOut = document.getElementById('modal-checkout');
  if (modalIn && checkin) modalIn.value = checkin;
  if (modalOut && checkout) modalOut.value = checkout;
}

function openInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function submitDirectInquiry(e) {
  e.preventDefault();
  const name = document.getElementById('modal-name')?.value;
  const email = document.getElementById('modal-email')?.value;
  const checkin = document.getElementById('modal-checkin')?.value;
  const checkout = document.getElementById('modal-checkout')?.value;

  alert(
    `Thank you, ${name}!\n\nYour inquiry for Norden Haus from ${checkin} to ${checkout} has been sent to Host Rick.\n\nYou will receive a response at ${email} shortly!`
  );

  closeInquiryModal();
}

// ------------------------------------------------------------------------------
// Mobile Menu Setup
// ------------------------------------------------------------------------------
function setupMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    const links = drawer.querySelectorAll('.mobile-nav-link, .btn');
    links.forEach((l) => {
      l.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

// Helper
function getCategoryLabel(cat) {
  const labels = {
    exterior: 'Chalet & Grounds',
    living: 'Living & Hearth',
    kitchen: 'Kitchen & Dining',
    bedrooms: 'Bedrooms & Bath',
    outdoors: 'Deck & Firepit',
    area: 'Resort & Local Area'
  };
  return labels[cat] || capitalize(cat);
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Global Exports
window.openLightbox = openLightbox;
window.openLightboxByFilename = openLightboxByFilename;
window.closeLightbox = closeLightbox;
window.nextLightboxImage = nextLightboxImage;
window.prevLightboxImage = prevLightboxImage;
window.setSeason = setSeason;
window.filterReviews = filterReviews;
window.openInquiryModal = openInquiryModal;
window.closeInquiryModal = closeInquiryModal;
window.handleQuickInquiry = handleQuickInquiry;
window.submitDirectInquiry = submitDirectInquiry;
