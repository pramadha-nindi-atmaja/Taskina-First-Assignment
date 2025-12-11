import PropTypes from "prop-types";

export default function ButtonComponent({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  type = "button",
  ariaLabel = "Button component"
}) {
  // Define button variants
  const variantClasses = {
    primary: "bg-yellow-500 hover:bg-yellow-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    outline: "bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
  };
  
  // Define button sizes
  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg"
  };
  
  // Combine all classes
  const baseClasses = "font-normal rounded-lg w-full mt-3 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]";
  const combinedClasses = `
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${baseClasses}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `.trim();
  
  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaLabel: PropTypes.string
};

ButtonComponent.defaultProps = {
  onClick: () => {},
  variant: "primary",
  size: "md",
  disabled: false,
  type: "button",
  ariaLabel: "Button component"
};
