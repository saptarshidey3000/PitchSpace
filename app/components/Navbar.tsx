import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-4 bg-white border-b-4 border-black shadow-200">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image 
            src="/pitchspacelogo.png" 
            alt="logo" 
            width={144} 
            height={30}
            className="hover:opacity-90 transition-opacity" 
          />
        </Link>

        <div className="flex items-center gap-4 text-black">
          {session && session?.user ? (
            <>
              {/* Create Link with Custom Styling */}
              <Link href="/startup/create" className="nav-pill group">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-5 sm:hidden group-hover:scale-110 transition-transform" />
              </Link>

              {/* Logout Button */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button 
                  type="submit" 
                  className="nav-pill hover:bg-red-50 hover:border-red-500 hover:text-red-600 group"
                >
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-5 sm:hidden group-hover:scale-110 transition-transform" />
                </button>
              </form>

              {/* User Avatar with Enhanced Styling */}
              <Link href={`/user/${session?.id}`} className="group">
                <Avatar className="size-12 border-2 border-black shadow-100 group-hover:shadow-300 transition-all duration-300 group-hover:-translate-y-1">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                    {session?.user?.name?.charAt(0)?.toUpperCase() || "AV"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            /* Login Button with Primary Styling */
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button 
                type="submit" 
                className="btn-primary-glow text-sm px-6 py-3"
              >
                Login with GitHub
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;