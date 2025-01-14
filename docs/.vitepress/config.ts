import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Aldy Rifaldi.B",
  description: "Professional Software Engineer",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Experience', link: '/experience' },
      { text: 'Education', link: '/education/' },
      { text: 'CV', link: '/cv' },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: [
      {
        text: 'About Me',
        items: [
          { text: 'Introduction', link: '/about/' },
          { text: 'Skills', link: '/about/skills' }
        ]
      },
      {
        text: 'Education',
        items: [
          { text: 'Academic Background', link: '/education/' },
          { text: 'Certifications', link: '/education/certifications' },
          { text: 'Continuous Learning', link: '/education/continuous-learning' }
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Featured Projects', link: '/projects/' },
          { text: 'Volunteer', link: '/projects/volunteer' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aldyrifaldi' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/aldyrifaldi06' },
      { icon: 'X', link: 'https://x.com/aldyrifaldi06' }
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2025 Aldy Rifaldi.B - Software Engineer'
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/theme/custom.css' }]
  ]
})