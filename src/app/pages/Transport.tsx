import { motion } from "motion/react";
import { Car, Clock, Shield, Users } from "lucide-react";

export default function Transport() {
  const transportOptions = [
    {
      icon: Car,
      title: "Conductor elegido",
      description: "Servicio ofrecido por la hacienda (costo adicional)",
    },
    {
      icon: Shield,
      title: "Conductor del seguro",
      description: "Puede llegar hasta la hacienda",
    },
    {
      icon: Users,
      title: "Transporte grupal",
      description: "Opción de van compartida",
    },
  ];

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
            Transporte
          </h1>

          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          {/* End Time Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2
                  className="text-2xl mb-3 text-primary"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Horario de Finalización
                </h2>
                <p
                  className="text-lg text-foreground/80 leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  La fiesta finalizará a la 1:00 a.m. Les compartimos esta información para que puedan planear su regreso a Bogotá.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Transport Options */}
          <div className="mb-12">
            <h3
              className="text-2xl text-center mb-8 text-primary"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Opciones Sugeridas
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {transportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4
                    className="text-lg mb-2 text-primary"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {option.title}
                  </h4>
                  <p
                    className="text-sm text-foreground/70"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    {option.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-accent/50 border border-accent rounded-lg p-8 text-center"
          >
            <p
              className="text-xl text-foreground/80 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Queremos que celebren con tranquilidad y disfruten sin preocupaciones.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
