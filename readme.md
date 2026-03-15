# Node.js + Express + MongoDB Authentication Backend

A complete authentication backend with JWT tokens, bcrypt password hashing, and MongoDB.

## Features

- ✅ User signup with email validation
- ✅ User login with JWT token generation
- ✅ Password hashing with bcrypt
- ✅ JWT token verification middleware
- ✅ Protected routes
- ✅ Input validation
- ✅ Error handling

## Setup Instructions

### 1. Install Dependencies

```bash
cd /app/node-backend
npm install
```

### 2. Configure Environment Variables

Update the `.env` file with your settings:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d
```

### 3. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### 1. Signup (Register)

**POST** `/api/auth/signup`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65abc123...",
    "email": "user@example.com"
  }
}
```

### 2. Login

**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65abc123...",
    "email": "user@example.com"
  }
}
```

### 3. Get Current User (Protected)

**GET** `/api/auth/me`

**Headers:**
```
Authorization: Bearer <your_jwt_token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "65abc123...",
    "email": "user@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### 4. Health Check

**GET** `/health`

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Testing with cURL

### Signup:
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Get Current User:
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Project Structure

```
node-backend/
├── models/
│   └── User.js          # User model with password hashing
├── routes/
│   └── auth.js          # Authentication routes
├── middleware/
│   └── auth.js          # JWT verification middleware
├── .env                 # Environment variables
├── server.js            # Main server file
├── package.json         # Dependencies
└── README.md           # This file
```

## Security Features

- Passwords are hashed using bcrypt with salt rounds
- JWT tokens expire after 7 days (configurable)
- Email validation before registration
- Protected routes require valid JWT token
- No sensitive data in responses

## Error Responses

All errors follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "errors": [/* validation errors if any */]
}
```

## Notes

- Replace `JWT_SECRET` in `.env` with a strong secret key in production
- Update `MONGO_URI` with your MongoDB connection string
