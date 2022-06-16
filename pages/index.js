import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from './comps/Navbar';


export default function Home() {
  return (
    <div>
      <Navbar/>
    <p>this is index.js</p>
    </div>
  )
}
