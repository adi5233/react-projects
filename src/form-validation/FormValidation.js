import React, { useState } from "react";

const defaultvalues = {
  firstName: {
    id: "firstName",
    label: "Fisrt Name",
    placeholder: "First Name ...",
    type: "text",
    value: "",
    isError: false,
    errMsg: "First name can not be empty.",
  },
  lastName: {
    id: "lastName",
    label: "Last Name",
    placeholder: "last Name ...",
    type: "text",
    value: "",
    isError: false,
    errMsg: "Last name can not be empty.",
  },
  email: {
    id: "email",
    label: "Email",
    placeholder: "Email ...",
    type: "email",
    value: "",
    isError: false,
    errMsg: "Email can not be empty.",
  },
  password: {
    id: "password",
    label: "Password",
    placeholder: "Password ...",
    type: "password",
    value: "",
    isError: false,
    errMsg: "Password can not be empty.",
  },
};

const FormValidation = () => {
  const [formData, setFormData] = useState(defaultvalues);

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[key].value = value;
    setFormData(copyFormData);
    isValidForm();
  };

  const isValidForm = () => {
    const copyFormData = { ...formData };
    Object.keys(copyFormData).forEach((key) => {
      const obj = copyFormData[key];
      obj.isError = !obj.value ? true : false;
    });
    setFormData(copyFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isValidForm();
  };

  return (
    <div className="w-[30rem] bg-slate-100 mx-auto p-8 mt-20">
      <div>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => {
            const { id, label, placeholder, type, value, isError, errMsg } =
              formData[key];
            return (
              <div key={id}>
                <label for="" className="font-bold text-xl">
                  {label}
                </label>
                <br />
                <input
                  id={id}
                  value={value}
                  type={type}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className="border-2 p-4 mt-4 w-full"
                />
                {isError && <span className="text-red-800 mb-4">{errMsg}</span>}
              </div>
            );
          })}
          <button className="text-center p-3 border-1 bg-green-300 mx-auto mt-8">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
