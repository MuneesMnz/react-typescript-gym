import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

const childVariant={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1},
}

type Props = {
    icon: JSX.Element;
    title: String;
    discription: String,
    setSelectedPage: (value: SelectedPage) => void
}

const Benifit = ({ icon, title, discription, setSelectedPage }: Props) => {

    return (
        <motion.div
         className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center '
         variants={childVariant}
         >
            <div className='mb-4 flex justify-center'>
                <div className='rounded-full border border-gray-100 bg-primary-100 p-5'>
                    {icon}
                </div>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-5'>{discription}</p>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>

            </AnchorLink>
        </motion.div>
    )
}

export default Benifit