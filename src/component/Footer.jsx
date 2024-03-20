import React from 'react'

function Footer() {
  let date = new Date().getFullYear()
  return (
    <footer className='text-center bg-dark p-3 text-white'>
      Copyright &copy; {date}
    </footer>
  )
}

export default Footer