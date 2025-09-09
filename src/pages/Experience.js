
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
    <section className="max-w-5xl mx-auto py-12 px-6">
  <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
  
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-semibold">Independent Software Consultant – Qappa Labs</h3>
      <p className="text-sm text-gray-500">Aug 2024 – Jan 2025 | Delhi (Remote)</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Developed document management, notification system using Kafka, report generation in Excel/PDF, and APIs for web pages using Spring Boot.</li>
        <li>Crawled remote APIs to fetch data using Spring Batch, enhanced design and efficiency.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Software Engineer Manager – Reliance Jio</h3>
      <p className="text-sm text-gray-500">Sep 2022 – Jul 2024 | Mumbai (Onsite)</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Designed and developed 5G core nodes using Java, Spring Boot, multithreading, SIGTRAN, and WebSocket.</li>
        <li>Built CLI tools for real-time 5G traffic monitoring.</li>
        <li>Developed Java-based simulators for load and performance testing.</li>
        <li>Mentored and trained 10+ junior engineers.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Software Engineer – LTI</h3>
      <p className="text-sm text-gray-500">Sep 2021 – Sep 2022 | Pune (Remote)</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Developed credit card payment gateway using Java, Spring Boot, Maven, Microservices.</li>
        <li>Solved critical issues, refactored code, and improved performance.</li>
        <li>Integrated Angular frontend with REST APIs.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Software Engineer – MPHRX</h3>
      <p className="text-sm text-gray-500">Dec 2020 – May 2021 | Gurgaon (Remote)</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Developed Healthcare modules using Java, Spring Boot, microservices, SQL, and NoSQL.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Associate Software Engineer – Technoforte Software</h3>
      <p className="text-sm text-gray-500">Oct 2019 – Sep 2020 | Bangalore</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Worked with Java, Spring, Servlet, JSP, HTML, JavaScript.</li>
        <li>Fixed bugs, enhanced features, and handled module testing.</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold">Independent Software Consultant – Self-employed</h3>
      <p className="text-sm text-gray-500">Oct 2016 – Mar 2019 | Muzaffarpur</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Developed features using Java, JSP, Servlet, JavaScript, JDBC, JSON, XML, and more.</li>
        <li>Collaborated with clients remotely to deliver customized solutions on time.</li>
      </ul>
    </div>
  </div>
</section>

  );
}
