import React, { ReactElement } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  placeholder: string;
  selected: Date | null;
  onChange: (date: Date) => void;
  title?: string;
}

const PickerDate = ({ placeholder, selected, onChange, title }: Props): ReactElement => {
  return (
    <div className="input-user-info">
      {title && (
        <div className="input-user-info__title">
          <span>{title}</span> <span>*</span>
        </div>
      )}
      <DatePicker selected={selected} onChange={onChange} dateFormat="yyyy.MM" className="common-input common-picker" placeholderText={placeholder} />
    </div>
  );
};

export default PickerDate;
