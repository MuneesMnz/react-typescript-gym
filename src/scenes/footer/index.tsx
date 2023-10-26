import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="w-full bg-primary-100">
            <div className="mx-auto w-5/6 py-10 flex gap-20 max-md:gap-10 max-md:flex-col ">

                <div className="flex-[2]">
                    <img src={Logo} alt="abc" className="mb-4" />
                    <p className="text-[15px] mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
                        doloremque cum. Soluta cum nobis magni hic, nisi quis harum quos
                        officia aperiam minima, veritatis possimus illum in. Laboriosam,
                        possimus deserunt.
                    </p>
                    <p className="text-[15px]">
                        @ Evogym All Right Reserved
                    </p>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <p className="font-semibold">Links</p>
                    <p>Lorem ipsum </p>
                    <p>dolor sit amet.</p>
                    <p>Lorem ipsum </p>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <p className="font-semibold">Contact Us</p>
                    <p>dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    <p>1234567890 </p>
                </div>
            </div>
        </section>
    )
}

export default Footer