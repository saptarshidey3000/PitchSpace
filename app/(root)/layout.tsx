import Navbar from "../components/Navbar";

export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return(
        <main className="font-work-sans pt-17"> {/* pt-16 = height of navbar */}
            <Navbar/>
            {children}
        </main>
    )
}
