// components/alerts/AlertBanner.tsx
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Info, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AlertBannerProps {
  type: "info" | "warning" | "success" | "error"
  title?: string
  message: string
  actionLabel?: string
  onAction?: () => void
  onDismiss?: () => void
}

export function AlertBanner({ 
  type, 
  title, 
  message, 
  actionLabel, 
  onAction, 
  onDismiss 
}: AlertBannerProps) {
  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertTriangle
  }

  const colors = {
    info: "border-blue-200 bg-blue-50 text-blue-800",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
    success: "border-green-200 bg-green-50 text-green-800",
    error: "border-red-200 bg-red-50 text-red-800"
  }

  const Icon = icons[type]

  return (
    <Alert className={colors[type]}>
      <Icon className="h-4 w-4" />
      <AlertDescription className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {message}
      </AlertDescription>
      
      <div className="flex items-center space-x-2 ml-auto">
        {actionLabel && onAction && (
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        {onDismiss && (
          <Button variant="ghost" size="sm" onClick={onDismiss}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Alert>
  )
}
