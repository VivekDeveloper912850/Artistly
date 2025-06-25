Artistly.com – Performing Artist Booking Platform (Frontend Demo)

**Artistly.com** is a fictional performing artist booking platform built for learning and demo purposes. It allows **Event Planners** to discover artists and **Artist Managers** to onboard and manage artist details.

This project is a functional and responsive 3-4 page **frontend-only demo** built with **Next.js (App Router)**, **React**, and **Tailwind CSS**. It uses `localStorage` to simulate basic data persistence.

---

##  Features

- ✅ **Homepage** with artist categories
- ✅ **Artist Listing Page** with filters (Category, Location, Price)
- ✅ **Artist Onboarding Form** with validation (React Hook Form + Yup)
- ✅ **Manager Dashboard** to view submitted artists
- ✅ Fully responsive for **mobile and desktop**
- ✅ Hosted on [Vercel](https://vercel.com)

---

## 🛠 Tech Stack

- **Next.js (v13+ App Router)**
- **React Functional Components**
- **Tailwind CSS** (Utility-first styling)
- **ShadCN UI** (optional use)
- **React Hook Form + Yup** (form handling & validation)
- **LocalStorage** (temporary data storage)

---

## 📦 Folder Structure

/app
├── page.tsx # Homepage
├── onboard/page.tsx # Artist onboarding form
├── listing/page.tsx # Artist listing with filters
├── dashboard/page.tsx # Manager dashboard
/components
├── Header.tsx
├── Footer.tsx
└── ArtistCard.tsx
/data
└── artists.json # Dummy artist data (optional)
/styles
└── globals.css

yaml
Copy
Edit

---



## ▶️ Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/artistly.git
   cd artistly
Install dependencies

bash
Copy
Edit
npm install
Run the dev server

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.

🧠 Future Improvements
Here are a few things that can be improved in the future:

 Authentication system for managers and event planners

 Real database integration (e.g., Firebase, MongoDB, Supabase)

 Image upload to cloud storage (Cloudinary or Firebase)

 Booking request flow (Event planner to manager)

 Progressive Web App (PWA) support

 Pagination and search on listing page

 Dark mode toggle using useContext

 Charts and insights on dashboard (e.g., top categories)

 Reusable component library setup using ShadCN or Radix UI