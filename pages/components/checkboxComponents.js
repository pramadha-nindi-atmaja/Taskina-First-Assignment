import PropTypes from "prop-types";

export default function CheckboxComponents({
  id,
  index,
  title,
  onChange,
  isDisabled,
  value,
}) {
  return (
    <div className="flex justify-between items-center p-3 my-2 rounded-md hover:bg-gray-50 transition-colors">
      <label
        htmlFor={`page-${index}`}
        className="text-gray-800 font-medium text-sm cursor-pointer flex-grow"
      >
        {title}
      </label>
      <input
        type="checkbox"
        id={`page-${index}`}
        className="form-checkbox h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400 focus:ring-opacity-50 transition-colors"
        disabled={isDisabled}
        onChange={onChange}
        checked={value}
        aria-label={title}
      />
    </div>
  );
}

CheckboxComponents.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  value: PropTypes.bool.isRequired,
};