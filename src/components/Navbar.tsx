import { TbCodeCircle2 } from "react-icons/tb";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <a
          href="#"
          className="flex gap-2 items-center text-2xl font-bold text-blue-600"
        >
          <TbCodeCircle2
            size={40}
            className="bg-blue-600 text-white p-1 rounded-md"
          />
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
