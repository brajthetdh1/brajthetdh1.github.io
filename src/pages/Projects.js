
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
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="space-y-12 text-lg leading-relaxed text-gray-700">
        <div>
          <h3 className="text-2xl font-semibold mb-3">Independent Software Consultant</h3>
          <p className="mb-8">
            I designed and implemented enterprise-grade backend systems. My work included
            developing data crawling pipelines with <span className="font-semibold">Spring Batch</span>
            for energy trading analytics and building document as well as notification management systems
            integrated with <span className="font-semibold">Kafka</span> and REST APIs.
          </p>
          <p className="mb-8">
            I developed advanced features for <span className="font-semibold">energy forecasting and power scheduling</span>,
            including modules for <span className="font-semibold">injection, drawl, weather map integration, and energy banking</span>.
            These systems were built using <span className="font-semibold">Java 8, Spring Boot, MySQL, and MongoDB</span>, ensuring
            high performance and scalability for handling real-time energy data. The solution provided accurate forecasting insights,
            optimized scheduling workflows, and enabled utilities to make better operational and financial decisions.
          </p>

        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">5G Core System – Reliance Jio</h3>
          <p className="mb-8">
            At Reliance Jio, I developed a high-performance intermediary node for 5G core networks. This
            involved implementing message encoding and decoding for protocols like
            <span className="font-semibold"> SCTP, M3UA, and SIGTRAN</span>, along with protocol
            translation logic from RPC to SIGTRAN. The solution was deployed on
            <span className="font-semibold"> AWS ECS with Fargate</span>, with
            <span className="font-semibold"> SNS/SQS</span> integrations for anomaly detection and
            real-time notifications.
          </p>

          <p className="mb-8">
            I performed intensive load testing of 5G signaling workflows using
            <span className="font-semibold"> JConsole, and Wireshark</span> observing and monitoring CPU usage, memory footprint.
            This helped identify memory leaks, optimize thread usage, and validate packet-level
            communication across <span className="font-semibold"> SCTP and SIGTRAN</span> protocols.
            This also helped in <span className="font-semibold">Rate limiting</span> number of
            requests for different types of messages for incoming and outgoing traffic.
          </p>


        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Fintech Project – LTI</h3>
          <p className="mb-8">
            At LTI, I contributed to the development of a <span className="font-semibold">credit card payment gateway</span>
            leveraging <span className="font-semibold"> Java 8, Spring Boot, microservices, React, and Kafka</span>.
            The platform supported <span className="font-semibold">secure transaction processing, fraud detection,
              and real-time reconciliation</span>. I implemented <span className="font-semibold"> JWT-based authentication </span>
            to safeguard APIs, designed <span className="font-semibold">Kafka-based event streams</span> for transaction tracking
            and asynchronous processing, and built interactive <span className="font-semibold">React dashboards </span>
            for merchants and customers. Features like <span className="font-semibold">payment retry mechanisms,
              audit logging, and integration with third-party payment networks</span> ensured high availability, compliance,
            and seamless user experience across the platform.
          </p>

        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Healthcare System – MphRx</h3>
          <p className="mb-8">
            At MPHRX, I developed a comprehensive <span className="font-semibold">healthcare management system </span>
            using <span className="font-semibold">Java, Spring Boot, Hibernate, JavaScript, MySQL, and MongoDB</span>.
            The platform included features such as a <span className="font-semibold">patient portal, appointment booking,
              and medical record management</span>, enabling secure and efficient access to patient information.
          </p>

        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3">Logistics System – Technoforte</h3>
          <p className="mb-8">
            At Technoforte Software, I developed an <span className="font-semibold">enterprise logistics management system</span>
            using <span className="font-semibold">Java, JSP, Servlets, JDBC, and JavaScript</span>.
            The system included features like <span className="font-semibold">inventory tracking, shipment scheduling,
              and order management</span>, providing real-time visibility into the supply chain.
            I implemented <span className="font-semibold">dynamic reporting dashboards</span> for monitoring shipments
            and stock levels, and developed <span className="font-semibold">custom forms and workflows </span>
            to streamline operational processes.
          </p>

        </div>



        <div>
          <h3 className="text-2xl font-semibold mb-3">Freelancing Projects</h3>
          <p className="mb-8">
            As an <span className="font-semibold">Independent Software Consultant</span>, I developed custom applications using
            <span className="font-semibold"> Java, Servlets, JSP, JDBC, and Hibernate</span>. I delivered end-to-end solutions
            such as <span className="font-semibold">online examination portals, payroll management systems, inventory tracking,
              and CRM platforms</span>. I managed the entire project lifecycle, from gathering requirements and coding to
            deployment and ongoing support, ensuring that each solution met client needs and operated reliably in production environments.
          </p>
        </div>
      </div>
    </section>


  );
}
