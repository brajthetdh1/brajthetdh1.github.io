

export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-4 text-slate-600 max-w-2xl">
        I’m a passionate software engineer with expertise in building scalable,
        cloud-native systems. Over the last 5+ years, I’ve worked extensively on
        Java, Spring Boot, and AWS services to deliver high-performance
        applications for telecom and enterprise domains.
      </p>
      <p className="mt-4 text-slate-600 max-w-2xl">
        My focus is on clean architecture, robust design patterns, and
        delivering impactful solutions. I thrive in solving complex problems and
        building systems that scale seamlessly.
      </p>

      <h2 className="text-3xl font-bold mb-8">Education</h2>
  <ul className="space-y-4">
    <li>
      <h3 className="text-xl font-semibold">M.Tech. – Solid State Electronics Material</h3>
      <p className="text-sm text-gray-500">IIT Roorkee | 2016</p>
    </li>
    <li>
      <h3 className="text-xl font-semibold">B.Tech. – Electronics & Telecommunication</h3>
      <p className="text-sm text-gray-500">College of Engineering Roorkee | 2013</p>
    </li>
  </ul>
    </section>
  );
}
