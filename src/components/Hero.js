export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Fique atualizado com nossa newsletter
        </h1>
        <p className="text-xl mb-8">
          Assine para receber as últimas atualizações diretamente na sua caixa
          de entrada
        </p>
        <a
          href="#signup"
          className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-100"
        >
          INSCREVA-SE!
        </a>
      </div>
    </section>
  );
}
