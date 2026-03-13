import { motion } from "motion/react";

export default function Button() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_0.5px_0.5px,_rgba(255,255,255,0.1)_0.5px,_transparent_0.5px)] bg-[length:18px_18px]">
            <motion.button 
                whileHover={{
                    rotateX: 25,
                    rotateY: 10,
                    // boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2), 0px -4px 8px rgba(255, 255, 255, 0.2) inset"
                    // boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7), 0px -20px 50px rgba(8, 112, 184, 0.7) inset"
                    boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)"
                    
                }}
                style={{
                    translateZ: 100
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black text-xl shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]"
            >
                Subscribe
                <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-150 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-sm"></span>
            </motion.button>
        </section>
    )
}