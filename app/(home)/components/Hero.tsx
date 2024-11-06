import React from 'react'
import { HeroHighlight  , Highlight} from './HeroHighlightDemo'

const Hero = () => {
  return (
    <div className='md:p-24 p-14'>
        {/* This is a porfolio hero  */}
        <HeroHighlight >
          <div className='text-center'>
            <h1 className='text-4xl font-bold'>Ameny Dhouib</h1>
            <Highlight className='text-2xl mt-5 '>Under Development </Highlight>
          </div>
        </HeroHighlight>

        
    </div>
  )
}

export default Hero
