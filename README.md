# Trade Parser and Balance Calculator

This is a Node.js application for parsing cryptocurrency trade data from CSV files and calculating asset balances at a given timestamp.

## Features

- Upload CSV files containing trade data
- Store parsed data in MongoDB
- Calculate asset balances at a given timestamp

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` file
4. Start the server: `npm start`

## API Endpoints

- `POST /trades/upload`: Upload and parse a CSV file
- `POST /balance/getBalance`: Get asset balance at a given timestamp

## File Structure

KOINX-ASSIGNMENT/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── tradeController.js    # Controller for handling trade-related logic
│   └── balanceController.js  # Controller for handling balance-related logic
├── middlewares/
│   └── errorHandler.js       # Middleware for handling errors
├── models/
│   └── trade.js              # Mongoose schema for Trade
├── routes/
│   └── index.js              # Main router
│   └── tradeRoutes.js        # Routes for trade-related endpoints
│   └── balanceRoutes.js      # Routes for balance-related endpoints
├── services/
│   └── tradeService.js       # Service for trade-related operations
│   └── balanceService.js     # Service for balance calculation
├── utils/
│   └── csvParser.js          # Utility for parsing CSV files
├── .env.sample               # Sample environment variables
├── .gitignore                # Git ignore file
├── package.json              # Package.json file
├── README.md                 # Project README file
└── server.js                 # Entry point of the application

## Deployment
1. Deployed MongoDB server on MongoAtlas
2. Deployed Backend(Node) Server on Render