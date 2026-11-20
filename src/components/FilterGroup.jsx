const FilterGroup = ({
  title,
  inputType = 'checkbox',
  options = [],
  name,
  selectedValues = [],
  onChange
}) => {
  const groupName = name || title;

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <div className="filter-group-list">
        {options.map((option, index) => {
          const optionValue = option.value ?? option.text;
          const isChecked = Array.isArray(selectedValues)
            ? selectedValues.includes(optionValue)
            : selectedValues === optionValue;

          return (
            <label className="filter-group-item" key={index}>
              <input
                type={inputType}
                name={groupName}
                value={optionValue}
                checked={onChange ? isChecked : undefined}
                onChange={() => handleSelect(optionValue)}
                className="filter-group-input"
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;