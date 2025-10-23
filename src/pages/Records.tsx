import { FileText, Upload, Search } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const records = [
  { id: 1, type: "Lab Result", title: "Blood Test", date: "2024-10-15", doctor: "Dr. Sarah Chen" },
  { id: 2, type: "Prescription", title: "Vitamin D", date: "2024-10-10", doctor: "Dr. Michael Ross" },
  { id: 3, type: "Report", title: "Annual Checkup", date: "2024-09-28", doctor: "Dr. Sarah Chen" },
];

const Records = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 shadow-soft">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Health Records</h1>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search records..." className="pl-10 rounded-full" />
            </div>
            <Button size="icon" className="rounded-full shadow-soft">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Records List */}
      <section className="max-w-lg mx-auto px-6 py-6">
        <div className="space-y-4">
          {records.map((record) => (
            <Card
              key={record.id}
              className="p-4 bg-gradient-card shadow-soft card-hover cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{record.title}</h3>
                  <p className="text-sm text-muted-foreground">{record.doctor}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">{record.type}</span>
                    <span className="text-xs text-muted-foreground">{record.date}</span>
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

export default Records;
