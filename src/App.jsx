import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Crowdfunding from "./pages/Crowdfunding";
import Alerts from "./pages/Alerts";
import News from "./pages/News";
import LearningHub from "./pages/LearningHub";
import StockListing from "./components/StockListing";
import StartupDetails from "./pages/StartupDetails";
import LearningModule from "./pages/LearningModule";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<StockListing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crowdfunding" element={<Crowdfunding />} />
              <Route path="/startup/:id" element={<StartupDetails />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/news" element={<News />} />
              <Route path="/learning-hub" element={<LearningHub />} />
              <Route path="/learning-hub/:moduleId" element={<LearningModule />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;