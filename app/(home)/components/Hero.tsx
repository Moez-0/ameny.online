import React from 'react'
import { HeroHighlight, Highlight } from './HeroHighlightDemo'

const Hero = () => {
  return (
    <div className='md:p-24 p-14'>
      {/* General apology message */}
      <HeroHighlight>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>I'm Sorry</h1>
          <Highlight className='text-2xl mt-5'>
            I just want to make things better between us.
          </Highlight>
          <p className='mt-5 text-lg'>
            You're incredibly important to me, and I never want us to be upset with each other.
          </p>
          <p className='mt-5 text-lg italic'>
            Just know I'm here, and I care about you.
          </p>
        </div>
      </HeroHighlight>
    </div>
  )
}

export default Hero
