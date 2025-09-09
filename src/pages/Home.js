export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00c6ff] via-[#0072ff] to-[#00f2fe] text-white flex flex-col">

      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl text-center space-y-8">
          {/* Quote */}
          <p className="text-xl md:text-2xl italic text-indigo-200 drop-shadow-lg">
            "Make it work, make it right, make it fast."
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Braj Bhushan Kumar
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold drop-shadow-lg text-indigo-100">
            Senior Software Engineer | Java | Spring Boot | Microservices | Kafka | System Design
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-md md:text-lg leading-relaxed text-indigo-100">
            <p>
              With a strong foundation in Java, multithreading, collections, and modern Java 8 features, I craft robust and efficient backend solutions. My deep understanding of data structures, algorithms, and problem-solving allows me to design systems that are both scalable and performant.
            </p>
            <p>
              I am an expert in Spring Boot, JPA, Hibernate, and REST APIs, creating seamless integrations and microservices that power real-world applications. I can design systems that include frontend, backend, Kafka, AWS, and SQL/NoSQL databases.
            </p>
            <p>
              Beyond the backend, I have hands-on experience with MongoDB and AWS, enabling cloud-native, scalable deployments. Additionally, I enjoy working with JavaScript, Python, and React, giving me the flexibility to build full-stack solutions and interactive web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting & Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Consulting & Services</h2>
          <p className="text-lg text-white/80 mb-12">
            I offer professional consulting services to help businesses design, develop, and scale modern software solutions. Whether you need robust backend systems, full-stack applications, or data pipelines, I can help bring your ideas to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p>Design and build scalable Java Spring Boot microservices and APIs for enterprise applications.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Full Stack Development</h3>
              <p>Develop responsive web applications using React, JavaScript, and RESTful APIs integrated with backend services.</p>
            </div>
            <div className="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p>Create efficient data pipelines, ETL jobs, and streaming solutions for real-time and batch processing.</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
              <p>Deploy scalable solutions on AWS, integrate CI/CD pipelines, and optimize cloud infrastructure for performance.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
