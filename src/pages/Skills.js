
export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="mt-2 text-slate-600">
        Technologies and tools I use frequently.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h4 className="font-semibold">Languages</h4>
          <p className="mt-2 text-sm text-slate-500">Java · Kotlin · SQL</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h4 className="font-semibold">Frameworks</h4>
          <p className="mt-2 text-sm text-slate-500">Spring Boot · Spring Cloud</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h4 className="font-semibold">Cloud</h4>
          <p className="mt-2 text-sm text-slate-500">AWS (ECS, RDS, S3, Kinesis)</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h4 className="font-semibold">Other</h4>
          <p className="mt-2 text-sm text-slate-500">Docker · Jenkins · Redis</p>
        </div>
      </div>
    </section>
  );
}
