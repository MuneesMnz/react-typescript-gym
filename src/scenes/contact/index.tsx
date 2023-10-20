import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from '@/shared/Htext';
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const inputStyle=`w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white `

const Contact = ({ setSelectedPage }: Props) => {

    const { trigger, register, formState: { errors } } = useForm()

    const handleSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)} >
                <motion.div
                    className='md:w-3/5 '
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        initial: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <Htext >
                        <span className='text-primary-500'>JOIN NOW</span> {" "}TO GET IN SHAPE
                    </Htext>
                    <p className='my-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni amet perspiciatis adipisci,
                        ratione vel possimus laudantium dolores inventore voluptatum qui repudiandae commodi aut
                        ipsum explicabo quo nobis non obcaecati? Quia distinctio nesciunt porro provident
                        reiciendis placeat quibusdam harum enim doloribus, impedit suscipit cupiditate quos
                        nobis cum magni possimus ullam mollitia!
                    </p>
                </motion.div>
            </motion.div>

            {/* FOTM AND IMAGE  */}

            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div
                    className='mt-10 basis-3/5 md:mt-0 '
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        initial: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <form target='_blank'
                        onSubmit={(e) => handleSubmit(e)}
                        action="https://formsubmit.co/muneeskarakkad62@gmail.com"
                        method='POST'

                    >
                        <input className={inputStyle} />
                    </form>

                </motion.div>
            </div>

        </section>
    )
}

export default Contact