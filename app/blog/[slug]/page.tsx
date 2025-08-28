import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, User, Clock, Share2, BookOpen, ArrowLeft, Heart, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

// Sample blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = {
  "10-tips-healthy-heart": {
    title: "10 Essential Tips for a Healthy Heart",
    excerpt:
      "Discover evidence-based strategies to improve your cardiovascular health and reduce the risk of heart disease.",
    category: "Cardiology",
    author: "Dr. Priya Patel",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?key=dyk4k",
    content: `
      <p>Heart disease remains one of the leading causes of death worldwide, but the good news is that many heart conditions are preventable through lifestyle changes and proper medical care. As a cardiologist with over 15 years of experience, I've seen firsthand how simple changes can make a dramatic difference in cardiovascular health.</p>

      <h2>1. Maintain a Heart-Healthy Diet</h2>
      <p>Your diet plays a crucial role in heart health. Focus on consuming plenty of fruits, vegetables, whole grains, and lean proteins. The Mediterranean diet has been extensively studied and shown to reduce the risk of heart disease by up to 30%.</p>

      <h2>2. Exercise Regularly</h2>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week. Regular exercise strengthens your heart muscle, improves blood circulation, and helps maintain a healthy weight.</p>

      <h2>3. Manage Stress Effectively</h2>
      <p>Chronic stress can contribute to heart disease by raising blood pressure and triggering unhealthy behaviors. Practice stress-reduction techniques such as meditation, deep breathing exercises, or yoga.</p>

      <h2>4. Get Quality Sleep</h2>
      <p>Poor sleep quality and insufficient sleep are linked to increased risk of heart disease. Aim for 7-9 hours of quality sleep each night and maintain a consistent sleep schedule.</p>

      <h2>5. Don't Smoke and Limit Alcohol</h2>
      <p>Smoking is one of the most significant risk factors for heart disease. If you smoke, quitting is the best thing you can do for your heart. Also, limit alcohol consumption to moderate levels.</p>

      <h2>6. Monitor Your Blood Pressure</h2>
      <p>High blood pressure often has no symptoms but can cause serious damage to your heart and arteries. Regular monitoring and management are essential for heart health.</p>

      <h2>7. Control Cholesterol Levels</h2>
      <p>High cholesterol can lead to the buildup of plaques in your arteries. Regular cholesterol screenings and appropriate management through diet, exercise, and medication when necessary are important.</p>

      <h2>8. Maintain a Healthy Weight</h2>
      <p>Being overweight or obese increases your risk of heart disease. Even a modest weight loss of 5-10% can have significant health benefits.</p>

      <h2>9. Stay Hydrated</h2>
      <p>Proper hydration helps your heart pump blood more easily and supports overall cardiovascular function. Aim for 8-10 glasses of water daily.</p>

      <h2>10. Regular Medical Check-ups</h2>
      <p>Regular visits to your healthcare provider can help detect and manage risk factors early. Don't wait for symptoms to appear – prevention is always better than treatment.</p>

      <p>Remember, small changes can lead to big improvements in your heart health. Start with one or two tips and gradually incorporate more into your daily routine. Your heart will thank you for it!</p>
    `,
    tags: ["Heart Health", "Prevention", "Lifestyle", "Cardiology"],
  },
  "nutrition-guide-diabetes": {
    title: "Complete Nutrition Guide for Diabetes Management",
    excerpt: "Learn how to create balanced meal plans that help control blood sugar levels and improve overall health.",
    category: "Nutrition",
    author: "Dr. Rajesh Singh",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "/placeholder.svg?key=62wd7",
    content: `
      <p>Managing diabetes effectively requires a comprehensive approach to nutrition. As an endocrinologist specializing in diabetes care, I've helped thousands of patients achieve better blood sugar control through proper nutrition planning.</p>

      <h2>Understanding Diabetes and Nutrition</h2>
      <p>Diabetes affects how your body processes glucose (sugar). Whether you have Type 1 or Type 2 diabetes, what you eat directly impacts your blood sugar levels. The goal is to maintain stable blood glucose levels throughout the day.</p>

      <h2>The Diabetes Plate Method</h2>
      <p>The plate method is a simple way to plan balanced meals:</p>
      <ul>
        <li>Fill half your plate with non-starchy vegetables</li>
        <li>Fill one quarter with lean protein</li>
        <li>Fill one quarter with carbohydrates (preferably complex carbs)</li>
        <li>Add a serving of healthy fats</li>
      </ul>

      <h2>Carbohydrate Counting</h2>
      <p>Carbohydrates have the most significant impact on blood sugar. Learning to count carbs helps you manage portions and timing of meals. Work with a registered dietitian to determine your carbohydrate needs.</p>

      <h2>Best Foods for Diabetes</h2>
      <p>Focus on nutrient-dense, whole foods:</p>
      <ul>
        <li>Non-starchy vegetables: broccoli, spinach, peppers, tomatoes</li>
        <li>Lean proteins: fish, chicken, tofu, eggs</li>
        <li>Whole grains: quinoa, brown rice, oats</li>
        <li>Healthy fats: avocados, nuts, olive oil</li>
        <li>Low-fat dairy or dairy alternatives</li>
      </ul>

      <h2>Foods to Limit</h2>
      <p>Minimize these foods that can cause blood sugar spikes:</p>
      <ul>
        <li>Sugary drinks and desserts</li>
        <li>Refined grains and processed foods</li>
        <li>High-sodium foods</li>
        <li>Trans fats and excessive saturated fats</li>
      </ul>

      <h2>Meal Timing and Frequency</h2>
      <p>Consistent meal timing helps maintain stable blood sugar levels. Many people with diabetes benefit from eating smaller, more frequent meals throughout the day.</p>

      <h2>Sample Meal Plan</h2>
      <p><strong>Breakfast:</strong> Oatmeal with berries and nuts<br>
      <strong>Lunch:</strong> Grilled chicken salad with mixed vegetables<br>
      <strong>Dinner:</strong> Baked salmon with quinoa and steamed broccoli<br>
      <strong>Snacks:</strong> Apple with almond butter, or Greek yogurt</p>

      <p>Remember, everyone's nutritional needs are different. Work with your healthcare team to develop a personalized nutrition plan that fits your lifestyle and helps you achieve your health goals.</p>
    `,
    tags: ["Diabetes", "Nutrition", "Meal Planning", "Blood Sugar"],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, "healthcare", "medical advice", "health tips", "wellness"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Homa Healthcare Center",
      logo: {
        "@type": "ImageObject",
        url: "https://www.homahealthcarecenter.in/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.homahealthcarecenter.in/blog/${params.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    wordCount: post.content.split(" ").length,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto max-w-4xl">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">{post.title}</h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Article Content */}
            <article className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold text-primary mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <Card className="mt-8">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle>{post.author}</CardTitle>
                      <CardDescription>
                        {post.category === "Cardiology" && "Board-certified Cardiologist with 15+ years of experience"}
                        {post.category === "Nutrition" &&
                          "Endocrinologist specializing in diabetes and metabolic disorders"}
                        {post.category === "Mental Health" && "Licensed psychiatrist and mental health advocate"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Comments Section */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Comments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    Comments are coming soon. In the meantime, feel free to share this article with others who might
                    benefit from this information.
                  </p>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>In This Article</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Introduction
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Key Points
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Practical Tips
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    Conclusion
                  </Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Link
                      href="/blog/mental-health-workplace"
                      className="text-sm font-medium hover:text-secondary transition-colors line-clamp-2"
                    >
                      Managing Mental Health in the Workplace
                    </Link>
                    <p className="text-xs text-muted-foreground">6 min read</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Link
                      href="/blog/exercise-benefits-seniors"
                      className="text-sm font-medium hover:text-secondary transition-colors line-clamp-2"
                    >
                      Exercise Benefits for Seniors: A Complete Guide
                    </Link>
                    <p className="text-xs text-muted-foreground">7 min read</p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Link
                      href="/blog/sleep-hygiene-better-health"
                      className="text-sm font-medium hover:text-secondary transition-colors line-clamp-2"
                    >
                      Sleep Hygiene: Your Path to Better Health
                    </Link>
                    <p className="text-xs text-muted-foreground">5 min read</p>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                  <CardDescription>Get the latest health insights delivered to your inbox.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-md"
                  />
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Subscribe</Button>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Health Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Recommended books and resources for better health
                  </p>
                  <Button variant="outline" size="sm">
                    Browse Resources
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
