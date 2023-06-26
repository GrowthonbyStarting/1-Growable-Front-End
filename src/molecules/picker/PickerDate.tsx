import React, { ReactElement } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyleProps } from "../../types/interfaces/Style";

interface Props {
  placeholder: string;
  selected: Date | null;
  onChange: (date: Date) => void;
  title?: string;
  styleProps?: StyleProps;
}

const PickerDate = ({ placeholder, selected, onChange, title, styleProps }: Props): ReactElement => {
  return (
    <div className="input-user-info" style={styleProps}>
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
