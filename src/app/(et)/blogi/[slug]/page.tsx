import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BLOG_POSTS, getBlogPost } from "@/lib/blog";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogi/${post.slug}/` },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/blogi/"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-accent hover:text-accent-2"
        >
          ← Blogi
        </Link>

        <p className="mt-6 text-xs uppercase tracking-wide text-paper-2">
          {new Date(post.date).toLocaleDateString("et-EE")}
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight text-paper sm:text-5xl">{post.title}</h1>

        <div className="mt-10 space-y-6 text-paper-2">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
