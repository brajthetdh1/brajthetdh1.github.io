
export default function Projects() {
  const projects = [
    {
      title: "Telecom Signaling Workflow Microservices",
      description:
        "Spring Boot microservices deployed on AWS ECS (Fargate) to handle telecom signaling workflows.",
      link: "https://github.com/yourusername/telecom-signaling",
    },
    {
      title: "AWS Event-Driven Processing",
      description:
        "Integrated AWS SQS, SNS, and Kinesis for real-time 5G event ingestion and alerting.",
      link: "https://github.com/yourusername/aws-event-processing",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Amazon-like platform with Spring Boot, React, Kafka, and microservices architecture.",
      link: "https://github.com/yourusername/ecommerce-platform",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-600">
        A few of the projects I’ve built recently.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-indigo-700">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
