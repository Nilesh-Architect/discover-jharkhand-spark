import { useState } from "react";
import { AlertCircle, X, Phone, Ambulance, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EmergencyButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyContacts = [
    { icon: Phone, name: "Police", number: "100", color: "text-blue-600" },
    { icon: Ambulance, name: "Ambulance", number: "102", color: "text-red-600" },
    { icon: Shield, name: "Women Helpline", number: "1091", color: "text-pink-600" },
    { icon: Phone, name: "Tourist Helpline", number: "1363", color: "text-primary" },
  ];

  return (
    <>
      {/* Floating Emergency Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-destructive text-destructive-foreground rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Emergency Services"
      >
        <AlertCircle className="h-6 w-6" />
      </button>

      {/* Emergency Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Emergency Services
            </DialogTitle>
            <DialogDescription>
              Quick access to emergency helplines. Tap to call directly.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {emergencyContacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.number}`}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <contact.icon className={`h-6 w-6 ${contact.color}`} />
                  <div>
                    <div className="font-semibold text-foreground">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">Tap to call</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-foreground">{contact.number}</div>
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground text-center">
            Available 24/7 for assistance
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmergencyButton;
