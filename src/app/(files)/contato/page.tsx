export default function Contato() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-primary mb-2">
        Entre em contato comigo
      </h1>
      <p className="text-secondary mb-6">
        Quer trocar uma ideia ou tirar um projeto do papel? Se você precisa de
        manutenção no seu site, quer criar algo novo, pedir um orçamento ou só
        bater um papo sobre sua ideia — é só mandar sua mensagem. Respondo o
        mais rápido possível!
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="hidden"
          name="access_key"
          value="981af9da-3f2d-423b-b125-922049c4751d"
        />
        <div>
          <label htmlFor="name" className="block text-sm text-tertiary mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            required
            className="w-full rounded-lg bg-bg-alt-smooth border border-gray-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-icons-orange"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-tertiary mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu-email@email.com"
            required
            className="w-full rounded-lg bg-bg-alt-smooth border border-gray-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-icons-orange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-tertiary mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Sua mensagem aqui"
            rows={4}
            required
            className="w-full rounded-lg bg-bg-alt-smooth border border-gray-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-icons-orange"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange text-black font-medium py-3 hover:opacity-90 transition"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
}
