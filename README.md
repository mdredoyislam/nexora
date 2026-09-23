# NEXORA

Premium Web3 Digital Asset & Portfolio Management Platform.

## Overview
NEXORA is a secure, scalable, and comprehensive digital asset management platform that bridges traditional fiat with Web3 crypto solutions. It allows users to send, receive, exchange, and manage their portfolio seamlessly with multiple currencies and cryptocurrencies.

## Architecture (Monorepo)
This project is structured as a monorepo containing multiple applications:

- **`apps/web`**: The main user-facing frontend (Next.js 14 App Router, Tailwind CSS, Wagmi). Features include landing page, user dashboard, wallet management, crypto exchange, and transaction history.
- **`apps/admin`**: The administrative dashboard (Next.js 14) for managing users, merchants, support tickets, and disputes, complete with real-time analytics.
- **`apps/api`**: The backend services and APIs powering the platforms.
- **`apps/mobile`**: The mobile application (React Native / Expo) for users on the go.

## Features
- **Multi-Currency Support**: Full support for fiat (USD, EUR, GBP, etc.) and crypto assets (BTC, ETH, LTC, etc.).
- **Crypto Exchange**: Built-in crypto trading and exchange functionalities.
- **Web3 Integration**: Secure wallet connectivity using Wagmi and Viem.
- **Instant Transfers**: Send and request money globally with minimal fees.
- **Merchant & Payment APIs**: Robust solutions for e-commerce and online payments.

## Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm or npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mdredoyislam/nexora.git
   cd nexora
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Apps
To run the web app in development mode:
```bash
npm run dev --workspace=apps/web
```

To run the admin app:
```bash
npm run dev --workspace=apps/admin
```

## Technologies Used
- Next.js 14 (App Router)
- React 19
- Tailwind CSS & shadcn/ui
- Wagmi & Viem for Web3
- Recharts for data visualization
