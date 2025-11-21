import ButtonComponent from "./components/buttonComponent";

export default function AppTest() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-2xl font-bold mb-6">App Component Test</h1>
      <p className="text-gray-600 mb-4">This page tests the enhanced App component features</p>
      
      <div className="w-80 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Loading State Test</h2>
        <p className="text-sm text-gray-500 mb-4">
          The top loading bar should appear when navigating between pages
        </p>
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Theme Support Test</h2>
        <p className="text-sm text-gray-500 mb-4">
          The app now supports theme customization
        </p>
        
        <div className="mt-6">
          <ButtonComponent>Test Button</ButtonComponent>
        </div>
      </div>
    </div>
  );
}