import Link from "next/link"
export default function Navbar(){
  return(
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href="/myCV.pdf" download><button className="{styles.cvButton}">Download CV</button></a></li>
        </ul>
    </nav>
  )
}