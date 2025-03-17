import React from 'react';
import { useForm } from 'react-hook-form';

const S1 = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <h1>Create an account</h1>
      <p>Enter your details below</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Name" {...register("name", { required: true })} />
        <input type="text" placeholder="Email or Phone Number" {...register("email")} />
        <input type="password" placeholder="Password" {...register("password")} />
        
        <button type="submit" className="create-account-btn">Create Account</button>
        
        <button className="google-btn">
          <img 
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
            alt="Google logo" 
            className="google-logo" 
          />
          Sign up with Google
        </button>
      </form>

      <div className="login-link">
        Already have an account? <a href="#">Log in</a>
      </div>
    </div>
  );
};

export default S1;
        