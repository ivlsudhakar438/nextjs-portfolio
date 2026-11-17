import { links, experience, projects, skills, education } from "../data/content";
import ProjectFilter from "../components/ProjectFilter";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <ThemeToggle />

      <header className="hero">
        <div className="wrap">
          <h1>V L Sudhakar <em>Inampudi</em></h1>
          <p className="lede">Frontend developer with 9+ years in IT, including 7+ years building with Vue.js, Nuxt.js and React for clients in real estate, e-commerce, fintech and healthcare.</p>
          <nav className="contact" aria-label="Contact">
            <a href="mailto:ivlsudhakar438@gmail.com">ivlsudhakar438@gmail.com</a>
            <a href="tel:+919866118399">+91 98661 18399</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
          <div className="stats">
            <div><strong>9+</strong><span>years in IT</span></div>
            <div><strong>7+</strong><span>years in frontend development</span></div>
            <div><strong>{projects.length}</strong><span>featured projects across Vue and React</span></div>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap narrow">
          <h2>About</h2>
          <p>I build scalable, performant and user-focused web applications. Most of my work is in the Vue ecosystem, Vue 2 and Vue 3 with Nuxt.js, where I write reusable component libraries, manage state with Vuex and Pinia, and integrate RESTful APIs.</p>
          <p>I have worked remotely with client stakeholders on requirements, production fixes and performance work, including code splitting and lazy loading.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Experience</h2>
          <ol>
            {experience.map((j) => (
              <li key={j.role} className="job">
                <p className="when">{j.when}</p>
                <div>
                  <h3>{j.role}</h3>
                  <p className="org">{j.org}</p>
                  <ul>{j.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Projects</h2>
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <section>
        <div className="wrap narrow">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="wrap narrow edu">
          <h2>Education</h2>
          {education.map((e) => (
            <p key={e.degree}><strong>{e.degree}</strong>{e.school}</p>
          ))}
        </div>
      </section>

      <footer>
        <div className="wrap">V L Sudhakar Inampudi</div>
      </footer>
    </div>
  );
}
