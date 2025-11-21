export default function DocumentTest() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 p-6">
      <h1 className="text-2xl font-bold mb-6">Document Component Test</h1>
      <p className="text-gray-600 mb-4">This page tests the enhanced Document component features</p>
      
      <div className="w-80 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">SEO Meta Tags</h2>
        <p className="text-sm text-gray-500 mb-4">
          The page now includes enhanced meta tags for better SEO and social sharing
        </p>
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Performance Optimizations</h2>
        <p className="text-sm text-gray-500 mb-4">
          Preloading and preconnecting directives improve loading performance
        </p>
        
        <h2 className="text-lg font-semibold mb-4 mt-6">Theme Color</h2>
        <p className="text-sm text-gray-500 mb-4">
          The browser address bar will match the app's theme color
        </p>
      </div>
    </div>
  );
}