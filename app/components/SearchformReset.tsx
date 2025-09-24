"use client";

import { CrossIcon } from "lucide-react";
import Link from "next/link";
const SearchformReset = () => {

    const reset=()=>{
        const form = document.querySelector(".my-form")as HTMLFormElement
        if(form) form.reset();
    }

  return (
    <div>
        <button type="reset" onClick={reset}>
            <Link href="/"
             className="absolute right-12 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/80">
            <CrossIcon/>
            </Link>
        </button>
    </div>
  )
}

export default SearchformReset