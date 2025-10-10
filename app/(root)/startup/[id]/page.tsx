import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import type { Startup } from "@/sanity/types";
import { use, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it"
const md = markdownit();

interface PageProps {
  params: Promise<{ id: string }>;
}

// ✅ Wrap the data-fetching part in a <Suspense> boundary
const Page = ({ params }: PageProps) => {
  return (
<Suspense fallback={
  <div className="flex items-center justify-center h-full min-h-[300px]">
    <div className="flex space-x-2 animate-pulse">
      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
    </div>
  </div>
}>
  <StartupContent params={params} />
</Suspense>

  );
};

// ✅ Isolate the data logic inside a component that runs under Suspense
function StartupContent({ params }: PageProps) {
  const { id } = use(params);
  const post: Startup | null = use(client.fetch(STARTUP_BY_ID_QUERY, { id }));

  if (!post) return notFound();
  const parsecontent = md.render(post?.pitch || ``);

  return (
    <div>
      {/* Hero Section with redesigned styling matching the target */}
      <section 
        className="flex min-h-[550px] w-full justify-center items-center bg-[#ee2b69] px-4 py-12 font-['Work_Sans'] -mt-6"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(to right, transparent 0 30px, rgba(0,0,0,0.05) 30px 32px)'
        }}
      >
        <div className="w-full max-w-5xl">
          {/* Date tag */}
          <div className="flex justify-center mb-6">
            <span className="bg-yellow-400 text-black font-bold text-sm px-6 py-2 rounded-md uppercase tracking-wide border-2 border-black inline-block">
              {new Date(post._createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          {/* Dark card container */}
          <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase tracking-tight">
                {post.title}
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        {/* Main Image - Now outside hero */}
        <div className="mb-12 -mt-16 md:-mt-20 lg:-mt-24 relative z-10">
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
            <img
              src={post.image}
              alt="startup thumbnail"
              className="w-full h-auto rounded-xl md:rounded-2xl object-cover aspect-video"
            />
          </div>
        </div>

        <div className="space-y-8">
          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200">
            <Link
              href={`/user/${post.author?.id}`}
              className="flex gap-3 items-center"
            >
<div className="w-12 h-12 overflow-hidden rounded-full drop-shadow-lg">
  <Image
    src={post.author.image}
    alt="avatar"
    width={48}
    height={48}
    className="object-cover w-full h-full"
  />
</div>

              <div>
                <p className="text-lg font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">@{post.author.username || 'creator'}</p>
              </div>
            </Link>
            <span className="px-4 py-2 bg-pink-100 rounded-full text-sm font-medium text-gray-700">
                {post.category}
            </span>

          </div>

          {/* Pitch Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pitch Details</h3>
            {parsecontent ? (
              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{__html:parsecontent}}
              />
            ):(
              <p className="text-gray-600">No Details Provided</p>
            )}
          </div>
        </div>
        <hr className="my-12 border-gray-200" />
        {/* Editor Selected Startup */}
      </section>
    </div>
  );
}

export default Page;