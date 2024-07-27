// react
import React from 'react';

// css
import './radio.scss';

// radio item
const RadioItem = ({ value, label, checked, onChange }) => (
  <label>
    <input type="radio" value={value} checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);

/**
 * QRadio
 * @param {*} param0
 * @returns
 */
export const QRadio = ({ options, value, onChange }) => {
  return (
    <div className="QRadio">
      {options.map((option) => (
        <RadioItem
          key={option.value}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
        />
      ))}
    </div>
  );
};
