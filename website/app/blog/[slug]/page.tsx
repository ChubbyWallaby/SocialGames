import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { WhatsAppButton } from "@/app/whatsapp-button";

const WHATSAPP_URL =
  "https://wa.me/351912990758?text=Hi!%20I%27d%20like%20to%20join%20a%20Confide%20session";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} — Confide`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl font-bold mt-10 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl font-bold mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-foreground/80 leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="list-disc pl-6 space-y-2 text-foreground/80 mb-4"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="list-decimal pl-6 space-y-2 text-foreground/80 mb-4"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-primary underline hover:no-underline" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-bold text-foreground" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-muted my-6"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-purple-100" />,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Confide",
      url: "https://playconfide.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Confide",
    },
  };

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-8"
        >
          ← Back to blog
        </Link>

        <time className="text-sm text-muted">{post.date}</time>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          {post.title}
        </h1>

        <div className="prose-confide">
          <MDXRemote source={post.content} components={components} />
        </div>

        <div className="text-center py-10 mt-12 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold mb-2">Ready to play?</h2>
          <p className="text-muted mb-6">
            Message us on WhatsApp and we&apos;ll get you into the next game.
          </p>
          <WhatsAppButton
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-green-200 transition-all"
          >
            Join via WhatsApp
          </WhatsAppButton>
        </div>
      </article>
    </div>
  );
}
