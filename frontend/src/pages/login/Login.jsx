import { useContext, useState } from 'react';
import loginIcon from '../../assets/signin.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

  const [isPassword, setIsPassword] = useState(true);
  const { loginUser } = useContext(AuthContext)

  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const onFormSubmit = data => {
    loginUser(data.email, data.password).then(res => console.log(res.user)).catch(err => console.log(err));
    reset();
  }


  return (
    <section className=' min-h-screen flex items-center justify-center'>
      <div className='container mx-auto bg-white shadow-lg max-w-sm p-4'>
        <img src={loginIcon} alt="Login Icon" className='text-center mx-auto rounded-full w-20 ' />
        <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col gap-4 p-4'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-lg'>Email:</label>
            <input type="text" name="email" id="email" {...register("email", {
              required: {
                value: true,
                message: "email must be required."
              }
            })} className='bg-slate-200 w-full h-8 pl-2 outline-none' />
            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
          </div>
          <div className='flex flex-col relative'>
            <label htmlFor="password" className='text-lg'>Password:</label>
            <input type={isPassword ? "password" : "text"} name="password" id="password" {...register("password", {
              required: {
                value: true,
                message: "password must be required."
              }
            })} className='bg-slate-200 w-full h-8 pl-2 outline-none ' />
            {
              isPassword ? <div className="icon absolute top-9 right-2 cursor-pointer text-lg" onClick={() => setIsPassword(!isPassword)}>
                <FaEyeSlash />
              </div> : <div className="icon absolute top-9 right-2 cursor-pointer text-lg" onClick={() => setIsPassword(!isPassword)}>
                <FaEye />
              </div>
            }
            {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
          </div>
          <div className='flex justify-end'>
            <a href='#'>Forgot password?</a>
          </div>
          <div className=' w-48 h-8  mx-auto hover:scale-105 transition-all duration-150 '>
            <button type='submit' className='bg-red-600 text-white rounded-full w-full h-full font-bold hover:bg-red-900  transition-all duration-300'>Login</button>
          </div>
          <div>
            <p>Doesn't have an account? <Link to="/register"><span className='text-red-600'>Register</span></Link></p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login