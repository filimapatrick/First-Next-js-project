import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <>
         <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>

    </>
  )
}

export default Navbar
