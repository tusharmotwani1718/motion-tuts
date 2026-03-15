import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { use, useRef } from "react";



const features = [
    {
        title: "JavaScript",
        description: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.",
        image: "src/assets/hero.png"
    },
    {
        title: "Vite",
        description: "Vite is a build tool that aims to provide a faster and more efficient development experience.",
        image: "src/assets/vite.svg"
    },
    {
        title: "React",
        description: "React is a JavaScript library for building user interfaces.",
        image: "src/assets/react.svg"
    }
];

const Card = ({ title, description, image, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log(`Scroll progress: ${latest}`);
    // });

    const translateContent = useTransform(
        scrollYProgress,
        [0, 1],
        [-200, 300]
    )

    const opacityImage = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 1, 0]
    )


    const blurContent = useTransform(
        scrollYProgress,
        [0.5, 1],
        [0, 10]
    )

    return (
        <motion.div
            ref={ref}
            key={index}
            className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-md min-h-screen w-7xl max-w-[60%] mx-auto gap-16"
            style={{ filter: useMotionTemplate`blur(${blurContent}px)` }}
        >
            <motion.div className="flex flex-col gap-2 max-w-sm" style={{ y: translateContent }}>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </motion.div>
            <motion.img src={image} alt={title} className="w-36 h-36 object-contain" style={{ opacity: opacityImage }} />

        </motion.div>
    )
}

export default function Features() {
    return (
        <section className="flex flex-col gap-0">
            {
                features.map((feature, index) => (
                    <Card key={index} {...feature} />
                ))
            }
        </section>
    )
}