import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-6 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/pitchspacelogo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6 text-black">
          {session?.user ? (
            <>
              {/* Create button */}
              <Link
                href="/startup/create"
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <span className="hidden sm:inline">Create</span>
                <BadgePlus className="size-5 sm:hidden" />
              </Link>

              {/* Logout button */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <LogOut className="size-5 text-red-500" />
                </button>
              </form>

              {/* Avatar */}
              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-9 border shadow-sm hover:opacity-90 transition">
                  <AvatarImage
                    src={session.user.image || ""}
                    alt={session.user.name || ""}
                  />
                  <AvatarFallback>
                    {session.user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
