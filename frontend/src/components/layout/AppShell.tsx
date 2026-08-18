import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function AppShell() {
  return (
    <div className="flex min-h-screen flex-col bg-canil-surface text-[#173536] md:flex-row">
      <Navbar />

      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
