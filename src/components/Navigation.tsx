import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="p-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/users/123">User Profile</Link>
        </li>
      </ul>
    </nav>
  )
}