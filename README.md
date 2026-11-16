# Child Development & Autism Therapy Center

> A specialized, accessible, responsive multi-page web platform engineered for pediatric occupational therapy, sensory integration, developmental pediatrics, and autism care.

---

## 🌟 Key Features & Requirements Met

1. **Centered Navigation Bar & Action Order**:
   - Navigation links centered cleanly across desktop and tablet views.
   - Header actions arranged in exact required order: **Theme Toggle (`◐`)**, **RTL Toggle (`RTL`)**, and **Parent Portal (`Parent Portal ↗`)**.
   - Accessible mobile drawer menu with touch-friendly layout and no broken links.

2. **Dedicated Services Page (`services.html`)**:
   - Fully replaces the former gallery page across navigation and routing.
   - Highlights 6 core clinical pediatric therapies and 4 sensory-friendly clinical architecture cards.
   - Features reduced, balanced typography and responsive 2x2 grid on 768px view.
   - Includes interactive FAQ accordion and centered intake process.

3. **Parent Portal Dashboard with Left Sidebar (`dashboard.html`)**:
   - Complete clinical family dashboard featuring a sticky left sidebar menu.
   - Navigation tabs: Overview, Daily Log, Therapy Schedule, Milestone Progress, Assigned Tools, Clinical Notes, and Statements.
   - Displays real-time child profile (Aarav Sharma, age 5), key progress metrics, interactive appointment booking, and therapist clinical notes.

4. **Sensory Wooden Products & Carvings Catalog (`products.html`)**:
   - Dedicated catalog displaying realistic artisan wood carvings and tactile Montessori sensory tools.
   - Features 3rd-card middle centering on 768px viewport for "Why natural wood supports neurodivergent children".
   - Non-toxic finishes, organic beeswax sealing, splinter-free safety certifications.

5. **Curated Autism & Pediatric Therapy Imagery**:
   - Authentic, high-contrast photography strictly dedicated to child development, developmental pediatrics, sensory rooms, and autism therapy.
   - Distinct hero section designs: centered milestone layout for Home 1 and asymmetric 2-column spotlight layout for Home 2.
   - Verified parent testimonial author photos for Priya & Rajesh S. (Home 1) and Sneha & Karthik N. (Home 2).
   - Desktop hero background images with automated fallback handlers (`onerror`) across all pages.

6. **Authentication Experience (`login.html` & `register.html`)**:
   - Clean, centered card layout without distracting imagery or external community social links.
   - Brand logo and name aligned vertically with icon on top inside the auth card.
   - Password fields equipped with interactive show/hide eye toggle button (`👁`).
   - Registration page includes Confirm Password field and clinical consent checkbox.
   - Login page streamlined with "Remember this device" and "Forgot password?" link (removed terms checkbox and support box).

7. **Responsive & Accessible Design**:
   - Strict alignment at **768px**, **1024px**, tablet, and mobile breakpoints.
   - 3-card grids automatically center the 3rd odd card in 768px view.
   - 4-card developmental pillars and sensory architecture adapt to 2x2 on 768px and 1-column on mobile.
   - High-contrast social media icon buttons in both dark and light modes.
   - Floating Back to Top button (`↑`) on all pages.

---

## 📁 Project Structure

```
Child Development & Autism Therapy Center/
├── index.html            # Primary entry/landing page (Home 1)
├── home1.html            # Primary clinical landing page (Early intervention, milestones, programs)
├── home2.html            # Secondary modern clinic page (OT, speech, behavioral therapy, sensory gym)
├── services.html         # Clinical therapy programs & sensory-friendly clinic architecture
├── therapies.html        # Comprehensive clinical therapy programs & care pathways
├── therapists.html       # Multidisciplinary clinical team & pediatric specialists
├── products.html         # Hand-crafted wooden carvings & sensory tools catalog
├── contact.html          # Clinic inquiries, intake assessment booking & Chennai location map
├── dashboard.html        # Parent portal dashboard with left sidebar navigation
├── login.html            # Parent portal secure login
├── register.html         # Parent portal account registration
├── gallery.html          # Redirect helper to services.html
├── .nojekyll             # Bypasses Jekyll on GitHub Pages for clean root serving
├── assets/
│   ├── style.css         # Complete CSS styles, theme tokens, RTL rules, and responsive breakpoints
│   └── app.js            # Theme switcher, RTL toggle, drawer menu, eye password toggle, back-to-top
└── README.md             # Project documentation
```

---

## 🚀 Live Demo & Getting Started

1. Clone or download this repository:
   ```bash
   git clone https://github.com/HTMLStaticWorks-Org/Child_Development_Autism_Therapy_Center.git
   ```
2. Open `index.html` or any page directly in any modern web browser.
3. No build step or package dependencies required — runs completely client-side with native HTML5, CSS3, and modern ES6 JavaScript.

---

## 🤝 Clinical Programs & Specialties Covered
- Sensory Integration & Occupational Therapy (OT)
- Pediatric Speech, Language & AAC Communication
- Applied Behavioral Support & Play-Based Early Intervention
- Developmental Pediatric Consultations & Milestones Tracking
- Parent Guidance & Home Therapy Integration Toolkits
