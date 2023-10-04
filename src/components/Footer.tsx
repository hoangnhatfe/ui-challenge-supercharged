import { FC } from 'react'
import { LogoIcon } from './Icons'
import NavLink from './NavLink'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="py-16 lg:py-36">
      <div className="max-w-screen-xl px-8 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="col-span-2 lg:col-auto">
            <LogoIcon className="w-6 h-6" />
          </div>
          <div className="lg:mt-0">
            <h3 className="text-white text-[13px] font-medium leading-5">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink href="#">Store</NavLink>
              </li>
              <li>
                <NavLink href="#">Developer</NavLink>
              </li>
              <li>
                <NavLink href="#" badge="New" badgeStyle="relative border border-[#2BAFFF] rounded-2xl text-[#2BAFFF] px-2">Teams</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>API Docs</NavLink>
              </li>
              <li>
                <NavLink href="#">Pricing</NavLink>
              </li>
              <li>
                <NavLink href="#">Changelog</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Manual</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Troubleshooting</NavLink>
              </li>
              <li>
                <NavLink href="#">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:mt-0">
            <h3 className="text-white text-[13px] font-medium leading-5">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink href="#" badge="3" badgeStyle="w-4 h-4 rounded bg-[#FF6363]/[.15] text-[#FF6363]">Careers</NavLink>
              </li>
              <li>
                <NavLink href="#">Manifesto</NavLink>
              </li>
              <li>
                <NavLink href="#">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink href="#">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink href="#">Data Process Agreement</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Press Kit</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:mt-0">
            <h3 className="text-white text-[13px] font-medium leading-5">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink href="#">Community Stories</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Slack</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Twitter</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>GitHub</NavLink>
              </li>
              <li>
                <NavLink href="#" isNewTab>Dribbble</NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:mt-0">
            <h3 className="text-white text-[13px] font-medium leading-5">By Raycast</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink href="#">Wallpapers</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer