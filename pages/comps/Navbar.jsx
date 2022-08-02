import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className="logo">
        <Image src="/vercel.svg" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Persons Listing</a></Link>
    </div>
  );
}
 
export default Navbar;