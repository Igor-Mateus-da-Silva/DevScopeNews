import { IconCodeCircle2 } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a
          href="#"
          className="flex gap-2 items-center text-2xl font-bold text-blue-600"
        >
          <IconCodeCircle2 size={40} />
          DevScopeNews
        </a>
        <div>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 mx-4"
          >
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 mx-4">
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
