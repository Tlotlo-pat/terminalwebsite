const about          = document.querySelector('#about')
const contact        = document.querySelector('#contact')
const skills         = document.querySelector('#skills')
const projects       = document.querySelector('#projects')
const aboutContent   = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent  = document.querySelector('#skills-content')
const projectsContent  = document.querySelector('#projects-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

skills.addEventListener('click', () => {
    const skillsBox = new WinBox({
      title: 'My Sills',
      // modal: true,
      width: '400px',
      height: '400px',
      top: 250,
      right: 50,
      bottom: 50,
      left: 350,
      mount: skillsContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })

  projects.addEventListener('click', () => {
    const projectsBox = new WinBox({
      title: 'My Projects',
      background: '#00aa00',
      width: '400px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: projectsContent,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  })