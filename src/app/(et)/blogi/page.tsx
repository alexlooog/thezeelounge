import type { Metadata } from "next";
import Link from "next/link";

import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blogi",
  description:
    "Nõuanded ja juhised juuksehoolduse, habemehoolduse ja stiili kohta The Zee Lounge'ilt, Tallinnast Kadriorust.",
  alternates: { canonical: "/blogi/" },
};

export default function BlogIndexPage() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Blogi</p>
        <h1 className="mt-3 font-display text-5xl text-paper sm:text-6xl">Nõuanded ja lood The Zee Lounge&apos;ist</h1>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="border-b border-line pb-8">
              <Link href={`/blogi/${post.slug}/`} className="group">
                <p className="text-xs uppercase tracking-wide text-paper-2">
                  {new Date(post.date).toLocaleDateString("et-EE")}
                </p>
                <h2 className="mt-2 font-display text-2xl text-paper transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-paper-2">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
