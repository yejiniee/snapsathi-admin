const TabItem = ({ title, label, isSelected = false, onClick }) => {
  const textColor = isSelected ? "text-gray-900" : "text-gray-400";

  return (
    <li>
      <button
        id={`tab-${label}`}
        role="tab"
        aria-selected={isSelected}
        onClick={onClick}
        type="button"
        className={`text-lg font-semibold transition-colors duration-300 ease-out ${textColor}`}
      >
        {title}
      </button>
    </li>
  );
};

export default TabItem;
