import { useContext, useState } from 'react';
import loginIcon from '../../assets/signin.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

import axios from 'axios';
import { commonFileApi, commonPostApi } from '../../utils/api';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {

    const [isPassword, setIsPassword] = useState({
        password: true,
        confirmPassword: true
    })
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const { registerUser, updateUser } = useContext(AuthContext)


    const { handleSubmit, register, reset, getValues, formState: { errors } } = useForm();

    const onFormSubmit = data => {
        data.image = image;
        registerUser(data.email, data.password).then(res => {
            updateUser(res.user, data.name, data.image).then(() => {
                const user = res.user;
                commonPostApi({
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid
                }).then(res => console.log(res)).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
        reset();
    }

    const handlePasswordType = (name) => {
        const setState = (name) => {
            if (isPassword[name]) {
                return false;
            } else {
                return true
            }
        }
        setIsPassword({
            ...isPassword,
            [name]: setState(name),
        });
    }

    const handleFileUpload = async (image) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("image", image);
        const imageUrl = await commonFileApi(formData)
        try {
            setImage(imageUrl)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    return (
        <section className=' min-h-screen flex items-center justify-center'>
            <div className='container mx-auto bg-white shadow-lg max-w-sm p-4'>
                <div className='overflow-hidden w-20 mx-auto rounded-full relative flex flex-col items-center justify-center'>
                    {loading ? <span className="loading loading-bars loading-md"></span>
                        : <div className='w-full rounded-full'>
                            <img src={image ? image : loginIcon} alt="Login Icon" className='text-center mx-auto rounded-full w-20' />
                            <form>
                                <label className='absolute bottom-0 bg-slate-600 w-full p-2 flex items-center justify-center'>
                                    <span className=' text-white cursor-pointer'>upload</span>
                                    <input type="file" name="" id="" className='hidden' onChange={(e) => handleFileUpload(e.target.files[0])} />
                                </label>
                            </form>
                        </div>}
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col gap-4 p-4'>

                    {/* name input */}
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-lg'>Name:</label>
                        <input type="text" name="name" id="name" {...register("name", {
                            required: {
                                value: true,
                                message: "name must be required."
                            }
                        })} className='bg-slate-200 w-full h-8 pl-2 outline-none' />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </div>
                    {/* email input */}
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

                    {/* password input */}
                    <div className='flex flex-col relative'>
                        <label htmlFor="password" className='text-lg'>Password:</label>
                        <input type={isPassword.password ? "password" : "text"} name="password" id="password" {...register("password", {
                            required: {
                                value: true,
                                message: "password must be required."
                            }, pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                message: "password must be at least one Uppercase letter and one lowercase letter",
                            },
                        })} className='bg-slate-200 w-full h-8 pl-2 outline-none ' />

                        <div className="icon absolute top-9 right-2 cursor-pointer text-lg" onClick={() => handlePasswordType("password")} >
                            {isPassword.password ? <FaEyeSlash /> : <FaEye />}
                        </div>

                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    </div>

                    {/* confirm-password input */}
                    <div className='flex flex-col relative'>
                        <label htmlFor="confirmPassword" className='text-lg'>Confirm Password:</label>
                        <input type={isPassword.confirmPassword ? "password" : "text"} name="confirmPassword" id="confirmPassword" {...register("confirmPassword", {
                            required: {
                                value: true,
                            },
                            validate: (val) => {
                                const { password } = getValues();
                                if (password != val) {
                                    return "Your passwords do no match";
                                }
                            }
                        })} className='bg-slate-200 w-full h-8 pl-2 outline-none ' />


                        <div className="icon absolute top-9 right-2 cursor-pointer text-lg" onClick={() => handlePasswordType("confirmPassword")} >
                            {isPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                        {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword?.message}</span>}
                    </div>

                    <div className='flex justify-end'>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <div className=' w-48 h-8  mx-auto hover:scale-105 transition-all duration-150 '>
                        <button type='submit' className='bg-red-600 text-white rounded-full w-full h-full font-bold hover:bg-red-900  transition-all duration-300'>Register</button>
                    </div>
                    <div>
                        <p>Already have an account? <Link to="/login"><span className='text-red-600'>Login</span></Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register