import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

export function RedirectPage() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");

  useEffect(() => {
    if (url) {
      const timer = setTimeout(() => {
        window.location.href = url;
      }, 3000); // 3 segundos

      return () => clearTimeout(timer); // limpa o timer caso o componente desmonte
    }
  }, [url]);
   const fadeIn = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay },
    });
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 text-center text-xl font-bold text-gray-800"  style={{
                backgroundColor: "black",
               
            }}>
                <motion.div {...fadeIn(0)}>
                    <img src='../../img/logoPIC2.png' className="w-full max-w-md mx-auto mb-4" />
                </motion.div>
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent "></div>
      <p className="text-white">Redirecionando para o WhatsApp...</p>
    </div>
  );
}
