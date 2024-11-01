import Image from "next/image";

export default function LatestPosts() {
  const posts = [
    {
      id: 1,
      title: "Frameworks JavaScript: Escolhendo o Ideal para Seu Projeto",
      image:
        "https://www.mundojs.com.br/wp-content/uploads/2018/01/frameworks.png",
    },
    {
      id: 2,
      title:
        "A Ascensão da IA: Como a Inteligência Artificial Está Transformando a Indústria da Tecnologia",
      image:
        "https://www.dataex.com.br/wp-content/uploads/2021/05/inteligencia-artificial-o-que-e-como-funciona-e-aplicacoes-praticas.jpg",
    },
    {
      id: 3,
      title:
        "Introdução ao TypeScript: Um Guia para Desenvolvedores JavaScript",
      image:
        "https://media.licdn.com/dms/image/D4D12AQEmxmyTkrPGbw/article-cover_image-shrink_720_1280/0/1690674031231?e=2147483647&v=beta&t=CWGk-6pDeIJSjSIn9vl0-c2AAAr46qpdBMKN7-6mgzw",
    },
    {
      id: 4,
      title:
        "Explorando o Poder da Computação em Nuvem no Desenvolvimento Moderno",
      image: "https://fia.com.br/wp-content/uploads/2024/06/NUVEM-capa.png",
    },
    {
      id: 5,
      title: "Top 5 Linguagens de Programação para Aprender em 2024",
      image:
        "https://tm.ibxk.com.br/2021/08/10/10181814794027.jpg?ims=1200x675",
    },
    {
      id: 6,
      title: "Como Criar Sites Responsivos com Tailwind CSS",
      image:
        "https://danieldcs.com/wp-content/uploads/2022/01/como-usar-o-tailwindcss-1024x576.png",
    },
  ];

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
