import { useState, useEffect, useMemo, useCallback } from "react";
import ButtonComponent from "./components/buttonComponent";
import CheckboxComponents from "./components/checkboxComponents";

export default function Home({ theme, toggleTheme }) {
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", selected: false, isDisabled: false },
    { id: 2, name: "Page 2", selected: false, isDisabled: true },
    { id: 3, name: "Page 3", selected: false, isDisabled: false },
    { id: 4, name: "Page 4", selected: false, isDisabled: false },
  ]);
  
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter pages based on search term
  const filteredPages = useMemo(() => {
    if (!searchTerm) return pages;
    return pages.filter(page => 
      page.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pages, searchTerm]);

  // Update indeterminate state and selected count
  useEffect(() => {
    const selectedPages = pages.filter(page => page.selected);
    setSelectedCount(selectedPages.length);
    
    // When filtering, only consider filtered pages for select all state
    const selectablePages = searchTerm 
      ? filteredPages.filter(page => !page.isDisabled)
      : pages.filter(page => !page.isDisabled);
      
    const allSelected = selectablePages.length > 0 && selectablePages.every(page => page.selected);
    const noneSelected = selectablePages.every(page => !page.selected);
    
    if (allSelected && selectablePages.length > 0) {
      setSelectAll(true);
      setIndeterminate(false);
    } else if (noneSelected && selectablePages.length > 0) {
      setSelectAll(false);
      setIndeterminate(false);
    } else {
      setSelectAll(false);
      setIndeterminate(true);
    }
  }, [pages, filteredPages, searchTerm]);
  
  // Handle keyboard shortcuts
  const handleKeyDown = useCallback((event) => {
    // Enter key for Done action
    if (event.key === 'Enter') {
      event.preventDefault();
      handleDone();
    }
    // Escape key for Reset action
    else if (event.key === 'Escape') {
      event.preventDefault();
      handleReset();
    }
  }, []); // Removed dependencies to avoid circular reference
  
  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  // Focus trap for modal-like behavior
  useEffect(() => {
    const modalContainer = document.querySelector('.rounded-lg');
    if (!modalContainer) return;
    
    const focusableElements = modalContainer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    // Only add the event listener if there are focusable elements
    if (focusableElements.length > 0) {
      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, []);

  const handleCheckAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setIndeterminate(false);
    
    // Only affect filtered pages that are not disabled
    setPages(pages.map(page => {
      const isInFiltered = filteredPages.some(fp => fp.id === page.id);
      if (page.isDisabled) return page;
      if (!searchTerm || isInFiltered) {
        return { ...page, selected: isChecked };
      }
      return page;
    }));
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
      <div className="p-6 w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-200 animate-fadeIn">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Task Selection</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {selectedCount} of {pages.filter(p => !p.isDisabled).length} pages selected
            </p>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            aria-label="Search pages"
            role="searchbox"
            autoFocus
          />
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
          {filteredPages.map((page, index) => {
            // Find the original index to maintain proper functionality
            const originalIndex = pages.findIndex(p => p.id === page.id);
            return (
              <CheckboxComponents
                key={page.id}
                id={`page-${originalIndex}`}
                index={originalIndex + 1}
                title={page.name}
                onChange={handlePageChange(originalIndex)}
                isDisabled={page.isDisabled}
                value={page.selected}
                variant={page.isDisabled ? "default" : "success"}
              />
            );
          })}
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
