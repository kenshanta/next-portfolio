'use client'

import 'tailwindcss/tailwind.css'
import PageAnimation from '@/components/pageAnimation'
import BoxAnimation from '@/components/boxAnimation'
import UsageIndicator from '@/components/progressIndicator'
import { ResponseBody } from '@/components/responseBody'
import TextInput from '@/components/textInput'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { getTimes } from 'suncalc'
import { useEffect, useState } from 'react'

const Home = () => {
  //TODO: refactor into dynamic list
  const boxProps = {
    color: 'pink',
    duration: 2,
    rotation: [0, 0, 90, 90, 90],
  }
  const boxProps1 = {
    color: 'orange',
    duration: 1,
    rotation: [0, 90, 90, 180, 0],
  }
  const boxProps3 = {
    color: 'whitesmoke',
    duration: 1,
    rotation: [0, 40, 190, 280, 0],
  }

  const [greetingMessage, setGreetingMessage] = useState('hey')

  const { isLoaded, isSignedIn, user } = useUser()

  const latitudeParis = 48.8566
  const longitudeParis = 2.3522

  useEffect(() => {
    const now = new Date()
    const times = getTimes(now, latitudeParis, longitudeParis)
    const sunset = times.sunset

    // Adjust the timezone offset if needed
    const timeZoneOffset = now.getTimezoneOffset() * 60 * 1000
    const sunsetTime = sunset.getTime() - timeZoneOffset

    if (now.getTime() < sunsetTime) {
      setGreetingMessage('Bonjour ') // It's daytime
    } else {
      setGreetingMessage('Bonsoir ') // It's after sunset
    }
  }, [])

  return isSignedIn ? (
    <div className="flex justify-center align-center ">
      <PageAnimation>
        <div>
          <div className="flex justify-start space-between align-center d-column">
            <BoxAnimation props={boxProps3} />
          </div>
          <div className="w-25 flex justify-center align-center d-row">
            <BoxAnimation props={boxProps} />
          </div>
          <div className=" mb-5 flex justify-end align-center d-column">
            <BoxAnimation props={boxProps1} />
          </div>
        </div>
        <div className="flex-col justify-end align-bottom">
          <ResponseBody response={greetingMessage + user.firstName + ' 😉'} />
          <div className="h-96 flex-row-reverse justify-center mt-5">
            <div className="text-grey">
              <p className="underline underline-offset-2 text-xl opacity-50 mb-2">
                UNDER CONSTRUCTION
              </p>
              this is where the answer gets generated, line after line. replace
              me when able Your name and email address were configured
              automatically based on your username and hostname. Please check
              that they are accurate. You can suppress this message by setting
              them explicitly:
            </div>
          </div>
        </div>
        <TextInput />
      </PageAnimation>
      <UsageIndicator />
    </div>
  ) : (
    <div className="flex-col mt-10">
      <div>
        <h1 className="text-2xl">
          You need to <a className="underline decoration-pink-400">Sign-in</a>{' '}
          or <a className="underline decoration-orange-400">Sign-up</a> in order
          to unlock all the features
        </h1>
      </div>
      <div className="flex justify-center align-center mt-7">
        <Link className="border-2 border-orange-400 p-2" href="/sign-in">
          <b>Validate Me</b>
        </Link>
      </div>
    </div>
  )
}

export default Home
