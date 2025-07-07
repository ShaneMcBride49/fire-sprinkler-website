"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Desktop Nav */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/company_logo.svg"
              alt={`${siteConfig.name} Logo`}
              width={64}
              height={64}
              className="h-12 w-auto sm:h-16"
            />
            <span className="text-lg font-bold sm:text-xl">{siteConfig.name}</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <MainNav items={siteConfig.mainNav} />
          </div>
        </div>

        {/* Desktop Contact Info and Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href={siteConfig.links.phone} className="flex items-center space-x-1 hover:text-foreground">
                <Phone className="h-4 w-4" />
                <span>817-821-1877</span>
              </Link>
              <Link href={siteConfig.links.email} className="flex items-center space-x-1 hover:text-foreground">
                <Mail className="h-4 w-4" />
                <span>tim@dfirepro.com</span>
              </Link>
            </div>
            <Link
              href={siteConfig.links.quote}
              className={buttonVariants({ size: "sm" })}
            >
              Get Quote
            </Link>
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Link
            href={siteConfig.links.quote}
            className={buttonVariants({ size: "sm" })}
          >
            Quote
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container space-y-4 px-4 py-4">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              {siteConfig.mainNav.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="space-y-3 border-t pt-4">
              <Link 
                href={siteConfig.links.phone} 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>817-821-1877</span>
              </Link>
              <Link 
                href={siteConfig.links.email} 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="h-4 w-4" />
                <span>tim@dfirepro.com</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
