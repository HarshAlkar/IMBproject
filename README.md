# AI Career Buddy

A full-stack web application that provides AI-powered career guidance using Google's Gemini API.

## Project Structure

```
IBMproject/
├── backend/          # Node.js Express backend
│   ├── index.js      # Main server file
│   ├── package.json  # Backend dependencies
│   └── README.md     # Backend deployment guide
├── public/           # Frontend static files
│   ├── main.html     # Main HTML file
│   ├── main.css      # Styles
│   ├── main.js       # Frontend JavaScript
│   └── config.js     # API configuration
├── vercel.json       # Vercel deployment config
└── index.html        # Root redirect file
```

## Deployment Instructions

### Backend Deployment (Render)

1. **Deploy to Render**:
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Set Root Directory to `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variable: `GEMINI_API_KEY` = your actual API key

2. **Get your Render URL** (e.g., `https://your-app-name.onrender.com`)

### Frontend Deployment (Vercel)

1. **Update API Configuration**:
   - Edit `public/config.js`
   - Replace `your-render-backend-url.onrender.com` with your actual Render URL

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration

## Local Development

1. **Backend**:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. **Frontend**:
   - Open `public/main.html` in your browser
   - Or serve with a local server

## Environment Variables

### Backend (Render)
- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Automatically set by Render

### Frontend (Vercel)
- Update `public/config.js` with your Render backend URL

## API Endpoints

- `POST /api/ask`: Send user input and get AI-generated career advice

## Troubleshooting

### 404 Error on Vercel
- Make sure `vercel.json` is in the root directory
- Check that `public/main.html` exists
- Verify the redirect in `index.html` works

### CORS Issues
- Backend has CORS enabled for all origins
- If issues persist, check your Render URL in `config.js`

### API Connection Issues
- Verify your Render backend is running
- Check the API URL in `public/config.js`
- Ensure your `GEMINI_API_KEY` is set in Render
