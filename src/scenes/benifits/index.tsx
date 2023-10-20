import ActionButton from '@/shared/ActionButton';
import Benifit from '@/shared/Benifit';
import Htext from '@/shared/Htext';
import { BenifitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";

import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benifits: Array<BenifitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: "State of the Art Facilities",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis laboriosam quisquam fugit"
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis laboriosam quisquam fugit"

  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "Expert and Pro Trainers",
    discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati omnis laboriosam quisquam fugit"

  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}


const Benifits = ({ setSelectedPage }: Props) => {


  return (
    <section id='benifits' className='w-5/6 mx-auto min-h-full py-2'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}>

        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            initial: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='md:my-5 md:w-3/5'>
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Obcaecati omnis laboriosam quisquam
            fugit iusto ipsa dolorum fuga voluptas vel vero, magni molestiae
            distinctio dicta nam earum expedita ipsum perferendis a.
          </p>
        </motion.div>

        {/* BENIFITS  */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"visible"}
          className='md:flex items-center justify-between gap-5'>
          {
            benifits.map((benifit: BenifitType) => (
              <Benifit
                key={benifit.title}
                icon={benifit.icon}
                title={benifit.title}
                discription={benifit.discription}
                setSelectedPage={setSelectedPage}
              />
            ))
          }

        </motion.div>
        <div className='md:flex items-center justify-between gap-20 md:mt-28 mt-16'>


          {/* GRAPICS AND DISCRIPTION  */}
          <img src={BenefitsPageGraphic} alt="benifit-grapic" className='mx-auto ' />
          {/* DISCRIPTION  */}
          <div>
            {/* TITLE  */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves '>
                <motion.div
                  initial="initial"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{  duration: 0.5 }}
                  variants={{
                    initial: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Htext >
                    MILLIONS OF HAPPY MEMBERS GETTING {" "}<span className='text-primary-500'>FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            {/* DISCRIPTION  */}
            <motion.div initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            initial: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}>
              <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet possimus officia distinctio velit vero non veritatis!
                Aperiam id est quo, atque sequi in delectus, illo reiciendis repellat
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet possimus officia distinctio velit vero non veritatis!
                Aperiam id est quo, atque sequi in delectus, illo reiciendis repellat
                eius sapiente ad!
              </p>
              <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet possimus officia distinctio velit vero non veritatis!
                Aperiam id est quo, atque sequi in delectus, illo reiciendis repellat
                eius sapiente ad!
                Eveniet possimus officia distinctio velit vero non veritatis!
                Aperiam id est quo, atque sequi in delectus, illo reiciendis repellat
                eius sapiente ad!
              </p>
            </motion.div>
            {/* BUTTON  */}
            <div className=' relative mt-16'>
              <div className=' before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={() => SelectedPage.OurClasses}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benifits