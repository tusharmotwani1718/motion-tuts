import { X, Mail, MessageCircle, Apple } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Card() {

    const [open, setOpen] = useState(true);

    return (
        <>
            <AnimatePresence>
                {
                    open && (
                        <motion.section
                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "blur(10px)"
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className="w-full h-screen flex items-center justify-center text-sm bg-white text-neutral-800">



                            <motion.div

                                className={
                                    `w-72 min-h-[23rem] h-[23rem] rounded-xl text-sm shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-4 flex flex-col gap-4`

                                }>
                                <h2 className="font-bold text-xs">Cool UI Components</h2>
                                <p className="text-neutral-400 text-xs">A collection of beautifully designed UI components for your next project.</p>
                                <div className="flex items-center justify-center mt-4">
                                    <button className="flex items-center gap-2
                    shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                    rounded-md px-2 py-1"
                                        onClick={() => setOpen(false)}
                                    >
                                        <img src="favicon.svg" alt="Vite" width={16} height={16} />
                                        Vite
                                        <X className="w-4 h-4 text-neutral-400" />
                                    </button>
                                </div>
                                <div className="flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 bg-gray-100 relative">

                                    {/* Hide this div */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                                        whileHover={{
                                            opacity: 1,
                                            scale: 1.05,
                                            filter: "blur(0px)"
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute inset-0 h-full w-full bg-white divide-y divide-neutral-200">
                                        <div className="p-4 text-xm flex items-start gap-2">

                                            <div className="
                            w-6 h-6 flex-shrink-0 bg-gradient-to-br
                            shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                            bg-white rounded-md flex items-center justify-center
                            ">
                                                <Apple className="w-3 h-3 text-neutral-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-[8px]">Cool UI Components</p>
                                                <p className="text-neutral-400 text-[8px] mt-1">A collection of UI components.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 text-xm flex items-start gap-2">

                                            <div className="
                            w-6 h-6 flex-shrink-0 bg-gradient-to-br
                            shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                            bg-white rounded-md flex items-center justify-center
                            ">
                                                <MessageCircle className="w-3 h-3 text-neutral-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-[8px]">24 * 7 Chat Support</p>
                                                <p className="text-neutral-400 text-[8px] mt-1">Always available to assist you.</p>
                                            </div>
                                        </div>
                                        <div className="p-4 text-xm flex items-start gap-2">

                                            <div className="
                            w-6 h-6 flex-shrink-0 bg-gradient-to-br
                            shadow-[0_1px_1px_rgba(0,0,0,0.5),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
                            bg-white rounded-md flex items-center justify-center
                            ">
                                                <Mail className="w-3 h-3 text-neutral-600" />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="font-bold text-[8px]">Mail Services Available</p>
                                                <p className="text-neutral-400 text-[8px] mt-1">Get in touch with us anytime.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    {/* Animated div ends here */}
                                </div>
                            </motion.div>


                        </motion.section>
                    )
                }
            </AnimatePresence>
        </>
    )
}