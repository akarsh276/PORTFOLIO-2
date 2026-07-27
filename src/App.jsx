import { useState, useEffect, useRef } from "react";

const data = {
  name: "Akarsh Shukla",
  title: "Computer Science Engineer",
  tagline: "Fresher · Seeking Software & Web Development Roles",
  location: "Lucknow, Uttar Pradesh",
  email: "rajatshukla4493@gmail.com",
  phone: "+91-8181027176",
  linkedin: "linkedin.com/in/akarsh-shukla-4936b3274",
  github: "github.com/akarsh276",
  summary:
    "Motivated Computer Science Engineering student with a strong foundation in frontend technologies, data structures, and core CS subjects. Proven ability to build responsive applications, solve algorithmic problems, and thrive in collaborative, agile environments. Passionate about building impactful software and continuously learning.",
  skills: {
    Languages: ["C++", "Python", "JavaScript"],
    Frontend: ["HTML5", "CSS3", "Responsive Design"],
    Database: ["MySQL", "SQL"],
    Tools: ["Git", "GitHub", "VS Code"],
    "CS Fundamentals": ["DSA", "OOP", "Operating Systems", "DBMS"],
  },
  experience: [
    {
      role: "Web Development Intern",
      company: "AFAME Technologies",
      period: "Mar 2024 – Apr 2024",
      points: [
        "Designed and implemented responsive web pages using HTML, CSS, and JavaScript.",
        "Improved understanding of modern web standards and cross-browser compatibility.",
      ],
    },
    {
      role: "IBM Cognitive Skill-Based Intern",
      company: "IBM",
      period: "Oct 2023",
      points: [
        "Developed responsive, user-friendly interfaces using HTML, CSS, and JavaScript.",
        "Worked with IBM Cognitive Technologies and AI cloud computing concepts.",
        "Collaborated in agile teams, strengthening debugging and problem-solving skills.",
      ],
    },
  ],
  projects: [
    {
      name: "AI-Based Personalized Learning Assistant",
      tech: ["NLP", "Python", "AI"],
      desc: "Built an adaptive learning system using NLP-based content analysis. Dynamically generates summaries, quizzes, and contextual explanations tailored to the learner.",
      link: "https://github.com/akarsh276",
    },
    {
      name: "Restaurant Website",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Created a fully responsive restaurant website with modern UI, menu sections, and seamless navigation across all devices.",
      link: "https://github.com/akarsh276",
    },
  ],
  education: [
    {
      degree: "B.Tech – Computer Science Engineering",
      institute: "Shri Ramswaroop Memorial College of Engineering & Management, AKTU",
      year: "Nov 2022 – Present",
    },
    {
      degree: "Intermediate (PCM)",
      institute: "King George Inter College, Lucknow",
      year: "2022",
    },
    {
      degree: "High School (PCM)",
      institute: "King George Inter College, Lucknow",
      year: "2020",
    },
  ],
  certifications: [
    "Python 101 for Data Science – IBM",
    "IBM Big Data Foundations",
    "IBM Cloud Essentials V3",
    "Introduction to Generative AI",
    "Duet AI",
  ],
  achievements: [
    "Academic Excellence Award (2024–2025)",
    "Solved 200+ DSA problems across coding platforms",
  ],
};

const NAV_ITEMS = ["About", "Skills", "Experience", "Projects", "Education", "Certifications", "Contact"];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Section({ id, children }) {
  const [ref, visible] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        marginBottom: "5rem",
      }}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#64ffda",
          fontFamily: "'Space Mono', monospace",
          marginBottom: "0.5rem",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, #64ffda55, transparent)",
          width: "100%",
        }}
      />
    </div>
  );
}

function Tag({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        border: "1px solid #64ffda44",
        borderRadius: "3px",
        fontSize: "0.7rem",
        color: "#64ffda",
        fontFamily: "'Space Mono', monospace",
        background: "#64ffda0d",
        marginRight: "6px",
        marginBottom: "6px",
      }}
    >
      {label}
    </span>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 120;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "#0a0f1a",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        color: "#c8d3e0",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Syne:wght@700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0f1a; }
        ::-webkit-scrollbar-thumb { background: #64ffda55; border-radius: 4px; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "#0a0f1af0" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid #ffffff0d" : "1px solid transparent",
          padding: "0 clamp(1.2rem, 6vw, 6rem)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "62px",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#64ffda", fontSize: "0.9rem", letterSpacing: "0.12em", cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          AS<span style={{ color: "#ffffff33" }}>.dev</span>
        </span>
        <div className="nav-links" style={{ display: "flex", gap: "1.6rem" }}>
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "0.72rem", letterSpacing: "0.12em",
                fontFamily: "'Space Mono', monospace",
                color: activeSection === n ? "#64ffda" : "#8892a4",
                transition: "color 0.2s",
                borderBottom: activeSection === n ? "1px solid #64ffda" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <header
        style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px clamp(1.5rem, 8vw, 8rem) 4rem",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage:
              "linear-gradient(#ffffff03 1px, transparent 1px), linear-gradient(90deg, #ffffff03 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute", top: "15%", right: "8%",
            width: "420px", height: "420px",
            background: "radial-gradient(circle, #64ffda14 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "10%", left: "5%",
            width: "280px", height: "280px",
            background: "radial-gradient(circle, #4f8aff0d 0%, transparent 68%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: "820px" }}>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#64ffda", fontSize: "0.78rem",
              letterSpacing: "0.22em", marginBottom: "1.2rem",
            }}
          >
            &lt; Hello, World. I'm /&gt;
          </p>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              fontWeight: 800, lineHeight: 1.0,
              color: "#e2e8f0", marginBottom: "0.5rem",
            }}
          >
            {data.name}
          </h1>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
              fontWeight: 700, color: "#64ffda", marginBottom: "1.4rem",
            }}
          >
            {data.title}
          </h2>
          <p
            style={{
              fontSize: "1rem", lineHeight: 1.85,
              color: "#8892a4", maxWidth: "540px", marginBottom: "2.5rem",
            }}
          >
            {data.tagline}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            <button
              onClick={() => scrollTo("Contact")}
              style={{
                padding: "13px 30px",
                border: "1px solid #64ffda",
                color: "#64ffda",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.1em",
                background: "transparent", cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#64ffda18")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              Hire Me →
            </button>
            <a
              href={`https://${data.github}`}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "13px 30px",
                color: "#8892a4",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.1em",
                border: "1px solid #ffffff18",
                display: "inline-flex", alignItems: "center", gap: "6px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ffffff44"; e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ffffff18"; e.currentTarget.style.color = "#8892a4"; }}
            >
              GitHub ↗
            </a>
            <a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "13px 30px",
                color: "#8892a4",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem", letterSpacing: "0.1em",
                border: "1px solid #ffffff18",
                display: "inline-flex", alignItems: "center", gap: "6px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#ffffff44"; e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ffffff18"; e.currentTarget.style.color = "#8892a4"; }}
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Internships", value: "2" },
              { label: "Projects", value: "2+" },
              { label: "DSA Problems", value: "200+" },
              { label: "Certifications", value: "5" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "2rem", fontWeight: 800, color: "#e2e8f0",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem", color: "#64ffda",
                    letterSpacing: "0.12em", fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute", bottom: "2rem", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", color: "#ffffff22", fontSize: "0.6rem", letterSpacing: "0.2em" }}>SCROLL</span>
          <div
            style={{
              width: "1px", height: "40px",
              background: "linear-gradient(to bottom, #64ffda55, transparent)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main style={{ padding: "0 clamp(1.5rem, 8vw, 8rem)", paddingBottom: "6rem" }}>

        {/* ABOUT */}
        <Section id="About">
          <SectionTitle>About Me</SectionTitle>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            <div>
              <p style={{ lineHeight: 1.9, color: "#a8b2be", fontSize: "0.97rem", marginBottom: "2rem" }}>
                {data.summary}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  ["Location", data.location],
                  ["Email", data.email],
                  ["Phone", data.phone],
                  ["LinkedIn", data.linkedin],
                  ["GitHub", data.github],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: "1rem", fontSize: "0.85rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#64ffda", fontFamily: "'Space Mono', monospace", minWidth: "80px", fontSize: "0.72rem" }}>
                      {k}
                    </span>
                    <span style={{ color: "#8892a4" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "#0d1526",
                border: "1px solid #ffffff0d",
                padding: "2rem", position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(to right, #64ffda, transparent)",
                }}
              />
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#64ffda", fontSize: "0.68rem",
                  letterSpacing: "0.2em", marginBottom: "1.2rem",
                }}
              >
                OPEN TO OPPORTUNITIES
              </p>
              <p style={{ color: "#a8b2be", lineHeight: 1.85, fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                I'm actively looking for entry-level roles in{" "}
                <strong style={{ color: "#e2e8f0" }}>Software Engineering</strong> and{" "}
                <strong style={{ color: "#e2e8f0" }}>Web Development</strong>. I bring strong foundations, a growth mindset, and the dedication to make meaningful contributions from day one.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {["Full-time", "Internship", "Remote", "On-site"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="Skills">
          <SectionTitle>Technical Skills</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.2rem",
            }}
          >
            {Object.entries(data.skills).map(([cat, items]) => (
              <div
                key={cat}
                style={{
                  background: "#0d1526",
                  border: "1px solid #ffffff0d",
                  padding: "1.5rem",
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#64ffda44"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ffffff0d"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "#64ffda", fontSize: "0.65rem",
                    letterSpacing: "0.18em", marginBottom: "1rem",
                  }}
                >
                  {cat.toUpperCase()}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map((s) => <Tag key={s} label={s} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="Experience">
          <SectionTitle>Experience</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {data.experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  background: "#0d1526",
                  border: "1px solid #ffffff0d",
                  padding: "2rem", position: "relative",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#64ffda44")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ffffff0d")}
              >
                <div
                  style={{
                    position: "absolute", top: 0, left: 0,
                    width: "3px", height: "100%",
                    background: "linear-gradient(to bottom, #64ffda, transparent)",
                  }}
                />
                <div
                  style={{
                    display: "flex", justifyContent: "space-between",
                    flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.3rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: "#e2e8f0", fontSize: "1.05rem", fontWeight: 700,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: "#64ffda", fontSize: "0.7rem",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  style={{
                    color: "#64ffda88", fontSize: "0.82rem",
                    marginBottom: "1rem", fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {exp.company}
                </p>
                <ul style={{ paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ color: "#a8b2be", fontSize: "0.9rem", lineHeight: 1.75 }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="Projects">
          <SectionTitle>Projects</SectionTitle>
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {data.projects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#0d1526",
                  border: "1px solid #ffffff0d",
                  padding: "2rem",
                  display: "flex", flexDirection: "column", gap: "1rem",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "#64ffda44"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#ffffff0d"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ color: "#64ffda", fontSize: "1.6rem" }}>◈</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#8892a4", fontSize: "1rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
                    onMouseLeave={(e) => (e.target.style.color = "#8892a4")}
                  >
                    ↗
                  </a>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: "#e2e8f0", fontSize: "1rem", fontWeight: 700,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ color: "#8892a4", fontSize: "0.88rem", lineHeight: 1.75, flexGrow: 1 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {p.tech.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="Education">
          <SectionTitle>Education</SectionTitle>
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            <div
              style={{
                position: "absolute", left: 0, top: "8px", bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, #64ffda55, transparent)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {data.education.map((e, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute", left: "-2.38rem", top: "16px",
                      width: "10px", height: "10px",
                      border: "2px solid #64ffda",
                      background: "#0a0f1a", borderRadius: "50%",
                    }}
                  />
                  <div
                    style={{
                      background: "#0d1526",
                      border: "1px solid #ffffff0d",
                      padding: "1.3rem 1.7rem",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#64ffda33")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#ffffff0d")}
                  >
                    <div
                      style={{
                        display: "flex", justifyContent: "space-between",
                        flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.3rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          color: "#e2e8f0", fontSize: "0.97rem", fontWeight: 700,
                        }}
                      >
                        {e.degree}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "#64ffda", fontSize: "0.68rem",
                        }}
                      >
                        {e.year}
                      </span>
                    </div>
                    <p style={{ color: "#8892a4", fontSize: "0.84rem" }}>{e.institute}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section id="Certifications">
          <SectionTitle>Certifications &amp; Achievements</SectionTitle>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#64ffda", fontSize: "0.65rem",
                  letterSpacing: "0.18em", marginBottom: "1rem",
                }}
              >
                CERTIFICATIONS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {data.certifications.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "0.9rem 1.2rem",
                      background: "#0d1526",
                      border: "1px solid #ffffff0d",
                      display: "flex", alignItems: "center", gap: "0.9rem",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#64ffda44"; e.currentTarget.style.transform = "translateX(5px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ffffff0d"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <span style={{ color: "#64ffda", fontSize: "0.6rem" }}>✦</span>
                    <span style={{ color: "#a8b2be", fontSize: "0.86rem" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#64ffda", fontSize: "0.65rem",
                  letterSpacing: "0.18em", marginBottom: "1rem",
                }}
              >
                ACHIEVEMENTS
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {data.achievements.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.3rem 1.5rem",
                      background: "#0d1526",
                      border: "1px solid #64ffda22",
                      display: "flex", alignItems: "flex-start", gap: "1rem",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#64ffda77")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#64ffda22")}
                  >
                    <span style={{ color: "#64ffda", fontSize: "1rem", lineHeight: 1.4 }}>★</span>
                    <span style={{ color: "#e2e8f0", fontSize: "0.9rem", fontWeight: 500 }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="Contact">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
            {/* Left CTA */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.3rem" }}>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800, color: "#e2e8f0", lineHeight: 1.2,
                }}
              >
                Let's Work<br />
                <span style={{ color: "#64ffda" }}>Together.</span>
              </h3>
              <p style={{ color: "#8892a4", lineHeight: 1.85, fontSize: "0.95rem" }}>
                I'm actively seeking entry-level roles in software and web development. If you have an opportunity, a project, or just want to connect — my inbox is always open.
              </p>
              <a
                href={`mailto:${data.email}`}
                style={{
                  display: "inline-block", width: "fit-content",
                  padding: "13px 32px",
                  border: "1px solid #64ffda",
                  color: "#64ffda",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem", letterSpacing: "0.1em",
                  background: "transparent",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#64ffda18")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                Say Hello →
              </a>
            </div>

            {/* Right: Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { icon: "✉", label: "Email", value: data.email, href: `mailto:${data.email}` },
                { icon: "📞", label: "Phone", value: data.phone, href: `tel:${data.phone}` },
                { icon: "💼", label: "LinkedIn", value: data.linkedin, href: `https://${data.linkedin}` },
                { icon: "⌨", label: "GitHub", value: data.github, href: `https://${data.github}` },
                { icon: "📍", label: "Location", value: data.location, href: null },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "1.2rem",
                    padding: "1rem 1.4rem",
                    background: "#0d1526",
                    border: "1px solid #ffffff0d",
                    textDecoration: "none",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: item.href ? "pointer" : "default",
                  }}
                  onMouseEnter={(e) => {
                    if (item.href) {
                      e.currentTarget.style.borderColor = "#64ffda44";
                      e.currentTarget.style.transform = "translateX(6px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#ffffff0d";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.1rem", minWidth: "26px", textAlign: "center" }}>
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: "#64ffda", fontSize: "0.62rem",
                        letterSpacing: "0.16em", marginBottom: "2px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ color: "#a8b2be", fontSize: "0.85rem" }}>{item.value}</div>
                  </div>
                  {item.href && (
                    <span style={{ marginLeft: "auto", color: "#64ffda33", fontSize: "0.9rem" }}>↗</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #ffffff0d",
          padding: "2rem clamp(1.5rem, 8vw, 8rem)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#64ffda", fontSize: "0.8rem",
          }}
        >
          AS.dev
        </span>
        <span
          style={{
            color: "#8892a4", fontSize: "0.75rem",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Designed &amp; Built by Akarsh Shukla · Open to Work
        </span>
        <a
          href={`mailto:${data.email}`}
          style={{
            color: "#64ffda55", fontSize: "0.75rem",
            fontFamily: "'Space Mono', monospace",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
          onMouseLeave={(e) => (e.target.style.color = "#64ffda55")}
        >
          {data.email}
        </a>
      </footer>
    </div>
  );
}
