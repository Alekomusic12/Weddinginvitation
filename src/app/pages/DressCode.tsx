import { motion } from "motion/react";
import { Shirt, Info } from "lucide-react";
import dressCodeImage from "../../assets/dresscode.png"; // ← IMPORT CORRECTO

export default function DressCode() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl text-center mb-6 text-primary"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Código de Vestuario
          </h1>

          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mb-12">
            <img
              src={dressCodeImage}
              alt="Formal dress code"
              className="w-full h-auto"
            />
          </div>

          {/* Dress Code Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Shirt className="w-6 h-6 text-primary" />
              </div>
              <h2
                className="text-2xl mb-4 text-primary"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hombres
              </h2>
              <p
                className="text-lg text-foreground/80"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Traje formal con corbata
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Shirt className="w-6 h-6 text-primary" />
              </div>
              <h2
                className="text-2xl mb-4 text-primary"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mujeres
              </h2>
              <p
                className="text-lg text-foreground/80"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Vestido largo
              </p>
            </motion.div>
          </div>

          {/* Special Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-accent/50 border border-accent rounded-lg p-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3
                  className="text-xl mb-3 text-primary"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Nota Especial
                </h3>
                <p
                  className="text-lg text-foreground/80 leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  El color blanco está reservado exclusivamente para la novia. Agradecemos elegir otros tonos.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}