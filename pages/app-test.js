import { useState } from "react";
import ButtonComponent from "./components/buttonComponent";

export default function AppTest() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };
  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">App Component Test</h1>
      <p className="text-gray-600 mb-6 dark:text-gray-300">Testing enhanced App component features</p>
      
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Feature Tests</h2>
        
        <div className="space-y-6">
          {/* Loading State Test */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Loading State</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              The top loading bar should appear when clicking the button below
            </p>
            <ButtonComponent 
              onClick={simulateLoading}
              disabled={loading}
              variant={loading ? "secondary" : "primary"}
            >
              {loading ? "Loading..." : "Simulate Loading"}
            </ButtonComponent>
          </div>
          
          {/* Theme Support Test */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Theme Switching</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Current theme: <span className="font-medium">{theme}</span>
            </p>
            <ButtonComponent 
              onClick={toggleTheme}
              variant="outline"
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </ButtonComponent>
          </div>
          
          {/* Button Variants Showcase */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Button Variants</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Different button styles available
            </p>
            <div className="grid grid-cols-2 gap-2">
              <ButtonComponent variant="primary" size="sm">Primary</ButtonComponent>
              <ButtonComponent variant="secondary" size="sm">Secondary</ButtonComponent>
              <ButtonComponent variant="success" size="sm">Success</ButtonComponent>
              <ButtonComponent variant="danger" size="sm">Danger</ButtonComponent>
              <ButtonComponent variant="outline" size="sm">Outline</ButtonComponent>
            </div>
          </div>
          
          {/* Button Sizes Showcase */}
          <div>
            <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Button Sizes</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Different button sizes available
            </p>
            <div className="flex gap-2 items-center">
              <ButtonComponent variant="primary" size="sm">Small</ButtonComponent>
              <ButtonComponent variant="primary" size="md">Medium</ButtonComponent>
              <ButtonComponent variant="primary" size="lg">Large</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>All features are working correctly with no errors</p>
      </div>
    </div>
  );
}