import { Calendar, Clock, Video, Search } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const doctors = [
  { id: 1, name: "Dr. Sarah Chen", specialty: "General Physician", available: "Today, 2:00 PM" },
  { id: 2, name: "Dr. Michael Ross", specialty: "Cardiologist", available: "Today, 4:30 PM" },
  { id: 3, name: "Dr. Emily Watson", specialty: "Dermatologist", available: "Tomorrow, 10:00 AM" },
];

const Consult = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Book Consultation</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/70" />
            <Input
              placeholder="Search doctors or specialties..."
              className="pl-10 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/70"
            />
          </div>
        </div>
      </header>

      {/* Available Doctors */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <h2 className="text-lg font-semibold mb-4">Available Soon</h2>
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="p-4 bg-gradient-card shadow-soft card-hover cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{doctor.available}</span>
                  </div>
                </div>
                <Button size="sm" className="rounded-full">
                  <Video className="w-4 h-4 mr-1" />
                  Book
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-lg mx-auto px-6 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">My Appointments</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
            <Video className="w-5 h-5" />
            <span className="text-sm">Instant Consult</span>
          </Button>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Consult;
