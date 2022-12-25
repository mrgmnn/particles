import Particles, { Random, Vector2 } from '../../src/Particles.js'

const node = document.getElementById('particles')

const settings = {
  debug: false, // boolean
  particles: {
    amount: 0, // number
    distanceToLink: 150, // number
    linkedParticles: true, // boolean
    maxVelocity: 0.8, // number
    maxRadius: 50, // number
    // color: 'rgba(212,73,34,1)',
  },
  renderer: {
    linearGradient: {
      x1: 0, // number
      y1: 0, // number
      x2: 1, // number
      y2: 1, // number
      color1: '#327fc2', // color
      color2: '#014987', // color
    },
    width: window.innerWidth, // number
    height: window.innerHeight, // number
  },
}

const particles = new Particles(node).init(settings).start()

const colors = [
  'rgba(240,255,0,1)',
  'rgba(194,249,112,1)',
  'rgba(227,61,148, 1)',
]
const texts = [
  'astmonster',
  'internetshawna',
  'buergi',
  'marcusbmr',
  'bati_mati',
]

setTimeout(() => {
  for (let i = 0; i < 50; i += 1) {
    const particle = particles.particleManager.createParticle()
    particle.position.set(
      Random.intBetween(
        -settings.particles.distanceToLink,
        settings.renderer.width + settings.particles.distanceToLink
      ),
      Random.intBetween(
        -settings.particles.distanceToLink,
        settings.renderer.height + settings.particles.distanceToLink
      )
    )

    const velocity = new Vector2()
    velocity.set(
      Random.floatBetween(
        -settings.particles.maxVelocity,
        settings.particles.maxVelocity
      ),
      Random.floatBetween(
        -settings.particles.maxVelocity,
        settings.particles.maxVelocity
      )
    )
    particle.velocity = velocity
    particle.radius = 20
    const random = Math.floor(Math.random() * colors.length)
    particle.color = colors[random]
    particle.text = texts[Math.floor(Math.random() * texts.length)]
  }
}, 500)

window.particles = particles
