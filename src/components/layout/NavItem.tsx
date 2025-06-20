// components/layout/NavItem.tsx
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItemProps {
  name: string
  href: string
  icon: LucideIcon
  current: boolean
  badge?: string | number
  onClick?: () => void
}

export function NavItem({ 
  name, 
  href, 
  icon: Icon, 
  current, 
  badge,
  onClick 
}: NavItemProps) {
  const baseClasses = cn(
    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200",
    "hover:bg-gray-800 hover:text-white",
    current 
      ? "bg-purple-600 text-white shadow-lg" 
      : "text-gray-300 hover:text-white"
  )

  const content = (
    <>
      <Icon
        className={cn(
          "mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200",
          current 
            ? "text-white" 
            : "text-gray-400 group-hover:text-white"
        )}
        aria-hidden="true"
      />
      <span className="flex-1">{name}</span>
      {badge && (
        <span
          className={cn(
            "ml-auto inline-block py-0.5 px-2 text-xs rounded-full font-medium",
            current
              ? "bg-purple-800 text-purple-100"
              : "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
          )}
        >
          {badge}
        </span>
      )}
    </>
  )

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(baseClasses, "w-full text-left")}
      >
        {content}
      </button>
    )
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  )
}