import Logo from '../../components/Logo/Logo'
import { MdSearch } from "react-icons/md";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 gap-4 shadow-lg w-full' >
      <div>
        <Logo w={100} h={60} />

      </div>

      <div className='items-center justify-center hidden lg:flex flex-1 max-w-md border-2 h-8 relative rounded-full'>
        <input type="text" placeholder='Search here' className='pl-2 w-full h-full rounded-full outline-none p-2' />
        <span className='absolute top-0 right-0 bg-red-600 hover:bg-red-900 cursor-pointer text-white h-full flex items-center justify-center w-12 rounded-r-full text-2xl'><MdSearch /></span>
      </div>

      <div className='flex items-center justify-center gap-4 '>
        <div className="indicator cursor-pointer">
          <div className='text-2xl'>
            <FaShoppingCart />
          </div>
          <span className="badge badge-sm indicator-item bg-red-600 text-white">8</span>
        </div>
        <div className='text-2xl'>
          <FaUserCircle />
        </div>
        <button className='bg-red-600 hover:bg-red-900 text-white w-20 h-8 rounded-full border-none font-bold'>Login</button>
      </div>

    </div>
  )
}




export default Header