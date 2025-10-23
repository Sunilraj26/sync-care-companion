import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BottomNav } from "@/components/BottomNav";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SymptomCheck = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI health assistant. Please describe your symptoms, and I'll help you understand what might be going on. Remember, I'm not a replacement for professional medical advice.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Based on what you've described, here are some possible causes. However, I recommend booking an appointment with a healthcare professional for a proper diagnosis.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex flex-col pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border p-4 sticky top-0 z-10 shadow-soft">
        <div className="max-w-lg mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="font-semibold">AI Symptom Checker</h1>
            <p className="text-xs text-muted-foreground">Powered by CareSync+</p>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 max-w-lg mx-auto w-full px-6 py-6 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 shadow-soft ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="max-w-lg mx-auto w-full px-6 pb-6 bg-background">
        <div className="flex gap-2">
          <Input
            placeholder="Describe your symptoms..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-full"
          />
          <Button size="icon" onClick={handleSend} className="rounded-full">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SymptomCheck;
