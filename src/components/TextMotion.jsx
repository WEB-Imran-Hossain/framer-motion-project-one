import React from 'react';
import { motion } from "framer-motion";

const TextMotion = () => {
    const message =
        "We Are Enjoying Reactive Accelarator Course. LWS is Awesome!!!";

    const wordArray = message.split(" ");

    return (
        <div className="text-2xl m-4 text-center">
            {wordArray.map((word, index) => (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: index / 10,
                    }}
                    key={index}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </div>
    );
};

export default TextMotion;