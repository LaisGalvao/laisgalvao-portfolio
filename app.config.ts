// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Laís Galvão',
    description: 'Laís Galvão | 👩🏽‍💻 Desenvolvedora | Educadora Social',
    image: {
      src: '/profile-linkedin-pic.jpg',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Me acompanhe nas redes!' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'missguita_777',
      instagram: 'laisgbueno_7',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lais-galvao-bueno/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    },
    backToTop: {
      text: 'Back to top',
      icon: 'material-symbols:arrow-upward'
    }
  }
})
