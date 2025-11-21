import { useState, useEffect } from "react";
import ButtonComponent from "./components/buttonComponent";
import CheckboxComponents from "./components/checkboxComponents";

export default function Home() {
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", selected: false, isDisabled: false },
    { id: 2, name: "Page 2", selected: false, isDisabled: true },
    { id: 3, name: "Page 3", selected: false, isDisabled: false },
    { id: 4, name: "Page 4", selected: false, isDisabled: false },
  ]);
  
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);

  // Update indeterminate state and selected count
  useEffect(() => {
    const selectedPages = pages.filter(page => page.selected);
    setSelectedCount(selectedPages.length);
    
    const allSelectablePages = pages.filter(page => !page.isDisabled);
    const allSelected = allSelectablePages.every(page => page.selected);
    const noneSelected = allSelectablePages.every(page => !page.selected);
    
    if (allSelected && allSelectablePages.length > 0) {
      setSelectAll(true);
      setIndeterminate(false);
    } else if (noneSelected) {
      setSelectAll(false);
      setIndeterminate(false);
    } else {
      setSelectAll(false);
      setIndeterminate(true);
    }
  }, [pages]);

  const handleCheckAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setIndeterminate(false);
    
    setPages(pages.map(page => 
      page.isDisabled ? page : { ...page, selected: isChecked }
    ));
  };

  const handlePageChange = (pageIndex) => (e) => {
    const isChecked = e.target.checked;
    setPages(pages.map((page, index) => 
      index === pageIndex ? { ...page, selected: isChecked } : page
    ));
  };

  const handleDone = () => {
    const selectedPages = pages.filter(page => page.selected);
    
    if (selectedPages.length === 0) {
      alert("Please select at least one page");
      return;
    }
    
    alert(`Selected pages: ${selectedPages.map(page => page.name).join(", ")}`);
    
    // Reset selection
    setPages(pages.map(page => ({ ...page, selected: false })));
    setSelectAll(false);
    setIndeterminate(false);
  };
  
  const handleReset = () => {
    setPages(pages.map(page => ({ ...page, selected: false })));
    setSelectAll(false);
    setIndeterminate(false);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="p-6 w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-200">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Task Selection</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {selectedCount} of {pages.filter(p => !p.isDisabled).length} pages selected
          </p>
        </div>
        
        <div className="mb-4">
          <CheckboxComponents
            id="checkAll"
            index={0}
            title="Select All"
            onChange={handleCheckAll}
            isDisabled={false}
            value={selectAll}
            indeterminate={indeterminate}
            variant="primary"
          />
        </div>
        
        <div className="space-y-2 mb-6">
          {pages.map((page, index) => (
            <CheckboxComponents
              key={page.id}
              id={`page-${index}`}
              index={index + 1}
              title={page.name}
              onChange={handlePageChange(index)}
              isDisabled={page.isDisabled}
              value={page.selected}
              variant={page.isDisabled ? "default" : "success"}
            />
          ))}
        </div>
        
        <div className="flex gap-3">
          <ButtonComponent 
            onClick={handleDone}
            variant="primary"
            className="flex-1"
          >
            Done
          </ButtonComponent>
          <ButtonComponent 
            onClick={handleReset}
            variant="outline"
            className="flex-1"
          >
            Reset
          </ButtonComponent>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Enhanced with React state management and dark mode support</p>
        </div>
      </div>
    </div>
  );
}
