import StartupForm from "@/app/components/StartupForm"
import { auth } from "@/auth"
import { redirect } from "next/dist/server/api-utils";

const Page = async() => {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div>
      <section className="w-full bg-primary min-h-[530px] pattern 
      flex justify-center items-center flex-col py-10 px-6 -mt-6"
      style={{ 
          backgroundImage: 'repeating-linear-gradient(to right, transparent 0 30px, rgba(0,0,0,0.05) 30px 32px)'
        }}>
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px]
         sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Submit Your StartUp</h1>
      </section>
      <StartupForm/>
    </div>
  )
}

export default Page