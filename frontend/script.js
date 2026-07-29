document.addEventListener('DOMContentLoaded', ()=>{
  const newBtn = document.querySelector('.btn.new')
  const notifyBtn = document.querySelector('.btn.notify')
  const modal = document.getElementById('modal')
  const notifications = document.getElementById('notificationsPanel')
  const sendBtn = document.getElementById('sendMsg')
  const toInput = document.getElementById('toInput')
  const msgInput = document.getElementById('msgInput')

  // open modal
  newBtn && newBtn.addEventListener('click', ()=>{
    modal.classList.add('open')
    modal.setAttribute('aria-hidden','false')
    toInput && toInput.focus()
  })

  // toggle notifications
  notifyBtn && notifyBtn.addEventListener('click', ()=>{
    const isOpen = notifications.classList.toggle('open')
    notifications.setAttribute('aria-hidden', String(!isOpen))
  })

  // close modal by clicking close button or outside
  document.addEventListener('click', (e)=>{
    if(e.target.matches('#modal .close')){
      modal.classList.remove('open')
      modal.setAttribute('aria-hidden','true')
    } else if(e.target.id === 'modal'){
      modal.classList.remove('open')
      modal.setAttribute('aria-hidden','true')
    }
  })

  // send message (demo only)
  sendBtn && sendBtn.addEventListener('click', ()=>{
    const to = toInput.value.trim()
    const msg = msgInput.value.trim()
    if(!to || !msg){
      alert('Lütfen alıcı ve mesaj alanlarını doldurun.')
      return
    }
    // demo behaviour: append to history list
    const historyCard = document.querySelector('.history-card .item')
    if(historyCard){
      historyCard.textContent = `${to} - ${new Date().toLocaleDateString()}`
    }
    modal.classList.remove('open')
    modal.setAttribute('aria-hidden','true')
    toInput.value=''
    msgInput.value=''
    alert('Mesaj gönderildi (demo).')
  })

  // sidebar nav active state
  document.querySelectorAll('.sidebar nav a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      document.querySelectorAll('.sidebar nav a').forEach(x=>x.classList.remove('active'))
      a.classList.add('active')
    })
  })

})
