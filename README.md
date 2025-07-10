# Landing Pages Project

This project is a collection of various landing pages built with Next.js, React, and Tailwind CSS. Each landing page is designed for a specific business category, demonstrating different layouts and components.

## Features

- **Multiple Landing Pages**: Dedicated pages for different business categories (e.g., Education, Entertainment, Health & Fitness, Hotel, Professional Services, Restaurant, Retail).
- **Responsive Design**: Built with Tailwind CSS for a mobile-first and responsive user experience.
- **Reusable Components**: Common UI elements are structured as reusable React components.
- **Fast Refresh**: Enjoy a fast development experience with Next.js's built-in Fast Refresh.

## Technologies Used

- **Next.js**: React framework for production.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: Superset of JavaScript that adds static types.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed.

- Node.js (v18 or later recommended)
- npm (v8 or later) or Yarn (v1.22 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Eko-347m4n/example-web.git
   cd landing-pages
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The pages auto-update as you edit the file.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This command optimizes the project for production, creating an optimized build in the `.next` directory.

### Running the Production Build

To run the built application in production mode:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
.
├── landing-pages/
│   ├── .next/                  # Next.js build output (ignored by Git)
│   ├── node_modules/           # Project dependencies
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── app/                # Next.js App Router pages
│   │   │   ├── globals.css     # Global styles
│   │   │   ├── layout.tsx      # Root layout
│   │   │   ├── page.tsx        # Home page
│   │   │   ├── [category]/page.tsx # Dynamic category pages
│   │   └── components/         # Reusable React components
│   │       ├── common/         # Common layout components (Header, Footer, HeroSection)
│   │       └── ui/             # Generic UI components (Button, Card)
│   ├── .gitignore              # Specifies intentionally untracked files to ignore
│   ├── package.json            # Project metadata and scripts
│   ├── next.config.mjs         # Next.js configuration
│   ├── postcss.config.mjs      # PostCSS configuration
│   ├── tailwind.config.ts      # Tailwind CSS configuration
│   └── tsconfig.json           # TypeScript configuration
└── README.md
```
