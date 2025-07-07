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
        <div className="container relative z-10 mx-auto px-4 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                A passion for protecting what matters
              </h1>
              <p className="text-xl text-slate-300 lg:text-2xl">
                We specialize in fire protection for three-, four-, and five-story hotels, 
                offering a comprehensive range of services to safeguard lives and property—whether 
                for new builds or existing structures.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={siteConfig.links.quote}
                  className={buttonVariants({ size: "lg", className: "text-lg px-8 py-6" })}
                >
                  Get a Quote
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href={siteConfig.links.phone}
                  className={buttonVariants({ 
                    variant: "outline", 
                    size: "lg", 
                    className: "text-lg px-8 py-6 border-white/20 text-white hover:bg-white hover:text-slate-900" 
                  })}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
      <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Comprehensive Fire Protection Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From design to maintenance, we provide complete fire protection solutions 
              tailored specifically for mid-rise hotel buildings.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Installation & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Expert fire sprinkler system design and installation, customized to meet code for mid-rise hotel buildings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Routine Inspections</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ensure your property stays compliant with NFPA standards through regular, professional inspections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  24/7 response for urgent fire protection system issues and code enforcement needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Compliance Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Navigate the complexities of fire codes and insurance requirements with guidance tailored to multi-story hospitality properties.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  <ArrowUpRight className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>System Upgrades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Upgrade aging or non-compliant systems with advanced, hotel-ready fire protection solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle>Maintenance Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Protect your investment and guests with scheduled maintenance plans built for hospitality environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Callout */}
      <section id="resources" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            An array of fire protection resources
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our comprehensive suite of fire safety services supports hotel owners, property managers, 
            and contractors—ensuring every building meets the highest standards of protection.
          </p>
        </div>
      </section>

      {/* Tenant Finish-Out Services */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tenant Finish-Out Services
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand the unique challenges of hotel construction and renovation projects. 
                Our specialized services ensure your fire protection systems integrate seamlessly 
                with your overall project timeline.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quick turnaround to meet tight construction timelines</h3>
                    <p className="text-muted-foreground">We work efficiently to keep your project on schedule without compromising safety standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Seamless integration with existing sprinkler systems</h3>
                    <p className="text-muted-foreground">Our expertise ensures new installations work perfectly with your current fire protection infrastructure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Coordination with general contractors and trades</h3>
                    <p className="text-muted-foreground">We work closely with your construction team to ensure smooth project execution and minimal disruptions.</p>
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
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Contractors Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our reputation in the industry is built on decades of experience, 
              competitive pricing, and unwavering commitment to quality.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Decades of mid-rise hotel and commercial experience</h3>
              <p className="text-muted-foreground">
                Our team brings years of specialized experience in fire protection for 
                multi-story hospitality properties, ensuring your project meets all requirements.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Competitive pricing without cutting corners</h3>
              <p className="text-muted-foreground">
                We provide fair, transparent pricing while maintaining the highest 
                standards of quality and safety in every project.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Clear communication and consistent job site presence</h3>
              <p className="text-muted-foreground">
                We maintain open lines of communication throughout your project and 
                ensure our team is consistently present on-site when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to protect your property?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive quote on fire protection services 
            for your hotel or commercial property.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href={siteConfig.links.quote}
              className={buttonVariants({ size: "lg", className: "text-lg px-8 py-6" })}
            >
              Get a Quote
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href={siteConfig.links.phone}
              className={buttonVariants({ 
                variant: "outline", 
                size: "lg", 
                className: "text-lg px-8 py-6 border-white/20 text-white hover:bg-white hover:text-slate-900" 
              })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
