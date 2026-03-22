# 🛍️ Everland — Fashion E-commerce Landing Page

A modern fashion e-commerce landing page built with **React JS** and **Tailwind CSS v4**, inspired by the [Fashion E-commerce Website Figma design](https://www.figma.com/design/jKEtdaIIkFNKbcO6cUfIDZ/Fashion-E-commerce-Website--Community-?node-id=0-1&p=f&t=sWEnlzYJpe4AvluS-0).

---

## 📸 Preview

### Desktop
![Desktop Preview](./src/assets/preview-desktop.png)

### Mobile
![Mobile Preview](./src/assets/preview-mobile.png)

---

## ✨ Features

- 🧭 **Sticky Navbar** with mega menu dropdown on hover (Women, Men, About, Everworld Stories)
- 📢 **Announcement Bar** at the top
- 🗂️ **Category Sub-Nav** with Sale highlight in red
- 🖼️ **Hero Section** with full-width background image and CTA
- 🏷️ **Shop by Category** — 6 category grid with hover zoom effect
- 🎨 **Editorial Grid** — 3-column layout with overlay labels
- 🌿 **Mission Banner** — full-width brand mission section
- 🛒 **Product Carousel** — horizontal scroll with prev/next navigation
- 💬 **Testimonial Section** — customer review with photo
- 📰 **Blog Section** — 2-column article layout
- 📸 **Community Section** — UGC photo carousel
- 🛡️ **Trust Icons** — Shipping, Quality, Store badges
- 🦶 **Footer** — 4-column links with copyright
- 🎬 **Scroll Animations** — fade-up, fade-left, fade-right, zoom on every section
- 📱 **Fully Responsive** — mobile hamburger menu included

---

## 🗂️ Project Structure

```
src/
├── assets/
│   ├── blog-img/
│   ├── community/
│   ├── editorial/
│   ├── favorite/
│   ├── shop-category/
│   ├── bg.jpg
│   └── clean-up.jpg
├── components/
│   ├── AnnouncementBar.jsx
│   ├── AnimatedSection.jsx
│   ├── BlogSection.jsx
│   ├── CategoryNav.jsx
│   ├── CommunitySection.jsx
│   ├── EditorialGrid.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MissionBanner.jsx
│   ├── Navbar.jsx
│   ├── ProductCarousel.jsx
│   ├── ShopByCategory.jsx
│   ├── Testimonial.jsx
│   └── TrustIcons.jsx
├── hooks/
│   └── useScrollAnimation.js
├── App.jsx
└── index.css
```

---

## 🛠️ Tech Stack

| Tech | Version |
|---|---|
| React | ^19 |
| Tailwind CSS | v4 |
| Vite | ^6 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Adityapratama61/everland-e-commerce.git

# 2. Navigate to project folder
cd everland-e-commerce

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design Reference

Original Figma design by the community:

🔗 [Fashion E-commerce Website – Figma Community](https://www.figma.com/design/jKEtdaIIkFNKbcO6cUfIDZ/Fashion-E-commerce-Website--Community-?node-id=0-1&p=f&t=sWEnlzYJpe4AvluS-0)

---

## 📄 License

This project is for educational and portfolio purposes only.  
Design credits go to the original Figma community designer.
