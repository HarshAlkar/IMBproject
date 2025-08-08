// Configuration for API endpoints
const config = {
    // Development environment
    development: {
        apiUrl: "http://localhost:5000/api/ask"
    },
    // Production environment - Update this with your actual Render URL
    production: {
        apiUrl: "https://your-render-backend-url.onrender.com/api/ask"
    }
};

// Get current environment
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const currentConfig = isDevelopment ? config.development : config.production;

// Export for use in other files
window.API_CONFIG = currentConfig;
