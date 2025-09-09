
export default function Home() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-extrabold text-slate-900">
        Hi, I’m Braj Bhushan kumar
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-xl">
        Senior software engineer specializing in Java, Spring Boot, AWS, and
        microservices. I design scalable telecom-grade systems and real-time
        pipelines.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
        >
          View Projects
        </a>
        <a
          href="/hire-me"
          className="px-5 py-3 border rounded-md text-indigo-600 hover:bg-indigo-50"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
