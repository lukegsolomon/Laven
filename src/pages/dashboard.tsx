// pages/dashboard.tsx
import { AppShell } from "@/components/layout/AppShell"
import { MetricCard } from "@/components/dashboard/MetricCard"
import { DataTable } from "@/components/tables/DataTable"
import { PropertyMap } from "@/components/maps/PropertyMap"
import { AIChat } from "@/components/ai/AIChat"
import { Building2, DollarSign, Users, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Properties"
            value="1,247"
            icon={Building2}
            trend={{ value: "12% vs last month", positive: true }}
          />
          <MetricCard
            title="Monthly Revenue"
            value="$2.4M"
            icon={DollarSign}
            trend={{ value: "8% vs last month", positive: true }}
          />
          <MetricCard
            title="Occupancy Rate"
            value="94.2%"
            icon={Users}
            trend={{ value: "2% vs last month", positive: false }}
          />
          <MetricCard
            title="Active Alerts"
            value="23"
            icon={AlertTriangle}
            status="warning"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PropertyMap 
              properties={[]} 
              onPropertyClick={() => {}} 
            />
          </div>
          <div>
            <AIChat />
          </div>
        </div>

        {/* Data Table */}
        <DataTable
          data={[]}
          columns={[
            { key: "name", header: "Property Name" },
            { key: "units", header: "Units" },
            { key: "occupancy", header: "Occupancy" },
            { key: "revenue", header: "Revenue" }
          ]}
        />
      </div>
    </AppShell>
  )
}
