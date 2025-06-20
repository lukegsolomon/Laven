// components/dashboard/MetricCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: LucideIcon
  trend?: {
    value: string
    positive: boolean
  }
  status?: "normal" | "warning" | "critical"
  className?: string
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  status = "normal",
  className 
}: MetricCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden",
      status === "warning" && "border-yellow-500/20 bg-yellow-50",
      status === "critical" && "border-red-500/20 bg-red-50",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {Icon && (
          <Icon className={cn(
            "h-4 w-4",
            status === "normal" && "text-purple-600",
            status === "warning" && "text-yellow-600",
            status === "critical" && "text-red-600"
          )} />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className={cn(
            "text-xs mt-1",
            trend.positive ? "text-green-600" : "text-red-600"
          )}>
            {trend.positive ? "↗" : "↘"} {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
