# TruPay

TruPay is a financial SaaS platform that provides a finance management dashboard, allowing users to connect multiple bank accounts, view real-time transactions, and transfer money to other users on the platform.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/trupay.git
cd trupay
npm install
```
  ### or
 ```
yarn install
```

## Running the Development Server

To start the development server, run the following command:
```
npm run dev
```    
 ### or
```
yarn dev
```

Open http://localhost:3000 with your browser to see the result.


## Building for Production

To build the application for production, run:

```
npm run build
```
 ### or
```
yarn build
```

This creates an optimized production build of your app, ready to be deployed. To run the production build locally:

```
npm run start
```
 ### or
```
yarn start
```


## Environment Variables

Create a .env.local file in the root directory and add any environment variables needed for your project, such as API keys:
```
NEXT_PUBLIC_TELLER_API_KEY=your_api_key_here
```
 Add other environment variables as needed


## Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial. You can check out the Teller API Documentation for information on integrating with the Teller API.
