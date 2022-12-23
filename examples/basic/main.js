import Particles, { Random, Vector2 } from '../../src/Particles.js'

const node = document.getElementById('particles')

const settings = {
  debug: false, // boolean
  particles: {
    amount: 0, // number
    distanceToLink: 150, // number
    linkedParticles: true, // boolean
    maxVelocity: 0.8, // number
    maxRadius: 4, // number
    color: 'rgba(0,0,0,1)'
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

setInterval(() => {
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
  // particle.radius = size
  particle.color = 'rgba(0,0,0,1)'
}, 1000)

window.particles = particles
