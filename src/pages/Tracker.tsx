import { Heart, Activity, Droplets, Moon, Flame } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { HealthCard } from "@/components/HealthCard";
import { Card } from "@/components/ui/card";

const Tracker = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 shadow-soft">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-1">Health Tracker</h1>
          <p className="text-sm text-muted-foreground">Monitor your daily health metrics</p>
        </div>
      </header>

      {/* Today's Vitals */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <h2 className="text-lg font-semibold mb-4">Today's Vitals</h2>
        <div className="grid grid-cols-2 gap-4">
          <HealthCard icon={Heart} title="Heart Rate" value="72" unit="bpm" trend="stable" />
          <HealthCard icon={Activity} title="Steps" value="6,847" unit="steps" trend="up" />
          <HealthCard icon={Droplets} title="Hydration" value="1.2" unit="L" trend="down" />
          <HealthCard icon={Moon} title="Sleep" value="7.5" unit="hrs" trend="stable" />
        </div>
      </section>

      {/* Weekly Activity */}
      <section className="max-w-lg mx-auto px-6 mt-4">
        <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
        <Card className="p-6 bg-gradient-card shadow-soft">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <Flame className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">1,247 Calories Burned</h3>
              <p className="text-sm text-muted-foreground">This week</p>
            </div>
          </div>
          <div className="h-32 bg-muted/50 rounded-xl flex items-end justify-around p-4 gap-2">
            {[65, 80, 45, 90, 75, 60, 85].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-primary rounded-t-lg transition-smooth"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <BottomNav />
    </div>
  );
};

export default Tracker;
