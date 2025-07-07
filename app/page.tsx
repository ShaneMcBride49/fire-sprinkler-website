import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  Wrench, 
  Phone, 
  FileText, 
  ArrowUpRight, 
  Clock, 
  Users, 
  CheckCircle,
  Building,
  Zap,
  Award
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                A passion for protecting what matters
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl lg:text-2xl">
                We specialize in fire protection for three-, four-, and five-story hotels, 
                offering a comprehensive range of services to safeguard lives and property—whether 
                for new builds or existing structures.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.links.quote}
                  className={buttonVariants({ size: "lg", className: "px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg" })}
                >
                  Get a Quote
                  <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href={siteConfig.links.phone}
                  className={buttonVariants({ 
                    variant: "outline", 
                    size: "lg", 
                    className: "border-white/20 px-6 py-4 text-base text-white hover:bg-white hover:text-slate-900 sm:px-8 sm:py-6 sm:text-lg" 
                  })}
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-slate-800">
                <Image
                  src="/sprinklers.jpeg"
                  alt="Fire sprinkler head in hotel ceiling"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Comprehensive Fire Protection Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
              From design to maintenance, we provide complete fire protection solutions 
              tailored specifically for mid-rise hotel buildings.
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Installation & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Expert fire sprinkler system design and installation, customized to meet code for mid-rise hotel buildings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Routine Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Ensure your property stays compliant with NFPA standards through regular, professional inspections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
                  <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  24/7 response for urgent fire protection system issues and code enforcement needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Compliance Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Navigate the complexities of fire codes and insurance requirements with guidance tailored to multi-story hospitality properties.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <ArrowUpRight className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">System Upgrades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Upgrade aging or non-compliant systems with advanced, hotel-ready fire protection solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20">
                  <Wrench className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Maintenance Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm sm:text-base">
                  Protect your investment and guests with scheduled maintenance plans built for hospitality environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Callout */}
      <section id="resources" className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Fire sprinklers in hotel corridor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
            An array of fire protection resources
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 sm:text-xl">
            Our comprehensive suite of fire safety services supports hotel owners, property managers, 
            and contractors—ensuring every building meets the highest standards of protection.
          </p>
        </div>
      </section>

      {/* Tenant Finish-Out Services */}
      <section className="bg-white py-16 dark:bg-slate-950 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Tenant Finish-Out Services
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                We understand the unique challenges of hotel construction and renovation projects. 
                Our specialized services ensure your fire protection systems integrate seamlessly 
                with your overall project timeline.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold sm:text-base">Quick turnaround to meet tight construction timelines</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">We work efficiently to keep your project on schedule without compromising safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                    <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold sm:text-base">Seamless integration with existing sprinkler systems</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">Our expertise ensures new installations work perfectly with your current fire protection infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold sm:text-base">Coordination with general contractors and trades</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">We work closely with your construction team to ensure smooth project execution and minimal disruptions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Construction site with fire protection equipment"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Choose Us */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Why Contractors Choose Us
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Our reputation in the industry is built on decades of experience, 
              competitive pricing, and unwavering commitment to quality.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold sm:text-xl">Decades of mid-rise hotel and commercial experience</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Our team brings years of specialized experience in fire protection for 
                multi-story hospitality properties, ensuring your project meets all requirements.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold sm:text-xl">Competitive pricing without cutting corners</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                We provide fair, transparent pricing while maintaining the highest 
                standards of quality and safety in every project.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold sm:text-xl">Clear communication and consistent job site presence</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                We maintain open lines of communication throughout your project and 
                ensure our team is consistently present on-site when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-slate-900 py-16 text-white sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl">
            Ready to protect your property?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-300 sm:mb-8 sm:text-xl">
            Contact us today for a comprehensive quote on fire protection services 
            for your hotel or commercial property.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={siteConfig.links.quote}
              className={buttonVariants({ size: "lg", className: "px-6 py-4 text-base sm:px-8 sm:py-6 sm:text-lg" })}
            >
              Get a Quote
              <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href={siteConfig.links.phone}
              className={buttonVariants({ 
                variant: "outline", 
                size: "lg", 
                className: "border-white/20 px-6 py-4 text-base text-white hover:bg-white hover:text-slate-900 sm:px-8 sm:py-6 sm:text-lg" 
              })}
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
