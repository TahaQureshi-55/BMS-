import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/registration" className="hover:underline">
            Registration
          </Link>
        </li>
        <li>
          <Link href="/token-scanner" className="hover:underline">
            Token Scanner
          </Link>
        </li>
        <li>
          <Link href="/search" className="hover:underline">
            Search
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

