// import { IconCodeCircle2 } from "@tabler/icons-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a
          href="#"
          className="flex gap-2 items-center text-2xl font-bold text-blue-600"
        >
          <Image
            src="/DevCodeNews-logo.png"
            width={40}
            height={40}
            alt="Logotipo do site"
          />
          {/* <IconCodeCircle2
            size={80}
            className="bg-blue-600 text-white p-3 rounded-md"
          /> */}
          DevScopeNews
        </a>
        <div>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 mx-4"
          >
            Features
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 mx-4">
            Contato
          </a>
          <a href="#signup" className="text-gray-700 hover:text-blue-600 mx-4">
            Inscrever-se
          </a>
        </div>
      </nav>
    </header>
  );
}
