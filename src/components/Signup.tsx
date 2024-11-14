"use client";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email) {
      setSuccessMessage(true);
      setEmail("");
    }
  };

  return (
    <section id="signup" className="bg-gray-100 py-20 px-3">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">
          Cadastre-se gratuitamente
        </h2>
        <p className="text-xl mb-8 text-zinc-900">
          Insira seu e-mail para começar a receber nossa newsletter.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de e-mail..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-blue-600 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700"
          >
            Inscrever-se!
          </button>
        </form>

        {successMessage && (
          <p className="text-green-600 mt-4">Obrigado por assinar!</p>
        )}
      </div>
    </section>
  );
}
