export default function Experience() {
  const experiences = [
    {
      company: "Independent Software Consultant",
      role: "Freelance Software Engineer",
      period: "Jul 2024 – Present | Muzaffarpur (Remote)",
      description: [
        "Developed energy trading modules using java, spring boot, Microservices, Kafka, Mysql and MongoDB",
        "Developed spring batch jobs for pulling data from remote api or webpage and update Database",
        "Designed and Developed Document Management System using java, spring boot, mongodb, redis",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      company: "Reliance Jio",
      role: "Software Engineer Manager",
      period: "Sep 2022 – Jul 2024 | Mumbai (Onsite)",
      description: [
        "Managed and developed core 5G network systems with Java, Spring Boot, SIGTRAN, and WebSocket.",
        "Built CLI tools for real-time 5G traffic monitoring and simulators for load testing.",
        "Mentored junior engineers and guided them in scalable software design best practices.",
      ],
      color: "from-pink-500 to-red-500",
    },
    {
      company: "LTI",
      role: "Software Engineer",
      period: "Sep 2021 – Sep 2022 | Pune (Remote)",
      description: [
        "Developed and maintained a credit card payment gateway using Java, Spring Boot, and microservices.",
        "Resolved production issues, refactored code, and enhanced performance.",
        "Integrated React frontend with REST APIs.",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      company: "MPHRX",
      role: "Software Engineer",
      period: "Dec 2020 – May 2021 | Gurgaon (Remote)",
      description: [
        "Built healthcare modules using Java, Spring Boot, microservices, SQL, and NoSQL databases.",
        "Worked with javascript to interact with MongoDB for manipulating data",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      company: "Technoforte Software",
      role: "Associate Software Engineer",
      period: "Oct 2019 – Sep 2020 | Bangalore",
      description: [
        "Worked on enterprise Logistics System using Java, Spring, JSP, and JavaScript.",
        "Fixed bugs, enhanced features, and tested modules.",
        "Contributed to full-stack development efforts.",
      ],
      color: "from-orange-500 to-yellow-500",
    },
    {
      company: "Independent Software Consultant",
      role: "Freelance Software Engineer",
      period: "Oct 2016 – Mar 2019 | Muzaffarpur (Remote)",
      description: [
        "Developed custom applications using Java, Servlet, JSP, JDBC, and Hibernate.",
        "Delivered solutions like examination portals, payroll, inventory, and CRM systems.",
        "Handled entire lifecycle: requirements, coding, deployment, and support.",
      ],
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
   
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
  <div className="w-full max-w-[1300px] mx-auto">
    <h1 className="text-5xl font-bold text-center mb-16">Experience</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-semibold">{exp.company}</h2>
          <h3 className="text-lg text-indigo-300">{exp.role}</h3>
          <p className="text-sm text-gray-300 mb-6">{exp.period}</p>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>



  );
}
