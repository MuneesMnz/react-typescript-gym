import { SelectedPage } from '@/shared/types'
import React from 'react'
import HomePageText from "@/assets/HomePageText.png"
import SponcerdRedBull from "@/assets/SponsorRedBull.png"
import SponcerForbes from "@/assets/SponsorForbes.png"
import SponcerFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:w-full'  >
      {/* IMAGE AND MAIN HEADER  */}
      <div>
        {/* MAIN HEADER  */}
        <div>
          {/* HEADINGS  */}
          <div></div>
        </div>

        {/* IMAGE  */}
        <div></div>
      </div>
    </section>
  )
}

export default Home