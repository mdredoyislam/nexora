import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Activity, Download, Calendar, TrendingUp, Users, ArrowUpRight } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Platform Analytics</h1>
          <p className="text-muted-foreground mt-2">Deep dive into NEXORA's performance and growth metrics.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 Days
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">$128.4k</div>
            <p className="text-xs text-success flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +14.5% vs last period
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Wallets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8,245</div>
            <p className="text-xs text-success flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +5.2% vs last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Tx Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">$4,250</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              ~0.0% vs last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">142</div>
            <p className="text-xs text-destructive flex items-center mt-1">
              +12 open tickets
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>TVL & Volume Trends</CardTitle>
            <CardDescription>Historical total value locked and trading volume across all networks.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] border-t border-border flex items-center justify-center bg-muted/10">
             <div className="text-center text-muted-foreground">
                <TrendingUp className="h-10 w-10 mx-auto mb-4 opacity-20" />
                <p>Interactive chart visualization placeholder.</p>
                <p className="text-sm mt-1">Requires Chart.js or Recharts integration.</p>
             </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>User Acquisition</CardTitle>
            <CardDescription>New signups by region.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span>North America</span>
                     <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                     <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span>Europe</span>
                     <span className="font-medium">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                     <div className="bg-primary h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span>Asia Pacific</span>
                     <span className="font-medium">18%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                     <div className="bg-primary h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span>Other</span>
                     <span className="font-medium">5%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                     <div className="bg-primary h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
