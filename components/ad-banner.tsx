import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Star, Zap } from "lucide-react"

interface AdBannerProps {
  type: "google-adsense" | "affiliate" | "sponsored" | "premium-upgrade"
  size?: "small" | "medium" | "large" | "banner"
  title?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function AdBanner({
  type,
  size = "medium",
  title,
  description,
  ctaText = "Learn More",
  ctaLink = "#",
  className = "",
}: AdBannerProps) {
  const sizeClasses = {
    small: "p-3",
    medium: "p-4",
    large: "p-6",
    banner: "p-4 md:p-6",
  }

  if (type === "google-adsense") {
    return (
      <Card className={`border-dashed border-2 border-muted-foreground/20 ${className}`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs">
              Advertisement
            </Badge>
            <span className="text-xs text-muted-foreground">Google AdSense</span>
          </div>
        </CardHeader>
        <CardContent className={sizeClasses[size]}>
          <div className="text-center space-y-2">
            <div className="w-full h-20 bg-muted/50 rounded flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Ad Space - 728x90</span>
            </div>
            <p className="text-xs text-muted-foreground">This space reserved for Google AdSense advertisements</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (type === "affiliate") {
    return (
      <Card className={`border border-secondary/20 bg-secondary/5 ${className}`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge className="bg-secondary text-secondary-foreground">
              <Star className="h-3 w-3 mr-1" />
              Recommended
            </Badge>
            <span className="text-xs text-muted-foreground">Affiliate Partner</span>
          </div>
        </CardHeader>
        <CardContent className={sizeClasses[size]}>
          <div className="space-y-3">
            <h3 className="font-semibold text-primary">{title || "Premium Health Supplements"}</h3>
            <p className="text-sm text-muted-foreground">
              {description ||
                "Clinically tested supplements recommended by healthcare professionals. Get 20% off your first order."}
            </p>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                {ctaText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (type === "sponsored") {
    return (
      <Card className={`border-l-4 border-l-secondary ${className}`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Sponsored Content</Badge>
          </div>
        </CardHeader>
        <CardContent className={sizeClasses[size]}>
          <div className="space-y-3">
            <h3 className="font-semibold text-primary">{title || "Advanced Health Monitoring"}</h3>
            <p className="text-sm text-muted-foreground">
              {description ||
                "Latest wearable technology for continuous health tracking. Monitor heart rate, sleep, and activity levels."}
            </p>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                {ctaText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (type === "premium-upgrade") {
    return (
      <Card className={`border-2 border-secondary bg-gradient-to-br from-secondary/10 to-secondary/5 ${className}`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge className="bg-secondary text-secondary-foreground">
              <Zap className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          </div>
        </CardHeader>
        <CardContent className={sizeClasses[size]}>
          <div className="space-y-3">
            <h3 className="font-semibold text-primary">{title || "Upgrade to Premium"}</h3>
            <p className="text-sm text-muted-foreground">
              {description ||
                "Unlock advanced features, personalized health insights, and priority support. Start your free trial today."}
            </p>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
              <a href={ctaLink}>
                {ctaText}
                <Zap className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}
