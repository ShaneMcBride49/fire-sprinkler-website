import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { Phone, Mail } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/company_logo.svg"
              alt={`${siteConfig.name} Logo`}
              width={64}
              height={64}
              className="h-20 w-auto"
            />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
          <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
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
      </div>
    </header>
  )
}
