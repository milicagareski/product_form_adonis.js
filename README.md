# Product Form Backend

This is the backend for the Product Form application, built using AdonisJS. It handles server-side logic, API endpoints, and manages product data using SQLite.

## Overview

The Product Form Backend supports the front end by providing API endpoints for managing products. It uses AdonisJS, a Node.js web framework, and SQLite for the database.

## Features

- **API Endpoints**: Provide CRUD operations for products.
- **SQLite Integration**: Use SQLite for database management.
- **AdonisJS Framework**: Utilize AdonisJS for building a robust backend.

## Technologies Used

- **AdonisJS**: A fully-featured web framework for Node.js.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **SQLite**: A lightweight database for storing product data.

## Installation

Follow these steps to set up the backend locally.

### Prerequisites

Make sure you have Node.js and npm installed.

### Setup

1. **Clone the repository**:

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   In the `.env` file, set your username and password for the database.

4. **Run Migrations**:

   Run the following command to apply the database migrations:

   ```bash
   adonis migration:run
   ```

5. **Start the Development Server**:

   Start the server using the following command:

   ```bash
   adonis serve --dev
   ```

6. **Open your browser** and go to [http://localhost:3333](http://localhost:3333) to access the backend.
