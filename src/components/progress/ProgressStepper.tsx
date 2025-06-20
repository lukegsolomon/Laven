// components/progress/ProgressStepper.tsx
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface Step {
  id: string
  title: string
  description?: string
  status: "pending" | "current" | "completed"
}

interface ProgressStepperProps {
  steps: Step[]
  className?: string
}

export function ProgressStepper({ steps, className }: ProgressStepperProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border-2",
                step.status === "completed" && "border-green-500 bg-green-500",
                step.status === "current" && "border-purple-500 bg-purple-500",
                step.status === "pending" && "border-gray-300 bg-white"
              )}
            >
              {step.status === "completed" ? (
                <Check className="h-4 w-4 text-white" />
              ) : (
                <span
                  className={cn(
                    "text-sm font-medium",
                    step.status === "current" && "text-white",
                    step.status === "pending" && "text-gray-500"
                  )}
                >
                  {index + 1}
                </span>
              )}
            </div>
            <div className="ml-3">
              <div
                className={cn(
                  "text-sm font-medium",
                  step.status === "current" && "text-purple-600",
                  step.status === "completed" && "text-green-600",
                  step.status === "pending" && "text-gray-500"
                )}
              >
                {step.title}
              </div>
              {step.description && (
                <div className="text-xs text-gray-500">{step.description}</div>
              )}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div
              className={cn(
                "mx-4 h-0.5 w-12",
                steps[index + 1].status !== "pending" ? "bg-green-500" : "bg-gray-300"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}
