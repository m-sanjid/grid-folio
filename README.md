# Gridfolio

A modern, bento-grid developer portfolio template built with **Next.js**, **Tailwind CSS**, and **TypeScript**. Easily showcase your projects, skills, and contact information with a beautiful, responsive design.

---

## ✨ Features

- ⚡️ Next.js 15, React 19, TypeScript
- 🎨 Tailwind CSS for rapid UI development
- 🌗 Light/Dark mode toggle
- 🖼️ Project grid with hover effects
- 📬 Newsletter/contact form (email via SMTP)
- 🧩 Modular components (About, Projects, Tech Stack, etc.)
- 📱 Responsive and mobile-friendly
- 🔗 Social links and share buttons
- 🛠️ Easy customization

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/m-sanjid/grid-folio.git
cd gridfolio
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
bun install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following variables for the newsletter/contact form to work:

```env
# Email for receiving contact form submissions
CONTACT_EMAIL=your@email.com

# SMTP configuration (example for Gmail SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your@email.com
SMTP_PASSWORD=your_app_password
```

> **Note:** For Gmail, you may need to use an App Password and enable "Less secure app access".

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

---

## 🛠️ Customization

- **Profile & About:** Edit `components/Intro.tsx` and `components/About.tsx` to update your name, bio, and resume link.
- **Projects:** Add or modify projects in `lib/constants.tsx` (update title, description, image, link, etc.).
- **Contact:** Update your email in `components/Contact.tsx` and `.env.local`.
- **Social Links:** Edit `components/Navigation.tsx` to add your social profiles.
- **Images:** Replace images in the `public/` directory as needed.
- **Theme:** Tweak colors and styles in `tailwind.config.ts` and `app/globals.css`.

---

## 🏗️ Project Structure

```txt
app/            # Next.js app directory (pages, layout, API routes)
components/     # Reusable React components
lib/            # Constants and utility functions
public/         # Static assets (images, icons)
hooks/          # Custom React hooks
```

---

## 📨 Deployment

You can deploy this portfolio to any platform that supports Next.js, such as **Vercel**, **Netlify**, or your own server.

### Deploy to Vercel

1. Push your code to GitHub/GitLab.
2. Go to [vercel.com](https://vercel.com/) and import your repository.
3. Set the environment variables in the Vercel dashboard.
4. Deploy!

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> **Template Credits:**  
> Built by [Muhammed Sanjid](https://github.com/m-sanjid) — inspired by modern portfolio and bento grid designs.
