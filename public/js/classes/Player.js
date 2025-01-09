class Player {
  constructor({ x, y, radius, color, username, context }) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.username = username
    this.c = context  // Store context as this.c
  }

  draw() {
    c.font = '12px sans-serif'
    c.fillStyle = 'white'
    c.fillText(this.username, this.x - 10, this.y + 20)
    c.save()
    c.shadowColor = this.color
    c.shadowBlur = 20
    
    // Draw diamond
    c.beginPath()
    c.moveTo(this.x, this.y - this.radius) // Top point
    c.lineTo(this.x + this.radius, this.y) // Right point
    c.lineTo(this.x, this.y + this.radius) // Bottom point
    c.lineTo(this.x - this.radius, this.y) // Left point
    c.closePath()
    
    c.fillStyle = this.color
    c.fill()
    c.restore()
  }
}
