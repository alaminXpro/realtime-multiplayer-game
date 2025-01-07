addEventListener('click', (event) => {
  const canvas = document.querySelector('canvas')
  const { top, left } = canvas.getBoundingClientRect()

  // Create ripple effect at click position
  const x = (event.clientX - left) * devicePixelRatio
  const y = (event.clientY - top) * devicePixelRatio
  ripples.push(new Ripple(x, y))

  // Only handle shooting if player exists
  if (frontEndPlayers[socket.id]) {
    const playerPosition = {
      x: frontEndPlayers[socket.id].x,
      y: frontEndPlayers[socket.id].y
    }

    const angle = Math.atan2(
      event.clientY - top - playerPosition.y,
      event.clientX - left - playerPosition.x
    )

    socket.emit('shoot', {
      x: playerPosition.x,
      y: playerPosition.y,
      angle
    })
  }
})
