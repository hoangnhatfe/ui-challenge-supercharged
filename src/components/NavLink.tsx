import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import { LinkIcon } from './Icons'

interface NavLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  isNewTab?: boolean
  badge?: string
  badgeStyle?: string
  onClick?: () => void
}

const NavLink: FC<NavLinkProps> = ({ children, href, className, isNewTab, badge, badgeStyle, ...props }) => {
  return (
    <Link 
      className={cn(
        "relative flex items-center text-white/60 text-[13px] font-medium leading-5 transition duration-300 ease-out hover:text-white/100"
      , className)} 
      href={href} 
      {...props} target={isNewTab ? "_blank" : "_self"}>
      {children}
      {badge && (
        <span className={cn(
          "inline-flex items-center justify-center text-[10px] leading-[15px] h-[15px] ml-1",
          badgeStyle
        )}>
          {badge}
        </span>
      )}
      { isNewTab && (
        <span>
          <LinkIcon className="w-[13px] h-[13px] ml-1" />
        </span>
      )}
    </Link>
  )
}

export default NavLink