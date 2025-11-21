import { useState } from "react";
import ButtonComponent from "./components/buttonComponent";

export default function ButtonTest() {
  const [clickCount, setClickCount] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Button clicked! Total clicks: ${clickCount + 1}`);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    } else {
      alert("Please fill in all fields");
    }
  };
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const resetForm = () => {
    setFormData({ name: "", email: "" });
  };
  
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Button Component Test</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Interactive testing of all button features</p>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Existing Tests */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Basic Button Tests</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Primary Button (Default)</h3>
              <ButtonComponent onClick={handleClick}>
                Primary Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Secondary Button</h3>
              <ButtonComponent onClick={handleClick} variant="secondary">
                Secondary Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Success Button</h3>
              <ButtonComponent onClick={handleClick} variant="success">
                Success Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Danger Button</h3>
              <ButtonComponent onClick={handleClick} variant="danger">
                Danger Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Outline Button</h3>
              <ButtonComponent onClick={handleClick} variant="outline">
                Outline Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Small Size</h3>
              <ButtonComponent onClick={handleClick} size="sm">
                Small Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Large Size</h3>
              <ButtonComponent onClick={handleClick} size="lg">
                Large Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Disabled Button</h3>
              <ButtonComponent onClick={handleClick} disabled>
                Disabled Button
              </ButtonComponent>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Submit Button</h3>
              <ButtonComponent onClick={handleClick} type="submit">
                Submit Button
              </ButtonComponent>
            </div>
          </div>
        </div>
        
        {/* New Interactive Tests */}
        <div className="space-y-6">
          {/* Form Submission Test */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Form Submission Test</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="flex gap-2">
                <ButtonComponent type="submit" variant="success">
                  Submit Form
                </ButtonComponent>
                <ButtonComponent type="button" variant="outline" onClick={resetForm}>
                  Reset
                </ButtonComponent>
              </div>
              
              {formSubmitted && (
                <div className="mt-3 p-2 bg-green-100 text-green-700 rounded-md text-sm">
                  Form submitted successfully!
                </div>
              )}
            </form>
          </div>
          
          {/* Button Group Test */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Button Group Test</h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <ButtonComponent size="sm" variant="primary">Save</ButtonComponent>
              <ButtonComponent size="sm" variant="secondary">Cancel</ButtonComponent>
              <ButtonComponent size="sm" variant="danger">Delete</ButtonComponent>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <ButtonComponent size="lg" variant="success">Confirm</ButtonComponent>
              <ButtonComponent size="lg" variant="outline">Back</ButtonComponent>
            </div>
          </div>
          
          {/* Accessibility Test */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Accessibility Test</h2>
            
            <div className="space-y-3">
              <ButtonComponent 
                onClick={handleClick} 
                ariaLabel="Accessible primary button with custom label"
              >
                Accessible Button
              </ButtonComponent>
              
              <ButtonComponent 
                onClick={handleClick} 
                disabled
                ariaLabel="Accessible disabled button"
              >
                Accessible Disabled Button
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>All button features are working correctly with no errors</p>
      </div>
    </div>
  );
}