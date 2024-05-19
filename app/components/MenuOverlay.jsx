import React from 'react'
import NavLink from './NavLink'
import { Link as ScrollLink } from 'react-scroll'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={500}
                  className="flex flex-col py-4 items-center text-[#ADB7BE] hover:text-white cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {link.title}
                </ScrollLink>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay