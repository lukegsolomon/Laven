// components/layout/Sidebar.tsx (Updated)
import { Building2, Map, Workflow, AlertTriangle, Calculator, Settings, BarChart3 } from "lucide-react"
import { NavItem } from "../layout/NavItem" // if it's in layout folder

const navigation = [
  { 
    name: "Intel", 
    href: "/intel", 
    icon: Building2, 
    current: false 
  },
  { 
    name: "Watchtower", 
    href: "/watchtower", 
    icon: Map, 
    current: true,
    badge: "12" // Active alerts
  },
  { 
    name: "Forge", 
    href: "/forge", 
    icon: Workflow, 
    current: false 
  },
  { 
    name: "Signal", 
    href: "/signal", 
    icon: AlertTriangle, 
    current: false,
    badge: "7" // Open cases
  },
  { 
    name: "Ledger", 
    href: "/ledger", 
    icon: Calculator, 
    current: false 
  },
  { 
    name: "Analytics", 
    href: "/analytics", 
    icon: BarChart3, 
    current: false 
  },
]

const secondaryNavigation = [
  { 
    name: "Settings", 
    href: "/settings", 
    icon: Settings, 
    current: false 
  }
]

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-white text-xl font-bold">Laven</div>
            <div className="text-gray-400 text-sm">Enterprise</div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Core Modules
        </div>
        {navigation.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </nav>

      {/* Secondary Navigation */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="space-y-1">
          {secondaryNavigation.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-800">
        <div className="text-xs text-gray-500">
          Version 1.0.0
        </div>
      </div>
    </div>
  )
}