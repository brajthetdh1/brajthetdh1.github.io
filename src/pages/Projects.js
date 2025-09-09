
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
    <section className="max-w-5xl mx-auto py-12 px-6">
  <h2 className="text-3xl font-bold mb-8">Projects</h2>

  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-semibold">Enterprise Backend Systems – Qappa Lab</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Designed data crawling pipelines using Spring Batch for energy trading analytics.</li>
        <li>Developed document and notification management systems integrated with Kafka and REST APIs.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">5G Core Intermediary Node – Reliance Jio</h3>
      <ul className="list-disc ml-6 mt-2">
        <li>Implemented message encoding/decoding (SCTP, M3UA, SIGTRAN).</li>
        <li>Developed protocol translation logic (RPC to SIGTRAN).</li>
      </ul>
    </div>
  </div>
</section>

  );
}
