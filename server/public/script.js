const button = document.querySelector("button")
button.addEventListener("click", () => {
  fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: []

    })

  })
  
})