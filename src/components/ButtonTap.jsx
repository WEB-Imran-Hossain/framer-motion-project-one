import React from 'react';
import { motion } from 'framer-motion';

const ButtonTap = () => {
    return (
        <motion.div
            exit={{
                x: "-100vw",
                transition: {
                    ease: "easeInOut",
                    duration: 1,
                },
            }}
        >
            <motion.button
                className="bg-black text-white p-5 border my-10 mx-10 rounded-md"
                whileTap={{ scale: 0.5 }}
                whileHover={{
                    scale: 1.4,
                }}
            >
                Click Me
            </motion.button>

            <motion.button
                className="bg-black text-white p-5 border my-10 mx-10 rounded-md"
                whileTap={{ scale: 0.5 }}
                whileHover={{
                    scale: 1.4,
                    transition: { yoyo: Infinity },
                }}
            >
                Click Me
            </motion.button>
        </motion.div>
    );
};
export default ButtonTap;