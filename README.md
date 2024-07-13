# Adonis fullstack application

## Installation

Follow these steps to set up the backend locally.

### 1. Clone the repository

### 2. Run the command npm install

### 2. In file .env write your username and password for the database

### 3. Run the command adonis serve --dev for starting the server

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
