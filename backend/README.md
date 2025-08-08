# Backend API

This is a Node.js Express backend that provides an AI agent service using Google's Gemini API.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the backend directory with your API key:
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=5000
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Deployment to Render

### Prerequisites
- A Render account
- Your Google Gemini API key

### Steps to Deploy

1. **Push your code to GitHub**
   - Make sure your backend folder is in a Git repository
   - Push to GitHub

2. **Create a new Web Service on Render**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository

3. **Configure the Web Service**
   - **Name**: Choose a name for your service (e.g., "ai-agent-backend")
   - **Root Directory**: Leave empty (if backend is in root) or set to `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Choose Free or Paid plan

4. **Set Environment Variables**
   - In the Render dashboard, go to your service settings
   - Add the following environment variable:
     - **Key**: `GEMINI_API_KEY`
     - **Value**: Your actual Gemini API key

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

### Environment Variables Required
- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Render will automatically set this (you don't need to set it manually)

### API Endpoints
- `POST /api/ask`: Send user input and get AI-generated step-by-step advice

### Notes
- Render will automatically assign a URL to your service
- The service will automatically restart when you push changes to your GitHub repository
- Make sure your `.env` file is in `.gitignore` to avoid exposing your API key
