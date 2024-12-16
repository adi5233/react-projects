import { paste } from "@testing-library/user-event/dist/paste";
import React, { useState } from "react";

const data = [
  {
    id: "name",
    label: "Name",
    buttonName: "NEXT",
    inputType: "text",
    placeholder: "Enter name..",
    initialValue: "",
  },
  {
    id: "dob",
    label: "DOB",
    buttonName: "NEXT",
    inputType: "date",
    placeholder: "",
    initialValue: "",
  },

  {
    id: "email",
    label: "Email",
    buttonName: "NEXT",
    inputType: "text",
    placeholder: "Enter email...",
    initialValue: "",
  },
  {
    id: "password",
    label: "Password",
    buttonName: "SUBMIT",
    inputType: "text",
    placeholder: "Enter Password...",
    initialValue: "",
  },
];

function getIntitialValues(data) {
  let intitialValues = {};
  data.forEach((d) => {
    intitialValues[d.id] = d.initialValue;
  });
  return intitialValues;
}

const Form = () => {
  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
  const [formData, setFormData] = useState(getIntitialValues(data));
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      setIsFormSubmitted(true);
      console.log("form submitted");
    } else {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    const formObj = { ...formData };
    formObj[forms[index].id] = forms[index].initialValue;
    setFormData(formObj);

    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="mx-auto w-[50vw] bg-slate-100 text-cebter h-[30rem] p-10">
      {!isFormSubmitted && (
        <div>
          {index > 0 && (
            <div>
              <button className="p-4 bg-blue-100 my-10" onClick={handleBack}>
                {"< "}BACK
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label className="text-2xl font-bold my-4">
              {forms[index].label}
            </label>
            <input
              value={formData[forms[index].id]}
              id={forms[index].id}
              type={forms[index].inputType}
              placeholder={forms[index].placeholder}
              onChange={(e) => handleChange(e)}
              className="p-4 brder-2 w-full outline-none mt-2"
            />
            <div>
              <button className="p-4 bg-pink-100 mt-10">
                {forms[index].buttonName}
              </button>
            </div>
          </form>
        </div>
      )}

      {isFormSubmitted && <div>Form submitted</div>}
    </div>
  );
};

export default Form;
