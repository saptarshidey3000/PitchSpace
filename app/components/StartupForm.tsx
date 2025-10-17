"use client"
import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Send } from "lucide-react";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string,string>>({});
    const [pitch, setPitch] = useState("");
    const isPending =false;
  return (
    <form action={()=>{}}
     className="max-w-2xl mx-auto bg-white my-10 space-y-8 px-6">
        <div>
            <label htmlFor="title"
            className="font-bold text-[18px] text-black uppercase">Title</label>
            <Input
            id="title"
            name="title"
            className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
            required
            placeholder="Startup Title"
            />
            {errors.title && <p 
            className="font-bold text-[18px] text-black uppercase">
            {errors.title}</p>}
        </div>
        <div>
            <label htmlFor="description"
            className="font-bold text-[18px] text-black uppercase">Description</label>
            <Input
            id="description"
            name="description"
            className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
            required
            placeholder="Startup description"
            />
            {errors.description && <p 
            className="font-bold text-[18px] text-black uppercase">
            {errors.description}</p>}
        </div>
        <div>
            <label htmlFor="category"
            className="font-bold text-[18px] text-black uppercase">Category</label>
            <Input
            id="category"
            name="category"
            className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
            required
            placeholder="Startup Category (Tech , Health , Education ...)"
            />
            {errors.category && <p 
            className="font-bold text-[18px] text-black uppercase">
            {errors.category}</p>}
        </div>
        <div>
            <label htmlFor="link"
            className="font-bold text-[18px] text-black uppercase">Image Link</label>
            <Input
            id="title"
            name="title"
            className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
            required
            placeholder="Startup Image URL"
            />
            {errors.link && <p 
            className="font-bold text-[18px] text-black uppercase">
            {errors.link}</p>}
        </div>
        <div data-color-mode="light">
            <label htmlFor="pitch"
            className="font-bold text-[18px] text-black uppercase">Pitch</label>
        <MDEditor
        value={pitch}
        onChange={(value)=>setPitch(value as string)}
        id="pitch"
        preview="edit"
        height={300}
        style={{borderRadius:20,overflow:"hidden"}}
        textareaProps={{
            placeholder:"Briefly describe your idea and what problem it solves"
        }}
      />
            {errors.pitch && <p 
            className="font-bold text-[18px] text-black uppercase">
            {errors.pitch}</p>}
        </div>
<button
  type="submit"
  className={`flex items-center justify-center gap-2 bg-primary border-4 border-black rounded-full px-6 py-4 md:py-5 w-full font-bold text-white text-[16px] md:text-[18px] transition-colors duration-200 hover:bg-primary-dark`}
  disabled={isPending}
>
  {isPending ? "Submitting" : "Submit your Pitch"}
  <Send className="w-5 h-5 md:w-6 md:h-6" />
</button>

    </form>
  )
}

export default StartupForm