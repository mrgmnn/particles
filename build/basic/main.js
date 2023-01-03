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
    color: 'rgba(212,73,34,1)',
  },
  renderer: {
    transparentBackground: false,
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

console.log(settings)

const particles = new Particles(node).init(settings).start()

setInterval(() => {
  // particles.particleManager.createParticle();
  const settings = this.particles.settings
  const particle = this.particles.particleManager.createParticle()
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
  particle.radius = size
  particle.color = 'rgba(255,255,255,1)'
  particle.text = 'mikelima'
}, 2000)
window.particles = particles
