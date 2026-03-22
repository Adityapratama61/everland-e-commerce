# 🛍️ Everland — Fashion E-commerce Landing Page

Project ini merupakan hasil pembelajaran saya dalam mempelajari **React JS** dan **Tailwind CSS**, sekaligus sebagai project nyata yang saya jadikan bagian dari portofolio saya.

Landing page ini terinspirasi dari design komunitas Figma:
🔗 [Fashion E-commerce Website – Figma Community](https://www.figma.com/design/jKEtdaIIkFNKbcO6cUfIDZ/Fashion-E-commerce-Website--Community-?node-id=0-1&p=f&t=sWEnlzYJpe4AvluS-0)

---

## 📸 Preview

### Desktop
<img width="2548" height="1464" alt="Macbook-Air-localhost (1)" src="https://github.com/user-attachments/assets/9c141f17-1e53-471f-ae84-bf7400ccf5a5" />


### Mobile
<img width="738" height="1494" alt="iPhone-12-PRO-localhost" src="https://github.com/user-attachments/assets/d43898c0-f285-49ed-9274-2766094c12ad" />


---

## ✨ Fitur

- 🧭 **Sticky Navbar** dengan mega menu dropdown saat hover (Women, Men, About, Everworld Stories)
- 📢 **Announcement Bar** di bagian paling atas halaman
- 🗂️ **Category Sub-Nav** dengan highlight merah di label Sale
- 🖼️ **Hero Section** dengan background image full-width dan tombol CTA
- 🏷️ **Shop by Category** — grid 6 kategori produk dengan efek zoom saat hover
- 🎨 **Editorial Grid** — layout 3 kolom dengan overlay label dan efek hover
- 🌿 **Mission Banner** — section brand mission full-width
- 🛒 **Product Carousel** — scroll horizontal dengan navigasi tombol prev/next
- 💬 **Testimonial Section** — ulasan pelanggan disertai foto
- 📰 **Blog Section** — layout 2 kolom artikel
- 📸 **Community Section** — carousel foto dari pelanggan
- 🛡️ **Trust Icons** — badge Pengiriman, Kualitas, dan Toko
- 🦶 **Footer** — 4 kolom link navigasi dengan copyright
- 🎬 **Scroll Animation** — animasi fade-up, fade-left, fade-right, dan zoom di setiap section menggunakan Intersection Observer API
- 📱 **Responsive** — tampilan mobile dengan hamburger menu

---

## 💡 Apa yang Saya Pelajari

Project ini saya buat untuk memperdalam pemahaman saya terhadap:

- **Component-based architecture** — memecah UI menjadi komponen kecil yang reusable
- **React Hooks** — penggunaan `useState`, `useRef`, dan custom hook (`useScrollAnimation`)
- **Tailwind CSS v4** — utility-first styling dengan pendekatan modern
- **Intersection Observer API** — untuk membuat animasi scroll tanpa library tambahan
- **Responsive Design** — menyesuaikan tampilan untuk berbagai ukuran layar
- **Structuring a real project** — mengorganisir file dan folder seperti project nyata

---

## 🗂️ Struktur Project

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

| Teknologi | Versi |
|---|---|
| React | ^19 |
| Tailwind CSS | v4 |
| Vite | ^6 |

---

## 🚀 Cara Menjalankan Project

### Prasyarat

- Node.js >= 18
- npm >= 9

### Instalasi

```bash
# 1. Clone repository ini
git clone https://github.com/Adityapratama61/everland-e-commerce.git

# 2. Masuk ke folder project
cd everland-e-commerce

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser kamu.

### Build untuk Production

```bash
npm run build
```

### Preview Build Production

```bash
npm run preview
```

---

## 🎨 Referensi Design

Design diambil dari Figma Community:

🔗 [Fashion E-commerce Website – Figma Community](https://www.figma.com/design/jKEtdaIIkFNKbcO6cUfIDZ/Fashion-E-commerce-Website--Community-?node-id=0-1&p=f&t=sWEnlzYJpe4AvluS-0)

---

## 📄 Lisensi

Project ini dibuat untuk keperluan **pembelajaran dan portofolio pribadi**.  
Kredit design sepenuhnya milik desainer komunitas Figma yang bersangkutan.
