import Image from "next/image";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <section className="py-12 px-3 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-950">
          Ultimas Edições
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden group hover:cursor-pointer"
            >
              <Link href={`/posts/${post.id}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
