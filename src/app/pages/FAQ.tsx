import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "¿Dónde es la recepción?",
      answer: (<>
          Hacienda{" "}
          <a 
            href="https://maps.app.goo.gl/aXRsWa7LcRcf3WtX6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 underline"
          >
            La Martina
          </a>
          , Tenjo.
        </>),
    },
    {
      question: "¿A qué hora comienza?",
      answer: "3:00 p.m.",
    },
    {
      question: "¿Hasta qué hora va la fiesta?",
      answer: "1:00 a.m.",
    },
    {
      question: "¿Habrá parqueadero?",
      answer: "Sí, sin costo.",
    },
    {
      question: "¿Código de vestuario?",
      answer: "Hombres: Traje formal con corbata. Mujeres: Vestido largo.",
    },
    {
      question: "¿Puedo llevar acompañante?",
      answer: "Solo si está indicado en la invitación.",
    },
    {
      question: "¿Niños?",
      answer: "Evento solo para adultos.",
    },
    {
      question: "¿Mascotas?",
      answer: "No se permiten.",
    },
    {
      question: "¿Transporte?",
      answer: "Conductor elegido, conductor del seguro o transporte grupal.",
    },
    {
      question: "¿Comidas especiales?",
      answer: "Opciones vegetarianas o veganas si nos avisan con anticipación.",
    },
    {
      question: "¿Clima?",
      answer: "En Tenjo hace frío en la noche; llevar abrigo.",
    },
    {
      question: "¿Regalos?",
      answer: "Lluvia de sobres.",
    },
    {
      question: "¿Fotos?",
      answer: "Habrá fotógrafo. Se pide mantener celulares guardados durante la ceremonia.",
    },
    {
      question: "¿No puedes asistir?",
      answer: "Avisar al 3000000000.",
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
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl text-center mb-6 text-primary"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Preguntas Frecuentes
          </h1>

          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          <p
            className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestra celebración.
          </p>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-border overflow-hidden"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger
                    className="px-6 py-4 hover:bg-accent/30 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="px-6 pb-4 text-foreground/80"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-accent/50 border border-accent rounded-lg p-8 text-center"
          >
            <p
              className="text-lg text-foreground/80 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              ¿Tienes alguna otra pregunta? No dudes en contactarnos al{" "}
              <a href="tel:3000000000" className="text-primary hover:underline font-medium">
                3000000000
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
