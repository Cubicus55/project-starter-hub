import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiePage from "./pages/CookiePage";
import PitchDeck from "./pages/PitchDeck";
import CheckoutRazina1 from "./pages/CheckoutRazina1";
import CheckoutRazina2 from "./pages/CheckoutRazina2";
import CheckoutRazina3 from "./pages/CheckoutRazina3";
import CheckoutBundle from "./pages/CheckoutBundle";
import ThankYouPurchase from "./pages/ThankYouPurchase";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/project-starter-hub">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uvjeti-poslovanja" element={<TermsPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPage />} />
          <Route path="/politika-kolacica" element={<CookiePage />} />
          <Route path="/pitch-deck" element={<PitchDeck />} />
          <Route path="/checkout-razina-1" element={<CheckoutRazina1 />} />
          <Route path="/checkout-razina-2" element={<CheckoutRazina2 />} />
          <Route path="/checkout-razina-3" element={<CheckoutRazina3 />} />
          <Route path="/checkout-sve-3-razine" element={<CheckoutBundle />} />
          <Route path="/hvala-na-kupnji" element={<ThankYouPurchase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
