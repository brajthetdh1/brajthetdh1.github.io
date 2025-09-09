
export default function Experience() {
  const jobs = [
    {
      role: "Senior Software Engineer",
      company: "Telecom Solutions Ltd",
      duration: "2021 – Present",
      details: [
        "Developed Spring Boot microservices for telecom signaling workflows.",
        "Integrated AWS SQS, SNS, Kinesis, and DynamoDB for real-time event processing.",
        "Deployed applications on AWS ECS (Fargate) with auto-scaling.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Tech Innovators",
      duration: "2018 – 2021",
      details: [
        "Built scalable backend services using Java, Spring Boot, and MySQL.",
        "Implemented caching with Redis and optimized performance.",
        "Collaborated with front-end teams for REST API development.",
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold">Experience</h2>
      <p className="mt-2 text-slate-600">My professional career timeline.</p>

      <div className="mt-8 space-y-8">
        {jobs.map((job, idx) => (
          <div key={idx} className="border-l-4 border-indigo-600 pl-4">
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-sm text-slate-500">
              {job.company} · {job.duration}
            </p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
