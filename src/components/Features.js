export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Por que assinar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <i className="fas fa-envelope-open-text text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold">Atualizações regulares</h3>
            <p className="mt-2 text-gray-700">
              Receba conteúdo novo toda semana diretamente na sua caixa de
              entrada.
            </p>
          </div>
          <div>
            <i className="fas fa-user-friends text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold">Conteúdo exclusivo</h3>
            <p className="mt-2 text-gray-700">
              Acesso a artigos e insights exclusivos para membros.
            </p>
          </div>
          <div>
            <i className="fas fa-chart-line text-6xl text-blue-600 mb-4"></i>
            <h3 className="text-2xl font-semibold">Fique a frente</h3>
            <p className="mt-2 text-gray-700">
              Seja o primeiro a saber sobre as últimas tendências do setor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
