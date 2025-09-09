

export default function HireMe() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Hire Me</h2>
      <p className="mt-2 text-slate-600">
        Interested in working together? Let’s talk.
      </p>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="mt-6 max-w-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
