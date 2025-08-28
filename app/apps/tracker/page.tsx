import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Heart, Target, TrendingUp, Calendar, Award } from "lucide-react"

export default function HealthTrackerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <Activity className="h-4 w-4 mr-2" />
              Health Monitoring
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Health Tracker</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Monitor your health metrics, track progress towards your wellness goals, and get insights to improve your
              overall health and fitness.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Start Tracking Your Health
            </Button>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Dashboard */}
            <div className="lg:col-span-3 space-y-8">
              {/* Health Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>Heart Rate</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">72 BPM</div>
                    <p className="text-xs text-muted-foreground">Normal range</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      <span>Steps Today</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,432</div>
                    <p className="text-xs text-muted-foreground">Goal: 10,000</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <Target className="h-4 w-4 text-green-500" />
                      <span>Weight</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">68.5 kg</div>
                    <p className="text-xs text-muted-foreground">-2.1 kg this month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span>BMI</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">22.4</div>
                    <p className="text-xs text-muted-foreground">Healthy range</p>
                  </CardContent>
                </Card>
              </div>

              {/* Goals Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Health Goals Progress</CardTitle>
                  <CardDescription>Track your progress towards your health and fitness objectives.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Daily Steps Goal</span>
                      <span>8,432 / 10,000</span>
                    </div>
                    <Progress value={84} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weight Loss Goal</span>
                      <span>2.1 / 5.0 kg</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weekly Exercise Goal</span>
                      <span>4 / 5 sessions</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Water Intake Goal</span>
                      <span>1.8 / 2.5 liters</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Tracking Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Tracking Features</CardTitle>
                  <CardDescription>
                    Comprehensive health monitoring tools to help you stay on top of your wellness journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Physical Health</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Weight and BMI tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Blood pressure monitoring</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Heart rate variability</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Sleep quality analysis</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Activity & Fitness</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Daily step counting</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Exercise session logging</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Calorie burn estimation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Activity goal setting</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Nutrition & Wellness</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Water intake tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Meal logging</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Medication reminders</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Mood tracking</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium">Reports & Insights</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Weekly health reports</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Trend analysis</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Goal achievement tracking</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span>Health score calculation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Log Today's Metrics</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Set New Goal
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Reports
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Connect Device
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-secondary" />
                    <span>Recent Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">7-Day Streak</p>
                      <p className="text-muted-foreground">Daily step goal achieved</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Weight Goal</p>
                      <p className="text-muted-foreground">Lost 2kg this month</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Heart Health</p>
                      <p className="text-muted-foreground">Resting HR improved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Reminders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span>Reminders</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">Medication</p>
                    <p className="text-muted-foreground">Take vitamins - 2:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Exercise</p>
                    <p className="text-muted-foreground">Evening workout - 6:00 PM</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Hydration</p>
                    <p className="text-muted-foreground">Drink water - Every 2 hours</p>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="border-dashed border-2 border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-center text-sm">Fitness Gear</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Smart fitness trackers & health devices</p>
                  <Button variant="outline" size="sm">
                    Shop Now
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
