import { User, Bell, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Bell, label: "Notifications", badge: "3" },
  { icon: Shield, label: "Privacy & Security" },
  { icon: HelpCircle, label: "Help & Support" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="max-w-lg mx-auto flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24 border-4 border-white/30">
            <AvatarFallback className="bg-white/20 text-2xl font-bold">JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-sm opacity-90">john.doe@email.com</p>
          </div>
        </div>
      </header>

      {/* Profile Stats */}
      <section className="max-w-lg mx-auto px-6 -mt-8">
        <Card className="p-4 bg-gradient-card shadow-medium">
          <div className="grid grid-cols-3 divide-x divide-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Consultations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-success">24</p>
              <p className="text-xs text-muted-foreground">Records</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground">Medications</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Menu Items */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Card
              key={item.label}
              className="p-4 bg-card shadow-soft card-hover cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Logout */}
      <section className="max-w-lg mx-auto px-6 mt-4">
        <Button
          variant="outline"
          className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </section>

      <BottomNav />
    </div>
  );
};

export default Profile;
