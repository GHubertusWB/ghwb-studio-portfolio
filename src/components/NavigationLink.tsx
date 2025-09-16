'use client'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface NavigationLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function NavigationLink({ 
  href, 
  children, 
  className, 
  onClick, 
  ...props 
}: NavigationLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Trigger navigation start event
    window.dispatchEvent(new CustomEvent('navigationStart'))
    
    // Call optional onClick handler
    if (onClick) {
      onClick()
    }
    
    // Navigate after short delay to show loader
    setTimeout(() => {
      router.push(href.toString())
    }, 100)
  }

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}
