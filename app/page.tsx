import Image from 'next/image'
import someIcon from './logo.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image priority src={someIcon} alt="logo" />
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/blog/changeMe">Blog</Link>
      </div>
      <text className="mt-5">
        This is the intro for my portfolio, should not be that long but somehow
        it should be descriptive. Change the following body whenever the
        skeleton of the site gets established
      </text>
    </main>
  )
}
