# Kasirooms

A Next.js-based videochat platform with wallet integration.

## Features

- Videochat lobby system
- User profiles
- Wallet functionality
- Responsive design using Kasynoir CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:

```bash
npm run build
```

### Lint

Check code quality:

```bash
npm run lint
```

## Project Structure

- `/src/app` - Next.js app router pages
  - `/lobby` - Video room lobby
  - `/profile` - User profile page
  - `/wallet` - Wallet management
- `/public` - Static assets including Kasynoir CSS

## License

Private project