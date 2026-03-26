import { motion } from "motion/react";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
<<<<<<< HEAD
import dressCodeImage2 from "../../assets/MartinaGemini.png"; // ← IMPORT CORRECTO
=======
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
<<<<<<< HEAD
            src={dressCodeImage2}
=======
            src="https://images.unsplash.com/photo-1769812343890-4e406a33cfbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlJTIwZ2FyZGVufGVufDF8fHx8MTc3NDQ0MTEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
            alt="Wedding venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Nos Casamos
          </h1>
          <div className="w-24 h-px bg-white/60 mx-auto mb-6" />
          <p
            className="text-xl md:text-2xl mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Sábado, 24 de Octubre de 2026
          </p>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-3xl md:text-4xl mb-8 text-primary"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Celebra con Nosotros
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed mb-12 text-foreground/80 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Estamos muy emocionados de invitarlos a compartir este día tan especial con nosotros.
            Iniciaremos con una ceremonia católica, seguida de una recepción para celebrar juntos.
            Todo se llevará a cabo en la Hacienda La Martina, en Tenjo.
          </p>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Fecha
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif" }}>24 de Octubre, 2026</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Hora
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif" }}>3:00 p.m.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Lugar
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Hacienda La Martina, Tenjo</p>
            </div>
          </div>

          {/* CTA Button */}
          <a
<<<<<<< HEAD
            href="https://maps.app.goo.gl/swN3WK6dKJBWjsMa8"
=======
            href="https://maps.app.goo.gl/CurKCQkWwwarzUhk7"
>>>>>>> 16b87ae25e6af02a0e14bb22a2f3e545c7e86f0f
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto text-base"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Cómo llegar
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://i.pinimg.com/736x/ec/1e/02/ec1e029e437cec04a49f8ad0bf62b023.jpg"
            alt="Wedding rings"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
    </div>
  );
}