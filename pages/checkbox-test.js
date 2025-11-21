import { useState } from "react";
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
  });

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

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-2xl font-bold mb-6">Checkbox Component Test</h1>
      
      <div className="w-80 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Default Checkbox</h2>
        <CheckboxComponents
          index={1}
          title="Default Checkbox"
          onChange={handleChange(1)}
          isDisabled={false}
          value={checkboxStates[1]}
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Disabled Checkbox</h2>
        <CheckboxComponents
          index={2}
          title="Disabled Checkbox"
          onChange={handleChange(2)}
          isDisabled={true}
          value={checkboxStates[2]}
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Pre-checked Checkbox</h2>
        <CheckboxComponents
          index={3}
          title="Pre-checked Checkbox"
          onChange={handleChange(3)}
          isDisabled={false}
          value={checkboxStates[3]}
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Small Size</h2>
        <CheckboxComponents
          index={4}
          title="Small Checkbox"
          onChange={handleChange(4)}
          isDisabled={false}
          value={checkboxStates[4]}
          size="sm"
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Large Size</h2>
        <CheckboxComponents
          index={5}
          title="Large Checkbox"
          onChange={handleChange(5)}
          isDisabled={false}
          value={checkboxStates[5]}
          size="lg"
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Success Variant</h2>
        <CheckboxComponents
          index={6}
          title="Success Checkbox"
          onChange={handleChange(6)}
          isDisabled={false}
          value={checkboxStates[6]}
          variant="success"
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Danger Variant</h2>
        <CheckboxComponents
          index={7}
          title="Danger Checkbox"
          onChange={handleChange(7)}
          isDisabled={false}
          value={checkboxStates[7]}
          variant="danger"
        />
        
        <h2 className="text-lg font-semibold mb-4 mt-6">With Custom Aria Label</h2>
        <CheckboxComponents
          index={8}
          title="Custom Aria Label"
          onChange={handleChange(8)}
          isDisabled={false}
          value={checkboxStates[8]}
          ariaLabel="This is a custom accessibility label"
        />
        
        <div className="mt-6">
          <button 
            onClick={toggleIndeterminate}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-2 px-4 rounded-lg mr-2"
          >
            Toggle State for Indeterminate Demo
          </button>
          <p className="mt-2 text-sm text-gray-600">
            Note: Indeterminate state is controlled programmatically
          </p>
        </div>
      </div>
    </div>
  );
}