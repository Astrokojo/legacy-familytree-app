import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fromJS } from 'immutable';
``
const BioForm = () => {
  const { register, handleSubmit, setValue } = useForm();

  // Load saved data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (data) => {
    // Convert form data to Immutable Map
    const immutableData = fromJS(data);

    // Save data temporarily (e.g., in localStorage or sessionStorage)
    localStorage.setItem('formData', JSON.stringify(immutableData.toJS()));

    console.log('Data saved temporarily:', immutableData.toJS());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Enter your name:</label>
      <input type="text" id="username" {...register('username')} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register('email')} />

      <label htmlFor="age">Enter your age:</label>
      <input type="number" id="age" {...register('age')} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BioForm;
