// components/workflows/WorkflowCanvas.tsx
import { useCallback, useState } from "react"
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
} from "reactflow"
import { Card } from "@/components/ui/card"

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Tenant Request' },
    position: { x: 250, y: 25 },
  },
]

const initialEdges: Edge[] = []

export function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <Card className="w-full h-96">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="bg-gray-50"
      />
    </Card>
  )
}