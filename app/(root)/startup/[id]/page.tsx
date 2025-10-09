import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import type { Startup } from "@/sanity/types";
import { use } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = ({ params }: PageProps) => {
  // Unwrap the async params
  const { id } = use(params);

  // Fetch the startup by ID
  const post: Startup | null = use(client.fetch(STARTUP_BY_ID_QUERY, { id }));

  if (!post) return notFound();

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-600">{post.description}</p>
    </div>
  );
};

export default Page;
