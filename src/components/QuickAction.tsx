import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export const QuickAction = ({ icon: Icon, label, onClick }: QuickActionProps) => {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center gap-2 h-auto py-4 px-6 bg-card hover:bg-primary/5 border-border transition-smooth"
      onClick={onClick}
    >
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </Button>
  );
};
