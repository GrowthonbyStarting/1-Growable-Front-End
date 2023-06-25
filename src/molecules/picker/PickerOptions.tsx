import React, { ReactElement } from "react";

interface Props {
  placeholder: string;
  value: any;
  onChange: (value: any) => void;
  options: any[];
  title?: string;
}

const PickerOptions = ({ placeholder, value, onChange, options, title }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <select className="common-input common-picker" defaultValue="default" value={value} onChange={onChange}>
        <option value="default" disabled hidden>
          {placeholder}
        </option>
        {options.map((major, idx) => {
          return (
            <option key={idx} value={major}>
              {major}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PickerOptions;
