
export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
  <h2 className="text-3xl font-bold mb-8">Skills</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-semibold mb-2">Languages & Concepts</h3>
      <p>Java (OOP, Multithreading, Collections, JDBC, Memory), Python, Data Structures, Algorithms, HLD, LLD</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Frameworks & Tools</h3>
      <p>Spring Boot, Spring Mvc, Spring Cloud, JWT, Spring Security, Spring Batch, Maven, Kafka, Docker</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Protocols</h3>
      <p>TCP/IP, UDP, HTTP/1/2, SCTP, SIGTRAN, WebSocket</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Databases</h3>
      <p>MySQL, PostgreSQL, MongoDB, Redis</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Front End</h3>
      <p>React, JavaScript, Next.js, jquery, HTML, CSS</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Others</h3>
      <p>Microservices, AWS, Jenkins, Git,  REST API</p>
    </div>
  </div>
</section>

  );
}
