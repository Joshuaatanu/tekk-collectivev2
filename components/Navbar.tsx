
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className=' px-8 py-4 w-full  flex flex-row text-white sticky'>
    <Image src="tekk-collective-logo.svg" alt='logo' width="163" height="33" />
     
     <div className='ml-auto flex flex-row space-x-20 '>
      <h1>Home</h1>
      <h1>Contact</h1>
      <h1>Project</h1>
      <h1>Services</h1>

     </div>
  </nav>
  )
}
