import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
const chartData = [
  { task: "Completed", value: 45, fill: "var(--chart-1)" },
  { task: "In Progress", value: 30, fill: "var(--chart-2)" },
  { task: "Pending", value: 15, fill: "var(--chart-3)" },
  { task: "Blocked", value: 10, fill: "var(--chart-4)" },
];

const chartConfig = {
  tasks: {
    label: "Tasks",
  },
  completed: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  ["in-progress"]: {
    label: "In-progress",
    color: "hsl(var(--chart-2))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-3))",
  },
  blocked: {
    label: "Blocked",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function MyPieChart({ title }: { title: string }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-lg text-text">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="value" label nameKey="task" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
