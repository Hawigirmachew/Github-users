// import {Fo}

function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className="text-center bg-neutral shadow-lg py-4">
      {date} || All rights are reserved.
    </div>
  )
}

export default Footer
