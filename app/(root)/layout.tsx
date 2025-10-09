import Navbar from "../components/Navbar";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-work-sans min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Suspense fallback={<div>Loading navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="pt-6">{children}</div>
    </main>
  );
}
