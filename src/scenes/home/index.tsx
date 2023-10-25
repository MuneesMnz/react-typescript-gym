import { SelectedPage } from '@/shared/types'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponcerdRedBull from "@/assets/SponsorRedBull.png"
import SponcerForbes from "@/assets/SponsorForbes.png"
import SponcerFortune from "@/assets/SponsorFortune.png"
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:w-full'  >
      {/* IMAGE AND MAIN HEADER  */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} className='md:flex w-5/6 mx-auto items-center justify-center md:h-5/6 '>
        {/* MAIN HEADER  */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS  */}
          <motion.div initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              initial: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className='md:-mt-20'
          >
            <div className='relative'>
              <div className=' before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:z-[-1]'>
                <img src={HomePageText} alt="home-text" />
              </div>
            </div>
            <p className='mt-8 text-sm md:text-start md:w-[400px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Qui veritatis rerum ad odio fugiat ex exercitationem facilis
              consequuntur veniam. Voluptatibus possimus doloremque modi porro

              rerum?
            </p>
          </motion.div>
          {/* ACTION BUTTON  */}
          <motion.div
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              initial: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className='mt-8 flex items-center gap-8 '>
            <ActionButton setSelectedPage={setSelectedPage} >
              Join now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>

            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE  */}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </div>
      </motion.div>

      {/* SPONCERS  */}
      {
        isAboveMediumScreen && (
          <div className='h-[150px] w-full bg-primary-100 py-10 '>
            <div className='w-5/6 mx-auto'>
              <div className='flex justify-between items-center'>
                <img src={SponcerdRedBull} alt="redbull" />
                <img src={SponcerForbes} alt="forbes" />
                <img src={SponcerFortune} alt="fortune" />
                <img src={SponcerdRedBull} alt="redbull" />
                <img src={SponcerForbes} alt="forbes" />
              </div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Home