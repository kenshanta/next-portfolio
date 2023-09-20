'use client'

import 'tailwindcss/tailwind.css'
import PageAnimation from '@/components/pageAnimation'
import BoxAnimation from '@/components/boxAnimation'
import UsageIndicator from '@/components/progressIndicator'
import { LoremIpsum } from '@/components/loremIpsum'
import TextInput from '@/components/textInput'
import { useUser } from '@clerk/nextjs'
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
          <LoremIpsum response={greetingMessage + user.firstName + ' :)'} />
          <div className="h-96 flex-row-reverse justify-center">
            <div>
              this is where the answer gets generated, ,,, line after line.
              replace me when able
            </div>
          </div>
        </div>
        <TextInput />
      </PageAnimation>
      <UsageIndicator />
    </div>
  ) : (
    <div>
      <h1> Building. . . </h1>
    </div>
  )
}

export default Home
