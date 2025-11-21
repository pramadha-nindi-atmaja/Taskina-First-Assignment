import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function CheckboxComponents({
  id,
  index,
  title,
  onChange,
  isDisabled,
  value,
  variant = "default",
  size = "md",
  indeterminate = false,
  onFocus = () => {},
  onBlur = () => {},
  ariaLabel = null,
}) {
  const checkboxRef = useRef(null);
  
  // Handle indeterminate state
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  
  // Define checkbox variants
  const variantClasses = {
    default: "text-yellow-500 border-gray-300 focus:ring-yellow-400",
    primary: "text-blue-500 border-gray-300 focus:ring-blue-400",
    success: "text-green-500 border-gray-300 focus:ring-green-400",
    danger: "text-red-500 border-gray-300 focus:ring-red-400",
  };
  
  // Define checkbox sizes
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  
  // Define container padding
  const paddingClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };
  
  // Combine all classes
  const baseClasses = "rounded focus:ring-opacity-50 transition-colors";
  const checkboxClasses = `
    form-checkbox
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.default}
    ${baseClasses}
    ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
  `.trim();
  
  const containerClasses = `
    flex justify-between items-center
    ${paddingClasses[size] || paddingClasses.md}
    my-2 rounded-md hover:bg-gray-50 transition-colors
    ${isDisabled ? "opacity-75" : ""}
  `.trim();
  
  const labelClasses = `
    text-gray-800 font-medium cursor-pointer flex-grow
    ${size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm"}
  `.trim();
  
  // Use custom aria-label if provided, otherwise fallback to title
  const accessibleLabel = ariaLabel || title;
  
  return (
    <div className={containerClasses}>
      <label
        htmlFor={id || `checkbox-${index}`}
        className={labelClasses}
      >
        {title}
      </label>
      <input
        ref={checkboxRef}
        type="checkbox"
        id={id || `checkbox-${index}`}
        className={checkboxClasses}
        disabled={isDisabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        checked={value}
        aria-label={accessibleLabel}
      />
    </div>
  );
}

CheckboxComponents.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "success", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  indeterminate: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string,
};

CheckboxComponents.defaultProps = {
  id: undefined,
  variant: "default",
  size: "md",
  indeterminate: false,
  onFocus: () => {},
  onBlur: () => {},
  ariaLabel: null,
};