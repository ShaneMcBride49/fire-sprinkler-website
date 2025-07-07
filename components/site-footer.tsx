import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Phone, Mail, MapPin, Shield, Wrench, FileText } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/company_logo.svg"
                alt={`${siteConfig.name} Logo`}
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-slate-300 text-sm">
              Specialized fire protection services for three-, four-, and five-story hotels. 
              Expert installation, maintenance, and compliance solutions.
            </p>
            <div className="flex space-x-4">
              <Link href={siteConfig.links.phone} className="text-slate-300 hover:text-white">
                <Phone className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.links.email} className="text-slate-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/#services" className="hover:text-white flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Installation & Design</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white flex items-center space-x-2">
                  <Wrench className="h-4 w-4" />
                  <span>Routine Inspections</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Emergency Support</span>
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Compliance Consulting</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>123 Fire Safety Way</p>
                  <p>Safety City, SC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <Link href={siteConfig.links.phone} className="hover:text-white">
                  817-821-1877
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <Link href={siteConfig.links.email} className="hover:text-white">
                  tim@dfirepro.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/licenses" className="hover:text-white">
                Licenses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 