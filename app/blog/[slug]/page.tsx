import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { getPostBySlug, getRelatedPosts, posts } from '../data'
// import { ShareButtons } from './components/ShareButtons'
// import { NewsletterButton } from './components/NewsLetterButton'

// Génère les chemins statiques pour chaque article
export function generateStaticParams() {
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="flex items-center gap-x-4 text-sm text-white mb-4">
            <time dateTime={post.date} className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </time>
            <span className={`flex items-center rounded-full px-3 py-1.5 font-medium ${post.category.color}`}>
              <Tag className="mr-2 h-4 w-4" />
              {post.category.name}
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {post.title}
          </h1>
          <div className="mt-8 flex items-center gap-x-4">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-white">
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-sm">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <article className="prose prose-lg prose-green mx-auto">
          {post.content.split('\n').map((line: any, index: any) => (
            line.trim() && <p key={index}>{line}</p>
          ))}
        </article>

        {/* Image Gallery */}
        {post.images.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Galerie photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.images.map((image: any, index: any) => (
                <figure key={index} className="relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                  <figcaption className="mt-2 text-sm text-gray-600">
                    {/* {image.caption} */}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-16">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: any) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Articles liés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative h-48 mb-4">
                    <Image
                      src={relatedPost.mainImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover rounded-lg group-hover:brightness-75 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-green-700">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{relatedPost.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Share and Navigation */}
        <div className="mt-16 flex items-center justify-between border-t pt-8">
          <Button variant="outline" asChild>
            <Link href="/blog">← Retour aux articles</Link>
          </Button>
          {/* <div className="flex gap-4">
            <ShareButtons />
            <NewsletterButton />
          </div> */}
        </div>
      </div>
    </div>
  )
}