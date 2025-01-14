---
layout: home
hero:
  name: "Aldy Rifaldi.B"
  text: "Software Engineer"
  tagline: Specialise in building scalable, easy to maintain applications
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
    title: AI Enchanced
    details: Leverage AI tools to streamline development processes, enhance productivity, and significantly reduce time-to-market for applications.
  - icon: 🛠️
    title: DevOps & CI/CD
    details: Proficient in automating deployment pipelines and maintaining high-quality software delivery
  - icon: 🤝
    title: Team Work
    details: Strong collaborator with a proven ability to thrive in cross-functional teams, adapt to diverse work environments, and contribute effectively to achieving shared goals.
---

<div class="custom-layout">
  <h2>Proyek Terbaru</h2>
  <div class="featured-projects">
    <div class="project-card">
      <h3>Book Store - Ortax</h3>
      <p>Platform penjualan buku khusus perpajakan, menyediakan referensi terpercaya seperti Transfer Pricing, Undang-Undang Perpajakan, dan topik penting lainnya. Dirancang untuk memenuhi kebutuhan profesional, akademisi, dan praktisi pajak dengan sumber daya yang akurat dan relevan.</p>
      <div class="tech-stack">
        <span>Node RED</span> • <span>Node JS</span> • <span>Javascript</span> • <span>Payment Gateway</span> • <span>Next JS</span> • <span>React</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Perisai Paskibraka</h3>
      <p>Sebuah platform ujian online untuk seleksi Paskibraka Nasional, digunakan oleh lebih dari 20.000 peserta dari seluruh Indonesia. Dirancang untuk menghadirkan proses seleksi yang efisien, transparan, dan terintegrasi secara digital.</p>
      <div class="tech-stack">
        <span>Next.js</span> • <span>MySQL</span> • <span>React</span> • <span>Typescript</span>
      </div>
    </div>
    <div class="project-card">
      <h3>PajakExpress</h3>
      <p>Platform pelaporan pajak resmi mitra DJP yang mengelola administrasi perpajakan dengan aman, efisien, dan terintegrasi. Menyediakan fitur seperti e-Faktur, e-Bupot, e-Billing, dan API automasi, PajakExpress mendukung pengolahan data skala besar dengan akurasi tinggi. Dibangun sesuai standar keamanan ISO 27001 dan terintegrasi dengan ERP atau software akuntansi untuk meningkatkan efisiensi dan mengurangi biaya kepatuhan pajak.</p>
      <div class="tech-stack">
        <span>React</span> • <span>Javascript</span> • <span>Node JS</span>
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