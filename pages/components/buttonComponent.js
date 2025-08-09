import PropTypes from "prop-types";

export default function ButtonComponent({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-normal py-2 px-4 rounded-lg w-full mt-3"
      aria-label="Button component"
    >
      {children}
    </button>
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
