import { Card, CardTitle } from "@/components/ui/card";
import { LucideUsers2 } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string;
}

const StatsCard = ({ title, value }: StatusCardProps) => {
  return (
    <Card>
      <div className="p-5 py-0">
        <div className="flex items-center">
          <LucideUsers2 className="w-5 h-5" />
          <div className="ml-5 w-0 flex-1">
            <CardTitle className="text-sm text-zinc-300 tracking-wide">
              {title}
            </CardTitle>
            <div className="text-2xl font-medium text">{value}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
