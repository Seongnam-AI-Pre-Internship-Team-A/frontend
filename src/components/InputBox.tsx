/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import FormAlertMessage from "../components/FormAlertMessage";
interface InputBoxProps {
  onChange?: any;
  placeholder: string;
  text: string;
  icon: any;
  type?: string;
  message?: string;
  isValid?: boolean;
  blurEvnet?: any;
}

export default function InputBox({
  onChange = () => {},
  placeholder,
  icon,
  text = "",
  type = "text",
  message = "",
  isValid = false,
  blurEvnet = () => {},
}: InputBoxProps) {
  const [value, setValue] = useState(text);

  const handleTextChange = (e: any) => {
    setValue(e.target.value);
    onChange({ target: { name: placeholder, value: e.target.value } });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center align-middle ">
      <div className="flex flex-wrap items-stretch w-3/5 border-black border-2 rounded-full m-5 p-2">
        <div className="flex -mr-px justify-center w-15 ">
          <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
            <img src={icon} alt={placeholder}></img>
          </span>
        </div>

        <input
          type={type}
          className="flex-shrink flex-grow flex-auto relative leading-normal h-10  rounded placeholder-gray-400 object-left-top  pl-16"
          placeholder={placeholder}
          value={value}
          onChange={handleTextChange}
          onBlur={blurEvnet}
        />
      </div>
      {message !== "" && (
        <FormAlertMessage message={message} isValid={isValid} />
      )}
    </div>
  );
}