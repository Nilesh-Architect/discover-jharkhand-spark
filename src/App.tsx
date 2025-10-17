import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNativeApp } from "@/hooks/useNativeApp";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import Attractions from "./pages/Attractions";
import Destination from "./pages/Destination";
import DestinationAccommodation from "./pages/DestinationAccommodation";
import Reviews from "./pages/Reviews";
import Itinerary from "./pages/Itinerary";
import Accommodation from "./pages/Accommodation";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  
  // Initialize native app features (splash screen, status bar)
  useNativeApp();
  
  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/destination/:id/accommodation" element={<DestinationAccommodation />} />
          <Route path="/destination/:id/reviews" element={<Reviews />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
    </>
  );
};

export default App;
