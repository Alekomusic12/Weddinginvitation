import { motion } from "motion/react";
import { Baby, Dog, Heart } from "lucide-react";

export default function KidsAndPets() {
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
            Niños y Mascotas
          </h1>

          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kids Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border border-border"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <Baby className="w-8 h-8 text-primary" />
              </div>
              <h2
                className="text-2xl text-center mb-4 text-primary"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Niños
              </h2>
              <p
                className="text-lg text-center text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                La celebración será solo para adultos.
              </p>
            </motion.div>

            {/* Pets Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md border border-border"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <Dog className="w-8 h-8 text-primary" />
              </div>
              <h2
                className="text-2xl text-center mb-4 text-primary"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Mascotas
              </h2>
              <p
                className="text-lg text-center text-foreground/80 leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
              >
                Queremos mucho a las mascotas, pero esta vez no podrán acompañarnos.
              </p>
            </motion.div>
          </div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-accent/50 border border-accent rounded-lg p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p
              className="text-lg text-foreground/80 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Agradecemos su comprensión. Esta decisión nos permite crear un ambiente adecuado para que todos disfruten plenamente de la celebración.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
