# Novara E-commerce Platform

A modern, full-stack e-commerce platform built with Next.js 15, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and TailwindCSS
- **Server Components**: Utilizes Next.js App Router and React Server Components
- **Product Management**: Browse, search, and filter products by category
- **Responsive Design**: Fully responsive UI that works on all devices
- **Type Safety**: Full TypeScript support throughout the application
- **Testing**: E2E testing with Cypress
- **Code Quality**: ESLint, Prettier, and TypeScript for code quality

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/ProNabowy/Novara.git
cd Novara
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
novara/
├── app/                   # Next.js App Router pages and layouts
├── components/           # Reusable React components
├── hooks/               # Custom React hooks
├── network/            # API and network related code
├── ui/                 # UI components and elements
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── public/             # Static assets
├── cypress/            # E2E tests
└── icons/              # SVG icons
```

## 🧪 Testing

Run E2E tests with Cypress:

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run

# Run E2E tests with dev server
npm run test:e2e:dev
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run svgr` - Convert SVGs to React components
- `npm run prettier` - Format code with Prettier
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run E2E tests
- `npm run test:e2e:dev` - Run E2E tests in development mode

## 🔍 Key Features Implementation

### Products Page

The products page (`app/products/page.tsx`) implements:

- Dynamic product filtering by category
- Search functionality
- Sorting options
- Pagination support
- Server-side rendering for optimal performance

Example usage of search parameters:

```typescript
// URL: /products?category=electronics&sortBy=price&search=laptop
interface SearchParams {
	category?: string | string[];
	sortBy?: string | string[];
	search?: string | string[];
	skip?: string;
}
```

## 🛡️ Type Safety

The application uses TypeScript throughout, with proper type definitions for:

- API responses
- Component props
- Route parameters
- Search parameters
- State management

## 🎨 Styling

- TailwindCSS for utility-first styling
- Responsive design with custom breakpoints
- Component-specific styles when needed

## 📦 Dependencies

### Production Dependencies

- Next.js 15.3.1
- React 19.0.0
- React Query
- Formik & Yup for form handling
- Axios for API requests

### Development Dependencies

- TypeScript
- ESLint
- Prettier
- Cypress
- TailwindCSS
- Various testing utilities

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **ProNabowy** - _Initial work_

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- TailwindCSS team for the utility-first CSS framework
- All contributors who help improve this project
