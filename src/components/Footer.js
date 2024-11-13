"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-3">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-justify">
            <h5 className="font-semibold">DevScopeNews</h5>
            <p className="mt-3 text-sm">
              tudo que você precisa saber sobre o mundo tech & dev para
              manter-se informado
            </p>
          </div>
          <div className="" id="social">
            <h5 className="font-semibold">Siga nossas redes Sociais!</h5>
            <div className="mt-5 text-sm">
              <Link
                href="#social"
                className="bg-rose-700 hover:bg-rose-400 text-white p-2 rounded-xl"
              >
                Instagram
              </Link>
              {" - "}
              <Link
                href="#social"
                className="bg-blue-400 hover:bg-blue-800 text-white p-2 rounded-xl"
              >
                X (Twitter)
              </Link>
              {" - "}
              <Link
                href="#social"
                className="bg-emerald-500 hover:bg-emerald-900 text-white p-2 rounded-xl"
              >
                Whatsapp
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-justify">
            <h5 className="font-semibold">Assine a newsletter!</h5>
            <div className="mt-3 flex-row items-baseline">
              <input
                type="email"
                placeholder="Seu endereço de e-mail..."
                className="w-60 px-4 py-2 rounded-lg border border-gray-300 text-blue-600 focus:border-blue-600 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 ml-2 rounded-full shadow-lg hover:bg-blue-700"
              >
                Inscrever-se!
              </button>
            </div>
          </div>
        </div>
        <p className="mt-10">
          &copy; {new Date().getFullYear()} DevScope News. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
