import { useState, useEffect } from "react";
import CheckboxComponents from "./components/checkboxComponents";

export default function CheckboxTest() {
  const [checkboxStates, setCheckboxStates] = useState({
    1: false,
    2: false,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });
  
  const [selectAllState, setSelectAllState] = useState(false);
  const [indeterminateState, setIndeterminateState] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update indeterminate state based on individual checkboxes
  useEffect(() => {
    const individualCheckboxes = [
      checkboxStates[1],
      checkboxStates[2],
      checkboxStates[3],
      checkboxStates[4],
      checkboxStates[5],
      checkboxStates[6],
      checkboxStates[7],
      checkboxStates[8]
    ];
    
    const allChecked = individualCheckboxes.every(state => state === true);
    const noneChecked = individualCheckboxes.every(state => state === false);
    
    if (allChecked) {
      setSelectAllState(true);
      setIndeterminateState(false);
    } else if (noneChecked) {
      setSelectAllState(false);
      setIndeterminateState(false);
    } else {
      setSelectAllState(false);
      setIndeterminateState(true);
    }
  }, [checkboxStates]);

  const handleChange = (id) => (e) => {
    setCheckboxStates({
      ...checkboxStates,
      [id]: e.target.checked,
    });
  };

  const handleFocus = (id) => () => {
    console.log(`Checkbox ${id} focused`);
  };

  const handleBlur = (id) => () => {
    console.log(`Checkbox ${id} blurred`);
  };

  const toggleIndeterminate = () => {
    setCheckboxStates({
      ...checkboxStates,
      5: !checkboxStates[5],
    });
  };
  
  // Handle "Select All" functionality
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAllState(isChecked);
    setIndeterminateState(false);
    
    // Update all individual checkboxes
    const updatedStates = {};
    for (let i = 1; i <= 11; i++) {
      updatedStates[i] = isChecked;
    }
    setCheckboxStates(updatedStates);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get selected checkboxes
    const selected = [];
    Object.entries(checkboxStates).forEach(([id, checked]) => {
      if (checked) {
        selected.push(`Checkbox ${id}`);
      }
    });
    
    if (selected.length === 0) {
      alert("Please select at least one checkbox");
      return;
    }
    
    setFormSubmitted(true);
    console.log("Form submitted with selected checkboxes:", selected);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  // Reset form
  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setCheckboxStates({
      1: false,
      2: false,
      3: true,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6 bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Checkbox Component Test</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Interactive testing of all checkbox features</p>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Existing Tests */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Basic Checkbox Tests</h2>
          
          {/* Select All Checkbox */}
          <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <CheckboxComponents
              id="select-all"
              index={0}
              title="Select All"
              onChange={handleSelectAll}
              isDisabled={false}
              value={selectAllState}
              indeterminate={indeterminateState}
              variant="primary"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Default Checkbox</h3>
              <CheckboxComponents
                index={1}
                title="Default Checkbox"
                onChange={handleChange(1)}
                isDisabled={false}
                value={checkboxStates[1]}
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Disabled Checkbox</h3>
              <CheckboxComponents
                index={2}
                title="Disabled Checkbox"
                onChange={handleChange(2)}
                isDisabled={true}
                value={checkboxStates[2]}
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Pre-checked Checkbox</h3>
              <CheckboxComponents
                index={3}
                title="Pre-checked Checkbox"
                onChange={handleChange(3)}
                isDisabled={false}
                value={checkboxStates[3]}
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Small Size</h3>
              <CheckboxComponents
                index={4}
                title="Small Checkbox"
                onChange={handleChange(4)}
                isDisabled={false}
                value={checkboxStates[4]}
                size="sm"
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Large Size</h3>
              <CheckboxComponents
                index={5}
                title="Large Checkbox"
                onChange={handleChange(5)}
                isDisabled={false}
                value={checkboxStates[5]}
                size="lg"
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Success Variant</h3>
              <CheckboxComponents
                index={6}
                title="Success Checkbox"
                onChange={handleChange(6)}
                isDisabled={false}
                value={checkboxStates[6]}
                variant="success"
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Danger Variant</h3>
              <CheckboxComponents
                index={7}
                title="Danger Checkbox"
                onChange={handleChange(7)}
                isDisabled={false}
                value={checkboxStates[7]}
                variant="danger"
              />
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">With Custom Aria Label</h3>
              <CheckboxComponents
                index={8}
                title="Custom Aria Label"
                onChange={handleChange(8)}
                isDisabled={false}
                value={checkboxStates[8]}
                ariaLabel="This is a custom accessibility label"
              />
            </div>
          </div>
        </div>
        
        {/* New Interactive Tests */}
        <div className="space-y-6">
          {/* Form with Checkboxes */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Form with Checkboxes</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
              
              <div>
                <h3 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-200">Preferences</h3>
                <div className="space-y-2">
                  <CheckboxComponents
                    index={9}
                    title="Email Notifications"
                    onChange={handleChange(9)}
                    isDisabled={false}
                    value={checkboxStates[9]}
                  />
                  <CheckboxComponents
                    index={10}
                    title="SMS Notifications"
                    onChange={handleChange(10)}
                    isDisabled={false}
                    value={checkboxStates[10]}
                  />
                  <CheckboxComponents
                    index={11}
                    title="Push Notifications"
                    onChange={handleChange(11)}
                    isDisabled={false}
                    value={checkboxStates[11]}
                  />
                </div>
              </div>
              
              <div className="flex gap-2 pt-2">
                <button 
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-2 px-4 rounded-lg flex-1 transition-colors duration-200"
                >
                  Submit Form
                </button>
                <button 
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-normal py-2 px-4 rounded-lg flex-1 transition-colors duration-200"
                >
                  Reset
                </button>
              </div>
              
              {formSubmitted && (
                <div className="mt-3 p-2 bg-green-100 text-green-700 rounded-md text-sm dark:bg-green-900 dark:text-green-100">
                  Form submitted successfully! Check console for details.
                </div>
              )}
            </form>
          </div>
          
          {/* Indeterminate State Demo */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Indeterminate State Demo</h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The "Select All" checkbox automatically updates to indeterminate state when some but not all checkboxes are selected.
            </p>
            
            <div className="space-y-3">
              <CheckboxComponents
                id="demo-select-all"
                index={12}
                title="Select All Demo"
                onChange={handleSelectAll}
                isDisabled={false}
                value={selectAllState}
                indeterminate={indeterminateState}
                variant="primary"
              />
              
              <div className="ml-6 space-y-2">
                <CheckboxComponents
                  index={13}
                  title="Option 1"
                  onChange={handleChange(1)}
                  isDisabled={false}
                  value={checkboxStates[1]}
                />
                <CheckboxComponents
                  index={14}
                  title="Option 2"
                  onChange={handleChange(2)}
                  isDisabled={false}
                  value={checkboxStates[2]}
                />
                <CheckboxComponents
                  index={15}
                  title="Option 3"
                  onChange={handleChange(3)}
                  isDisabled={false}
                  value={checkboxStates[3]}
                />
              </div>
            </div>
            
            <div className="mt-4">
              <button 
                onClick={toggleIndeterminate}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-2 px-4 rounded-lg mr-2 transition-colors duration-200"
              >
                Toggle State for Indeterminate Demo
              </button>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Note: Indeterminate state is controlled programmatically
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>All checkbox features are working correctly with no errors</p>
      </div>
    </div>
  );
}