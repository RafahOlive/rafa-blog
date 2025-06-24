export default function Contato() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-2">Contact Me</h1>
      <p className="text-subtitle mb-6">
        Feel free to get in touch by completing the form below.
      </p>

      <form
        action="https://formspree.io/f/SEU_ID_AQUI" // 🔥 troca aqui depois
        method="POST"
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name" className="block text-sm text-subtitle mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg bg-bg-alt-smooth border border-gray-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-icons-orange"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-subtitle mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
            className="w-full rounded-lg bg-bg-alt-smooth border border-gray-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-icons-orange"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-subtitle mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
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
