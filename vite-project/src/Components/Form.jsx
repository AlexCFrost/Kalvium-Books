import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

function Form() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className='all'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {submitted && <p>Form submitted successfully!</p>}
        <div>
          <label>First Name</label>
          <input {...register('full Name', { required: true })} placeholder="Enter Your Name" />
        </div>

        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Enter your email" />
          {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
          {errors.email && errors.email.type === 'pattern' && <p>Invalid email</p>}
        </div>

        <div>
          <label>Password</label>
          <input {...register('password', { required: true, minLength: 5, maxLength: 20 })} type="password" placeholder="Enter your password" />
          {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
          {errors.password && errors.password.type === 'minLength' && <p>Password must be more than 4 characters</p>}
          {errors.password && errors.password.type === 'maxLength' && <p>Password cannot be more than 20 characters</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input {...register('confirmPassword', { required: true, validate: value => value === password })} type="password" placeholder="Confirm your password" />
          {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p>Confirm Password is required</p>}
          {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p>Passwords do not match</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
