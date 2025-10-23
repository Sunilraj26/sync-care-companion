import { ArrowLeft, Pill, Clock, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BottomNav } from "@/components/BottomNav";

const medications = [
  {
    id: 1,
    name: "Vitamin D",
    dosage: "1 tablet",
    time: "After breakfast",
    nextDose: "2 hours",
  },
  { id: 2, name: "Omega-3", dosage: "2 capsules", time: "After dinner", nextDose: "8 hours" },
  { id: 3, name: "Multivitamin", dosage: "1 tablet", time: "Morning", nextDose: "Tomorrow" },
];

const Medications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-4 shadow-soft">
        <div className="max-w-lg mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="font-semibold">My Medications</h1>
            <p className="text-xs text-muted-foreground">Daily reminders & tracking</p>
          </div>
          <Button size="icon" className="rounded-full">
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Medications List */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <div className="space-y-4">
          {medications.map((med) => (
            <Card key={med.id} className="p-4 bg-gradient-card shadow-soft card-hover cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Pill className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{med.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {med.dosage} • {med.time}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Next dose in {med.nextDose}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Medications;
