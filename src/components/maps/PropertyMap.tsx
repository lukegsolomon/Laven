// components/maps/PropertyMap.tsx
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PropertyMapProps {
  properties: any[]
  onPropertyClick: (property: any) => void
  className?: string
}

export function PropertyMap({ properties, onPropertyClick, className }: PropertyMapProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="h-full bg-gray-900 rounded-lg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-lg font-medium mb-2">Property Map</div>
          <div className="text-sm text-gray-400">Interactive map will load here</div>
          <div className="text-xs text-gray-500 mt-2">
            {properties.length} properties to display
          </div>
        </div>
      </div>
    </div>
  )
}