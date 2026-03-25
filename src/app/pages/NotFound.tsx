import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1
          className="text-6xl md:text-8xl mb-4 text-primary"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          404
        </h1>
        <h2
          className="text-2xl md:text-3xl mb-6 text-foreground"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Página no encontrada
        </h2>
        <p
          className="text-lg text-muted-foreground mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link to="/">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
