import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Heart, Leaf, Users, Wheat } from 'lucide-react'
import  {posts} from './data'
import headerBg from '@/public/header5.jpg'

const categories = [
  { name: 'Tous les articles', icon: null, count: 5 },
  { name: 'Éco-éducation', icon: Leaf, count: 1 },
  { name: 'Santé', icon: Heart, count: 1 },
  { name: 'Droits humains', icon: Users, count: 3 },
  { name: 'Agriculture', icon: Wheat, count: 1 },
]

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src={headerBg.src}
            alt="Blog hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Nos réalisations
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Découvrez nos actualités, nos projets et leur impact sur le terrain.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="lg:flex lg:gap-x-16">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-none">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Catégories</h2>
            <nav className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="flex items-center gap-x-3 w-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                >
                  {category.icon && (
                    <category.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  )}
                  <span>{category.name}</span>
                  <span className="ml-auto">{category.count}</span>
                </button>
              ))}
            </nav>

            {/* Newsletter */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h2>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Restez informé de nos actions
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Recevez nos dernières actualités directement dans votre boîte mail.
                </p>
                <form className="mt-4">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="mb-2"
                  />
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    S{"'"}abonner
                  </Button>
                </form>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="mt-12 lg:mt-0 lg:flex-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {posts.map((post: any) => (
                <Card key={post.title} className="flex flex-col overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.images[0].url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                        {post.category.name}
                      </span>
                    </div>
                    <CardTitle className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="hover:text-green-700">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={post.author.image}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full"
                        width={40}
                        height={40}
                      />
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{post.author.name}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardContent className="mt-auto">
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                      className="text-sm font-semibold leading-6 text-blue-500"
                    >
                      Lire la suite <span aria-hidden="true">→</span>
                    </Link>
                  </CardContent>
                </Card>
              )).reverse()}
            </div>

            {/* Pagination */}
            {/* <div className="mt-12 flex items-center justify-center">
              <nav className="flex items-center gap-x-2">
                <Button variant="outline" className="text-sm">
                  Précédent
                </Button>
                <Button variant="outline" className="text-sm">
                  1
                </Button>
                <Button variant="outline" className="text-sm">
                  2
                </Button>
                <Button variant="outline" className="text-sm">
                  3
                </Button>
                <Button variant="outline" className="text-sm">
                  Suivant
                </Button>
              </nav>
            </div> */}
          </main>
        </div>
      </div>
    </div>
  )
}