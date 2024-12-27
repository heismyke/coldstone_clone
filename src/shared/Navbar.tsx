import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useState} from "react";

type NavbarLink = {
  name: string
  href: string
}

type NavbarProps = {
  disabled?: boolean
  type?: 'button'
}

const navbarData: { links: NavbarLink[] } = {
  links: [
    { name: 'MENU', href: '/menu' },
    { name: 'CHARITY', href: '/charity' },
    { name: 'LOGIN', href: '/login' },
    { name: 'SIGN UP', href: '/sign-up' },
  ],
}

const Navbar = ({ disabled = false, type }: NavbarProps) => {
  const [menu, setMenu] = useState(false)

  const handleButtonClick = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <nav className="w-[100%] p-2 md:p-5 z-50 relative flex items-center justify-between lg:justify-between xl:justify-around">
        <Link to="/">
          <img src={Logo} alt="logo thumbnail" />
        </Link>
        <ul
          className={`${
            menu ? 'flex' : 'hidden lg:flex lg:items-center lg:justify-center'
          } w-[100%] lg:w-[60%] z-50 bg-white lg:bg-transparent text-black  shadow-lg lg:shadow-none top-[80px] lg:top-0  flex-col lg:flex-row gap-10 pl-10 py-5 left-0  lg:right-0 absolute lg:relative`}
        >
          {navbarData.links.map((nav_item, index) => (
            <Link to={nav_item.href} key={index}>
              <li>{nav_item.name}</li>
            </Link>
          ))}
        </ul>
        <button
          className="block lg:hidden"
          onClick={handleButtonClick}
          disabled={disabled}
          type={type}
        >
          <CiMenuFries className={` text-[#BC1E26CC]`} size={30} />
        </button>
      </nav>
    </div>
  )
}

export default Navbar
