import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="w-full flex container mx-auto">
      <h2 className="w-1/2 text-xl">Drew Cooper</h2>
      <ul className="w-1/2 flex justify-end space-x-8 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
