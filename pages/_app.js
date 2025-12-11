import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  
  // Set theme class on body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };
  
  // Enhanced component with loading and error handling
  const EnhancedComponent = (props) => {
    // Show loading state during page transitions
    useEffect(() => {
      const handleStart = () => setLoading(true);
      const handleComplete = () => setLoading(false);
      
      // Simulate loading for demonstration
      handleStart();
      const timer = setTimeout(() => {
        handleComplete();
      }, 500);
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-1 bg-yellow-500 z-50" aria-label="Loading bar">
            <div className="h-full bg-yellow-500 animate-pulse"></div>
          </div>
        )}
        <Component {...props} theme={theme} toggleTheme={toggleTheme} />
      </>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-200">
      <EnhancedComponent {...pageProps} />
    </div>
  );
}
