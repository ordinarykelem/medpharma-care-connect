import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import Auth from "./pages/Auth.tsx";
import AppShell from "./components/AppShell";
import Dashboard from "./pages/Dashboard.tsx";
import Seo from "./pages/Seo.tsx";
import Social from "./pages/Social.tsx";
import Gbp from "./pages/Gbp.tsx";
import Tasks from "./pages/Tasks.tsx";
import Brand from "./pages/Brand.tsx";
import { AuthProvider } from "./hooks/useAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<AppShell />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/seo" element={<Seo />} />
              <Route path="/social" element={<Social />} />
              <Route path="/gbp" element={<Gbp />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/brand" element={<Brand />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
