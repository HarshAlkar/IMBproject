// Configuration for API endpoints
const config = {
    // Development environment
    development: {
        apiUrl: "http://localhost:5000/api/ask"
    },
    // Production environment - Your actual Render URL
    production: {
        apiUrl: "https://ai-agent-backend-2uut.onrender.com/api/ask"
    }
};

// Get current environment
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const currentConfig = isDevelopment ? config.development : config.production;

// Export for use in other files
window.API_CONFIG = currentConfig;
