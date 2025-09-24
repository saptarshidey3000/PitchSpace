import Navbar from "../components/Navbar";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar/>
      <div className="pt-6">{children}</div>
    </main>
  );
}
