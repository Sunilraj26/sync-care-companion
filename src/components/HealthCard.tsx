import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HealthCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "stable";
  className?: string;
  onClick?: () => void;
}

export const HealthCard = ({
  icon: Icon,
  title,
  value,
  unit,
  trend,
  className,
  onClick,
}: HealthCardProps) => {
  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card shadow-soft card-hover cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">{value}</span>
            {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
          </div>
        </div>
        <div className="p-2 rounded-xl bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      {trend && (
        <div className="mt-2 text-xs text-muted-foreground">
          {trend === "up" && "↑"} {trend === "down" && "↓"} {trend === "stable" && "→"}
        </div>
      )}
    </Card>
  );
};
