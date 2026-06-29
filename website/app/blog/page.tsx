import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Social Games, WhatsApp Tips & Group Activities",
  description:
    "Guides, tips, and ideas for playing social deduction games on WhatsApp. Async game strategies, remote team building, and group activity inspiration.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Guides, ideas, and inspiration for playing social games with
            friends, family, and remote teams — no video calls required.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
            >
              <time className="text-xs text-muted">{post.date}</time>
              <h2 className="text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {post.description}
              </p>
              <span className="inline-block mt-3 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
