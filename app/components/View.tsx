import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {
  // 1️⃣ Fetch total views
  const { views } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // 2️⃣ Increment view count asynchronously (after response)
  after(async () => {
    await writeClient
      .patch(id)
      .set({ views: views + 1 })
      .commit();
  });

  // 3️⃣ Return view UI
  return (
    <div className="flex justify-end items-center mt-5 fixed bottom-3 right-3">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize">
        <span className="font-black">Views: {views}</span>
      </p>
    </div>
  );
};

export default View;
