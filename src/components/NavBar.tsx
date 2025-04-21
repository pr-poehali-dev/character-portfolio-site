import * as React from "react";
import { Link } from "react-router-dom";
import { Book, Users, Star } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Star className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold">МирПерсонажей</span>
        </Link>
        
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Персонажи</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem to="/" title="Все персонажи" icon={<Users className="h-4 w-4 mr-2" />}>
                    Просмотреть всех доступных персонажей
                  </ListItem>
                  <ListItem to="/" title="Популярные" icon={<Star className="h-4 w-4 mr-2" />}>
                    Самые популярные персонажи
                  </ListItem>
                  <ListItem to="/" title="Истории" icon={<Book className="h-4 w-4 mr-2" />}>
                    Истории и приключения персонажей
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                О проекте
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
  title: string;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default NavBar;
