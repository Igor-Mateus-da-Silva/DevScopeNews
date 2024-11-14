"use client";

import Link from "next/link";
import {
  ImInstagram,
  ImWhatsapp,
  ImTwitter,
  ImMail,
  ImPhone,
} from "react-icons/im";
import { TbCodeCircle } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-3">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-justify">
            <div className="flex gap-2 items-center">
              <TbCodeCircle size={30} className="bg-blue-600 p-1 rounded-md" />
              <h5 className="font-semibold text-white">DevScopeNews</h5>
            </div>
            <p className="mt-1 text-sm">
              tudo que você precisa saber sobre o mundo tech & dev para
              manter-se informado
            </p>
            <h5 className="font-semibold mt-3">Entre em contato</h5>
            <div className="flex gap-4" id="contact">
              <span className="flex gap-1 items-center">
                <ImMail size={15} /> contato@contato.com
              </span>
              <span className="flex gap-1 items-center">
                <ImPhone size={15} />
                (00) 00000-0000
              </span>
            </div>
          </div>
          <div className="" id="social">
            <h5 className="font-semibold">Siga nossas redes Sociais!</h5>
            <div className="mt-3 flex gap-8 justify-center items-center">
              <Link className="hover:text-blue-500" href="#social">
                <ImInstagram size={30} />
              </Link>
              <Link className="hover:text-blue-500" href="#social">
                <ImWhatsapp size={30} />
              </Link>
              <Link className="hover:text-blue-500" href="#social">
                <ImTwitter size={30} />
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
        <p className="mt-10 text-sm">
          &copy; {new Date().getFullYear()} DevScope News. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
