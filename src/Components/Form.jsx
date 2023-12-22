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
          <label>Full Name</label>
          <input {...register('fullName', { required: true, minLength: 3, maxLength: 30 })} placeholder="Enter Your Name" />
          {errors.fullName && errors.fullName.type === 'required' && <p>Name is required</p>}
          {errors.fullName && errors.fullName.type === 'minLength' && <p>Name must be at least 3 characters</p>}
          {errors.fullName && errors.fullName.type === 'maxLength' && <p>Name cannot exceed 30 characters</p>}
        </div>

        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Enter your email" />
          {errors.email && errors.email.type === 'required' && <p>Email is required</p>}
          {errors.email && errors.email.type === 'pattern' && <p>Invalid email</p>}
        </div>

        <div>
          <label>Password</label>
          <input {...register('password', { required: true, minLength: 10, pattern: /^(?=.*[!@#$%^&*])/ })} type="password" placeholder="Enter your password" />
          {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
          {errors.password && errors.password.type === 'minLength' && <p>Password must be at least 10 characters</p>}
          {errors.password && errors.password.type === 'pattern' && <p>Password must contain at least one special character</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input {...register('confirmPassword', { required: true, validate: value => value === password })} type="password" placeholder="Confirm your password" />
          {errors.confirmPassword && errors.confirmPassword.type === 'required' && <p>Confirm Password is required</p>}
          {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <p>Passwords do not match</p>}
        </div>

        <button type="submit" disabled={Object.keys(errors).some(field => field !== 'confirmPassword' && errors[field])}>Sign up</button>
      </form>
    </div>
  );
}

export default Form;