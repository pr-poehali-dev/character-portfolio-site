import { useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import CharacterCard from "@/components/CharacterCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Пример данных персонажей
const demoCharacters = [
  {
    id: "char1",
    name: "Алексей Волков",
    description: "Отважный исследователь, обладающий способностью общаться с животными и выживать в самых суровых условиях.",
    image: "/placeholder.svg",
    tags: ["Исследователь", "Маг природы", "Одиночка"]
  },
  {
    id: "char2",
    name: "Елена Сонная",
    description: "Могущественная волшебница, способная проникать в сны других людей и управлять их сновидениями.",
    image: "/placeholder.svg",
    tags: ["Волшебница", "Сновидец", "Мистик"]
  },
  {
    id: "char3",
    name: "Кирилл Охотник",
    description: "Умелый тактик и стратег, использующий технологии будущего для сражения с потусторонними существами.",
    image: "/placeholder.svg",
    tags: ["Воин", "Технолог", "Охотник"]
  },
  {
    id: "char4",
    name: "Мария Теневая",
    description: "Тайный агент, владеющий древним искусством манипуляции тенями и способностью становиться невидимой.",
    image: "/placeholder.svg",
    tags: ["Шпион", "Теневой маг", "Убийца"]
  },
  {
    id: "char5",
    name: "Дмитрий Искра",
    description: "Гениальный изобретатель, создающий удивительные машины и обладающий контролем над электричеством.",
    image: "/placeholder.svg",
    tags: ["Изобретатель", "Элементалист", "Ученый"]
  },
  {
    id: "char6",
    name: "Анна Песнь",
    description: "Одаренная певица, чей голос может исцелять раны, внушать эмоции и даже разрушать предметы.",
    image: "/placeholder.svg",
    tags: ["Бард", "Целитель", "Эмпат"]
  }
];

const categories = [
  { id: "all", name: "Все" },
  { id: "magic", name: "Маги" },
  { id: "warriors", name: "Воины" },
  { id: "other", name: "Другие" }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Фильтрация персонажей
  const filteredCharacters = demoCharacters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         character.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === "all") return matchesSearch;
    
    // Примитивная фильтрация по категориям для демонстрации
    if (activeCategory === "magic" && 
        (character.tags.includes("Маг природы") || 
         character.tags.includes("Волшебница") || 
         character.tags.includes("Теневой маг") || 
         character.tags.includes("Элементалист"))) {
      return matchesSearch;
    }
    
    if (activeCategory === "warriors" && 
        (character.tags.includes("Воин") || 
         character.tags.includes("Охотник") || 
         character.tags.includes("Убийца"))) {
      return matchesSearch;
    }
    
    if (activeCategory === "other" && 
        (!character.tags.includes("Маг природы") && 
         !character.tags.includes("Волшебница") && 
         !character.tags.includes("Теневой маг") && 
         !character.tags.includes("Элементалист") &&
         !character.tags.includes("Воин") && 
         !character.tags.includes("Охотник") && 
         !character.tags.includes("Убийца"))) {
      return matchesSearch;
    }
    
    return false;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      
      <div className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold mb-3">Наши персонажи</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Исследуйте уникальных персонажей с их историями, способностями и приключениями
          </p>
        </div>
        
        <div className="flex flex-col gap-6 mb-10">
          <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Поиск персонажей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
            <TabsList className="grid grid-cols-4">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map(character => (
              <CharacterCard 
                key={character.id}
                id={character.id}
                name={character.name}
                description={character.description}
                image={character.image}
                tags={character.tags}
                onClick={() => console.log(`Clicked on ${character.name}`)}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">
                Персонажи не найдены. Попробуйте изменить параметры поиска.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <footer className="bg-accent py-8 mt-auto">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} МирПерсонажей. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
