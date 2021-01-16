import burger from "../assets/categories/burger.png";
import coffee from "../assets/categories/coffee.png";
import combo from "../assets/categories/combo.png";
import dessert from "../assets/categories/dessert.png";
import kids from "../assets/categories/kids.png";
import pizza from "../assets/categories/pizza.png";
import salad from "../assets/categories/salad.png";
import tacos from "../assets/categories/tacos.png";

export const categories = [
  {
    route: "/menu/combo",
    img: combo,
    name: "Combos",
  },
  {
    route: "/menu/pizza",
    img: pizza,
    name: "Pizzas",
  },
  {
    route: "/menu/kids",
    img: kids,
    name: "Niños",
  },
  {
    route: "/menu/burger",
    img: burger,
    name: "Burgers",
  },
  {
    route: "/menu/salad",
    img: salad,
    name: "Ensaladas",
  },
  {
    route: "/menu/tacos",
    img: tacos,
    name: "Tacos",
  },
  {
    route: "/menu/dessert",
    img: dessert,
    name: "Postres",
  },
  {
    route: "/menu/coffee",
    img: coffee,
    name: "Bebidas",
  },
];
