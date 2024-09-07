import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  // Initialize useForm hook
  const {
    register, handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data)); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Enter your name"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Enter a valid email',
            },
          })}
          placeholder="Enter your email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
          placeholder="Enter your password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">Submit</button>
      <p>:- if you can check your fill data so please fill this form and check this on alert tag</p>
    </form>
  );
};

export default App;
