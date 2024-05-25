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

- `POST /api/trades/upload`: Upload and parse a CSV file
- `POST /api/balance`: Get asset balance at a given timestamp

## Example CSV Format

