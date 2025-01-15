---
layout: home
hero:
  name: "Aldy Rifaldi.B"
  text: "Software Engineer"
  tagline: Specializing in building scalable, easy-to-maintain applications
  image:
    src: /me.png
    alt: Aldy Rifaldi.B - Professional headshot
  actions:
    - theme: brand
      text: View Projects
      link: /projects
    - theme: alt
      text: Download CV
      link: /cv
features:
  - icon: 🚀
    title: Full Stack Development
    details: Over 4 years of experience as a full-stack developer, delivering scalable solutions across three corporate environments and completing numerous successful projects.
  - icon: ✨
    title: AI Enhanced
    details: Leveraging AI tools to streamline development processes, enhance productivity, and significantly reduce time-to-market for applications.
  - icon: 🛠️
    title: DevOps & CI/CD
    details: Proficient in automating deployment pipelines and maintaining high-quality software delivery.
  - icon: 🤝
    title: Team Collaboration
    details: Strong collaborator with a proven ability to thrive in cross-functional teams, adapt to diverse work environments, and contribute effectively to achieving shared goals.
---

<div class="custom-layout">
  <h2>Latest Projects</h2>
  <div class="featured-projects">
    <div class="project-card">
      <h3>Book Store - Ortax</h3>
      <p>An e-commerce platform for tax-related books, providing trusted references such as Transfer Pricing, Tax Laws, and other key topics. Designed to meet the needs of professionals, academics, and tax practitioners with accurate and relevant resources.</p>
      <div class="tech-stack">
        <span>Node RED</span> • <span>Node.js</span> • <span>JavaScript</span> • <span>Payment Gateway</span> • <span>Next.js</span> • <span>React</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Perisai Paskibraka</h3>
      <p>An online examination platform for the National Paskibraka Selection, used by over 20,000 participants across Indonesia. Designed to deliver an efficient, transparent, and digitally integrated selection process.</p>
      <div class="tech-stack">
        <span>Next.js</span> • <span>MySQL</span> • <span>React</span> • <span>TypeScript</span>
      </div>
    </div>
    <div class="project-card">
      <h3>PajakExpress</h3>
      <p>A tax reporting platform and official DJP partner designed for secure, efficient, and integrated tax administration. Featuring tools such as e-Faktur, e-Bupot, e-Billing, and API automation, PajakExpress supports large-scale data processing with high accuracy. Built with ISO 27001 security standards and fully integrated with ERP or accounting software to enhance efficiency and reduce compliance costs.</p>
      <div class="tech-stack">
        <span>React</span> • <span>JavaScript</span> • <span>Node.js</span>
      </div>
    </div>
  </div>
</div>

<style>
.featured-projects {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card h3 {
  margin: 0 0 1rem;
  color: var(--vp-c-brand);
}

.project-card p {
  margin: 0 0 1rem;
  line-height: 1.6;
}

.tech-stack {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.tech-stack span {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-bg);
  border-radius: 4px;
  margin: 0.2rem;
}
</style>
