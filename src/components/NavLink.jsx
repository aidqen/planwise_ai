import Link from 'next/link'

export function NavLink({ href, children, cb, className }) {
  return (
    <div onClick={cb}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </div>
  )
}
