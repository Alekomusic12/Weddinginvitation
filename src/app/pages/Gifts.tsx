import { motion } from "motion/react";
import { Gift, CreditCard, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Gifts() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const accountInfo = [
    { label: "Titular", value: "----------" },
    { label: "Cédula", value: "10000000" },
    { label: "Banco", value: "Nu" },
    { label: "Tipo de cuenta", value: "Ahorros" },
    { label: "Número de cuenta", value: "11111111" },
    { label: "Llave", value: "@000001" },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
            Mesa de Regalos
          </h1>

          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg mb-12">
            <img
              src="https://images.unsplash.com/photo-1631084854605-2ea7de264ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZ2lmdHMlMjBlbnZlbG9wZXxlbnwxfHx8fDE3NzQ0NDExMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Wedding gifts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p
              className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
            >
              Lo más importante para nosotros es contar con su compañía en este día tan especial.
              Si desean acompañarnos con un detalle, tendremos un espacio destinado para lluvia de sobres.
            </p>
          </motion.div>

          {/* Bank Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md border border-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-primary" />
              <h2
                className="text-2xl text-primary"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Información para Transferencia
              </h2>
            </div>

            <div className="space-y-4">
              {accountInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div>
                    <p
                      className="text-sm text-muted-foreground mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-lg text-foreground"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                    >
                      {item.value}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="text-primary hover:text-primary/80"
                  >
                    {copiedField === item.label ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
