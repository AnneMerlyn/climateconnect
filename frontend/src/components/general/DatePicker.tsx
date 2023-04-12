import React, { useContext } from "react";
import "date-fns";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import { Dayjs } from "dayjs"

import { DatePicker as DatePickerComponent} from "@mui/x-date-pickers/DatePicker"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import UserContext from "../context/UserContext";

type Props = {
  label?: string;
  date?: Date | null | Dayjs;
  handleChange: Function;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  enableTime?: boolean;
};
export default function DatePicker({
  label,
  date,
  handleChange,
  className,
  minDate,
  maxDate,
  enableTime,
}: Props) {
  const { locale } = useContext(UserContext)
  const handleDateChange = (value) => {
    handleChange(value);
  };
  
  const args = {
    className: className,
    label: label,
    value: date ? date : null,
    onChange: handleDateChange,
    maxDate: maxDate && maxDate,
    minDate: minDate && minDate,
  };
  return (
    <LocalizationProvider adapterLocale={locale} dateAdapter={AdapterDayjs}>
      {enableTime ? (
        <DateTimePicker {...args}/>
      ) :
        <DatePickerComponent {...args} />
      }
    </LocalizationProvider>
  );
}
