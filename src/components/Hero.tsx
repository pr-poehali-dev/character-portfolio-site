import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-pattern relative overflow-hidden py-20 md:py-32">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary/10 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 text-primary fill-primary mr-2 animate-float" />
            <Star className="h-6 w-6 text-primary fill-primary" />
            <Star className="h-8 w-8 text-primary fill-primary ml-2 animate-float" />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Оживите своих персонажей
          </h1>
          
          <p className="max-w-[42rem] text-lg text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
            Создавайте, исследуйте и делитесь удивительными историями ваших персонажей.
            Добро пожаловать в мир безграничной фантазии!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="h-12 px-8">
              Изучить персонажей
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
