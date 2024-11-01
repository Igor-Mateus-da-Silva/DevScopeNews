"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} DevScope News. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
