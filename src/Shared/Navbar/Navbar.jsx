import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
 localStorage.setItem('theme', theme)
 const localTheme = localStorage.getItem('theme')
 document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleTheme = e => {
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

    const navLinks = <>
    <li><NavLink to='/' className={({isActive}) => isActive? ' text-purple-500  border border-purple-400 p-2' : ''}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive? ' border p-2 border-purple-400 text-purple-500' : ''} to='/allTouristsSpot'>All Tourists Spot</NavLink></li> 
    {
      user && <>
      <li><NavLink className={({isActive}) => isActive? ' border p-2 border-purple-400 text-purple-500' : ''} to='/addTouristsSpot'>Add Tourists Spot</NavLink></li>
      <li><NavLink className={({isActive}) => isActive? ' border p-2 border-purple-400 text-purple-500' : ''} to='/myList'>My List</NavLink></li>
      </>
    }
    
    </>

    return (
        <div className="navbar bg-base-100 sm:mx-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0}  className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a  className="btn btn-ghost text-2xl font-bold text-purple-600 bg-purple-100">DreamTravello</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  {
    user?.email? 
    <div className="flex items-center gap-1">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full" title={user?.displayName || 'not found'}>
      <img alt="" src={user?.photoURL || 'https://i.ibb.co/s21kx6n/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'} />
    </div>
  </div>
  <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
      </div>
:
<div className="flex flex-row gap-2">
    <Link to='/login' className="btn" >Login</Link>
    
    <Link to='/register' className="btn">Register</Link>
</div>
  }
    
  </div>
  {/* Theme controller */}
  <label className="cursor-pointer grid place-items-center">
  <input onChange={handleTheme} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
    );
};

export default Navbar;