import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from '@/shared/Htext';
import Class from '@/shared/Class';

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo deserunt obcaecati laudantium dolores praesentium harum consequuntur illum",
    image: image1
  },
  {
    name: "Weight Fitness Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo deserunt obcaecati laudantium dolores praesentium harum consequuntur illum",
    image: image2
  },
  {
    name: "Adventure Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo deserunt obcaecati laudantium dolores praesentium harum consequuntur illum",
    image: image3
  },
  {
    name: "Yoga Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo deserunt obcaecati laudantium dolores praesentium harum consequuntur illum",
    image: image4
  },
  {
    name: "Boxing Classes",
    image: image5,
  },
  {
    name: "ABS Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo deserunt obcaecati laudantium dolores praesentium harum consequuntur illum",
    image: image6
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)} >
        <motion.div
          className='w-5/6 mx-auto '
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            initial: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}>
          <div className='md:w-3/5'>
            <Htext  >
              OUR CLASSES
            </Htext>
            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              soluta beatae provident ipsum quibusdam fugit sint modi, in nam sunt illo
              deserunt obcaecati laudantium dolores praesentium harum consequuntur illum
              a odit, earum officiis dolorum. Fugit quia qui quas unde deleniti
              alias saepe officia ipsam explicabo hic. Facere, architecto. Alias,
              non?
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>

            {
              classes.map((item: ClassType, ind) => (
                <Class
                  key={`${item.name}-${ind}`}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                />
              ))
            }

          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses