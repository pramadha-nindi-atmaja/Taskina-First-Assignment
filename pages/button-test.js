import ButtonComponent from "./components/buttonComponent";

export default function ButtonTest() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold mb-6">Button Component Test</h1>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Primary Button (Default)</h2>
        <ButtonComponent onClick={handleClick}>
          Primary Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Secondary Button</h2>
        <ButtonComponent onClick={handleClick} variant="secondary">
          Secondary Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Success Button</h2>
        <ButtonComponent onClick={handleClick} variant="success">
          Success Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Danger Button</h2>
        <ButtonComponent onClick={handleClick} variant="danger">
          Danger Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Outline Button</h2>
        <ButtonComponent onClick={handleClick} variant="outline">
          Outline Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Small Size</h2>
        <ButtonComponent onClick={handleClick} size="sm">
          Small Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Large Size</h2>
        <ButtonComponent onClick={handleClick} size="lg">
          Large Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Disabled Button</h2>
        <ButtonComponent onClick={handleClick} disabled>
          Disabled Button
        </ButtonComponent>
      </div>
      
      <div className="w-64">
        <h2 className="text-lg font-semibold mb-2">Submit Button</h2>
        <ButtonComponent onClick={handleClick} type="submit">
          Submit Button
        </ButtonComponent>
      </div>
    </div>
  );
}