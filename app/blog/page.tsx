import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    slug: "10-tips-healthy-heart",
    title: "10 Essential Tips for a Healthy Heart",
    excerpt:
      "Discover evidence-based strategies to improve your cardiovascular health and reduce the risk of heart disease.",
    category: "Cardiology",
    author: "Dr. Priya Patel",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/heart-health-illustration.png",
    featured: true,
  },
  {
    slug: "nutrition-guide-diabetes",
    title: "Complete Nutrition Guide for Diabetes Management",
    excerpt: "Learn how to create balanced meal plans that help control blood sugar levels and improve overall health.",
    category: "Nutrition",
    author: "Dr. Rajesh Singh",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "/placeholder-v9uq7.png",
    featured: true,
  },
  {
    slug: "mental-health-workplace",
    title: "Managing Mental Health in the Workplace",
    excerpt:
      "Practical strategies for maintaining mental wellness while dealing with work-related stress and challenges.",
    category: "Mental Health",
    author: "Dr. Sunita Gupta",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/placeholder-leuzh.png",
    featured: false,
  },
  {
    slug: "exercise-benefits-seniors",
    title: "Exercise Benefits for Seniors: A Complete Guide",
    excerpt:
      "Safe and effective exercise routines designed specifically for older adults to maintain strength and mobility.",
    category: "Fitness",
    author: "Dr. Amit Sharma",
    date: "2024-01-08",
    readTime: "7 min read",
    image: "/placeholder-gl2jz.png",
    featured: false,
  },
  {
    slug: "telemedicine-future-healthcare",
    title: "Telemedicine: The Future of Healthcare Delivery",
    excerpt:
      "Exploring how virtual consultations are revolutionizing patient care and improving healthcare accessibility.",
    category: "Technology",
    author: "Dr. Priya Patel",
    date: "2024-01-05",
    readTime: "4 min read",
    image: "/placeholder-h0gxy.png",
    featured: false,
  },
  {
    slug: "sleep-hygiene-better-health",
    title: "Sleep Hygiene: Your Path to Better Health",
    excerpt: "Understanding the importance of quality sleep and practical tips to improve your sleep patterns.",
    category: "Wellness",
    author: "Dr. Sunita Gupta",
    date: "2024-01-03",
    readTime: "5 min read",
    image: "/placeholder-1rk9w.png",
    featured: false,
  },
]

const categories = ["All", "Cardiology", "Nutrition", "Mental Health", "Fitness", "Technology", "Wellness"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Health & Wellness Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Healthcare Insights & Wellness Tips
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Stay informed with the latest healthcare news, expert medical advice, and practical wellness tips from our
              team of healthcare professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search health topics..." className="pl-10 pr-4 py-2" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredPosts.map((post) => (
                      <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-secondary">{post.category}</Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-2 hover:text-secondary transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                          <Button asChild className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                            <Link href={`/blog/${post.slug}`}>
                              Read Article
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Category Filter */}
              <section className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      size="sm"
                      className={category === "All" ? "bg-secondary hover:bg-secondary/90" : "bg-transparent"}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </section>

              {/* All Posts */}
              <section>
                <h2 className="text-2xl font-bold text-primary mb-6">Latest Articles</h2>
                <div className="space-y-6">
                  {regularPosts.map((post) => (
                    <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-video md:aspect-square relative overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-secondary">{post.category}</Badge>
                        </div>
                        <div className="md:col-span-2">
                          <CardHeader>
                            <CardTitle className="line-clamp-2 hover:text-secondary transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                              </div>
                              <span>{post.readTime}</span>
                            </div>
                            <Button asChild variant="outline" className="bg-transparent">
                              <Link href={`/blog/${post.slug}`}>
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg" className="bg-transparent">
                    Load More Articles
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle>Health Newsletter</CardTitle>
                  <CardDescription>
                    Get weekly health tips and medical insights delivered to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input type="email" placeholder="Enter your email" />
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Subscribe</Button>
                </CardContent>
              </Card>

              {/* Popular Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <Button key={category} variant="ghost" className="w-full justify-start text-left">
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.slug} className="space-y-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium hover:text-secondary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()} • {post.readTime}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Health Products</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Recommended health supplements and wellness products
                  </p>
                  <Button variant="outline" size="sm">
                    Shop Now
                  </Button>
                </CardContent>
              </Card>

              {/* Ad Space 2 */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Medical Equipment</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Home medical devices and monitoring equipment</p>
                  <Button variant="outline" size="sm">
                    Browse Catalog
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
