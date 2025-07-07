"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Building, Phone, Mail, Send } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuotePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    buildingType: "",
    floors: "",
    squareFootage: "",
    timeline: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In a real application, you would send this data to your backend
    // For now, we'll create a mailto link with the form data
    const subject = "Fire Protection Quote Request - D Fire Pro"
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Project Details:
- Project Type: ${formData.projectType}
- Building Type: ${formData.buildingType}
- Number of Floors: ${formData.floors}
- Square Footage: ${formData.squareFootage}
- Timeline: ${formData.timeline}

Project Description:
${formData.description}
    `.trim()

    const mailtoLink = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-950 border-b">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Get Your Quote</h1>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Tell us about your project and we'll provide a comprehensive quote for your fire protection needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Contact Info - Mobile First */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                <CardDescription className="text-sm">
                  Get in touch with us directly for immediate assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <Link 
                      href={siteConfig.links.phone}
                      className="text-sm text-muted-foreground hover:text-foreground break-all"
                    >
                      817-821-1877
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <Link 
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground break-all"
                    >
                      {siteConfig.links.email}
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm sm:text-base">Service Area</p>
                    <p className="text-sm text-muted-foreground">
                      Nationwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4 sm:mt-6">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">What We Need</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Project type and scope</li>
                  <li>• Building specifications</li>
                  <li>• Timeline requirements</li>
                  <li>• Current system status</li>
                  <li>• Budget considerations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form - Mobile First */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Project Information</CardTitle>
                <CardDescription className="text-sm">
                  Please provide as much detail as possible to help us give you an accurate quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2 sm:col-start-1">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      >
                        <option value="">Select project type</option>
                        <option value="new-installation">New Installation</option>
                        <option value="system-upgrade">System Upgrade</option>
                        <option value="maintenance">Maintenance Service</option>
                        <option value="inspection">Inspection & Testing</option>
                        <option value="tenant-finish">Tenant Finish-Out</option>
                        <option value="compliance">Compliance Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="buildingType" className="block text-sm font-medium mb-2">
                        Building Type *
                      </label>
                      <select
                        id="buildingType"
                        name="buildingType"
                        required
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      >
                        <option value="">Select building type</option>
                        <option value="hotel-3-story">3-Story Hotel</option>
                        <option value="hotel-4-story">4-Story Hotel</option>
                        <option value="hotel-5-story">5-Story Hotel</option>
                        <option value="commercial">Commercial Building</option>
                        <option value="multi-family">Multi-Family Residential</option>
                        <option value="office">Office Building</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="floors" className="block text-sm font-medium mb-2">
                        Number of Floors
                      </label>
                      <input
                        type="number"
                        id="floors"
                        name="floors"
                        min="1"
                        value={formData.floors}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label htmlFor="squareFootage" className="block text-sm font-medium mb-2">
                        Square Footage
                      </label>
                      <input
                        type="number"
                        id="squareFootage"
                        name="squareFootage"
                        min="1"
                        value={formData.squareFootage}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Emergency)</option>
                        <option value="1-month">Within 1 Month</option>
                        <option value="3-months">Within 3 Months</option>
                        <option value="6-months">Within 6 Months</option>
                        <option value="1-year">Within 1 Year</option>
                        <option value="planning">Just Planning</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please describe your project, current fire protection system status, specific requirements, and any other relevant details..."
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center sm:justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={buttonVariants({ 
                        size: "lg", 
                        className: "w-full sm:w-auto px-8 py-3"
                      })}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Quote Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 