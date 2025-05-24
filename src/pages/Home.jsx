import { useEffect, useState } from "react";
import { Formulario } from "../componentes/Form";
import { motion } from "framer-motion";

export default function Home() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowForm(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const fadeIn = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    });
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            style={{

                backgroundColor: "black",
            }}
        >
            <div className="w-full px-4 text-center">
                <motion.div {...fadeIn(0)}>
                    <img src='../../img/logoPIC2.png' className="w-full max-w-md mx-auto mb-4" />
                </motion.div>

                <p className="text-lg mb-8">Preencha o formulário abaixo:</p>
            </div>

            <Formulario />
        </div>
    );
}
