import { Heart, Activity, Pill, Calendar, MessageCircle, AlertCircle } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { HealthCard } from "@/components/HealthCard";
import { QuickAction } from "@/components/QuickAction";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-1">Good Morning!</h1>
          <p className="text-sm opacity-90">How are you feeling today?</p>
        </div>
      </header>

      {/* Emergency SOS */}
      <div className="max-w-lg mx-auto px-6 -mt-6">
        <Button
          variant="destructive"
          className="w-full shadow-glow font-semibold"
          onClick={() => alert("Emergency SOS activated")}
        >
          <AlertCircle className="w-5 h-5 mr-2" />
          Emergency SOS
        </Button>
      </div>

      {/* Quick Actions */}
      <section className="max-w-lg mx-auto px-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          <QuickAction
            icon={MessageCircle}
            label="Symptom Check"
            onClick={() => navigate("/symptom-check")}
          />
          <QuickAction
            icon={Calendar}
            label="Book Appointment"
            onClick={() => navigate("/consult")}
          />
          <QuickAction icon={Pill} label="Medications" onClick={() => navigate("/medications")} />
        </div>
      </section>

      {/* Health Overview */}
      <section className="max-w-lg mx-auto px-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Today's Health</h2>
        <div className="grid grid-cols-2 gap-4">
          <HealthCard
            icon={Heart}
            title="Heart Rate"
            value="72"
            unit="bpm"
            trend="stable"
            onClick={() => navigate("/tracker")}
          />
          <HealthCard
            icon={Activity}
            title="Steps"
            value="6,847"
            unit="steps"
            trend="up"
            onClick={() => navigate("/tracker")}
          />
        </div>
      </section>

      {/* Upcoming */}
      <section className="max-w-lg mx-auto px-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Upcoming</h2>
        <div className="bg-card rounded-2xl p-4 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-accent/10">
              <Pill className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Vitamin D</h3>
              <p className="text-sm text-muted-foreground">Take 1 tablet after breakfast</p>
              <p className="text-xs text-muted-foreground mt-1">Due in 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Home;
