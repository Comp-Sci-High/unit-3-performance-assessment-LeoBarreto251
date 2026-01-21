const express = require("express")
const app = express()
let mexicoData =
{
  "foods": [
    {
      "name": "Tacos",
      "category": "Street Food",
      "mainIngredients": ["corn tortilla", "meat", "onion", "cilantro"],
      "description": "Folded tortillas filled with meat and topped with fresh ingredients."
    },
    {
      "name": "Tamales",
      "category": "Traditional",
      "mainIngredients": ["masa", "meat or vegetables", "corn husk"],
      "description": "Steamed corn dough filled with savory or sweet fillings."
    },
    {
      "name": "Enchiladas",
      "category": "Main Dish",
      "mainIngredients": ["tortillas", "chili sauce", "cheese", "meat"],
      "description": "Rolled tortillas covered in chili sauce and often baked."
    },
    {
      "name": "Quesadillas",
      "category": "Street Food",
      "mainIngredients": ["tortilla", "cheese"],
      "description": "Grilled tortillas filled with melted cheese and sometimes meat."
    },
    {
      "name": "Pozole",
      "category": "Soup",
      "mainIngredients": ["hominy", "meat", "chili peppers"],
      "description": "A hearty soup traditionally served during celebrations."
    },
    {
      "name": "Chiles Rellenos",
      "category": "Main Dish",
      "mainIngredients": ["poblano peppers", "cheese", "egg batter"],
      "description": "Stuffed peppers, battered and fried."
    },
    {
      "name": "Elote",
      "category": "Street Food",
      "mainIngredients": ["corn", "mayonnaise", "cheese", "chili powder"],
      "description": "Grilled corn on the cob with creamy and spicy toppings."
    },
    {
      "name": "Guacamole",
      "category": "Appetizer",
      "mainIngredients": ["avocado", "onion", "tomato", "lime"],
      "description": "A fresh avocado-based dip often served with tortilla chips."
    },
    {
      "name": "Mole",
      "category": "Sauce",
      "mainIngredients": ["chili peppers", "chocolate", "spices"],
      "description": "A rich, complex sauce commonly served over meat."
    },
    {
      "name": "Churros",
      "category": "Dessert",
      "mainIngredients": ["dough", "sugar", "cinnamon"],
      "description": "Fried dough pastries coated in cinnamon sugar."
    },
    {
      "name": "Flan",
      "category": "Dessert",
      "mainIngredients": ["eggs", "milk", "sugar"],
      "description": "A creamy caramel custard dessert."
    },
    {
      "name": "Horchata",
      "category": "Drink",
      "mainIngredients": ["rice", "milk", "cinnamon"],
      "description": "A sweet, refreshing rice-based drink."
    }
  ],

  "holidays": [
    {
      "name": "Año Nuevo",
      "date": "January 1",
      "type": "National Holiday",
      "description": "Celebration of the New Year with family gatherings and fireworks."
    },
    {
      "name": "Día de los Reyes Magos",
      "date": "January 6",
      "type": "Cultural Holiday",
      "description": "Celebrates the Three Kings; children receive gifts and eat Rosca de Reyes."
    },
    {
      "name": "Día de la Candelaria",
      "date": "February 2",
      "type": "Religious Holiday",
      "description": "Families gather to eat tamales and celebrate Candlemas."
    },
    {
      "name": "Día de la Constitución",
      "date": "February 5",
      "type": "National Holiday",
      "description": "Commemorates the Mexican Constitution of 1917."
    },

    {
      "name": "Semana Santa",
      "date": "March–April (varies)",
      "type": "Religious Observance",
      "description": "Holy Week observed with processions and religious ceremonies."
    },

    {
      "name": "Cinco de Mayo",
      "date": "May 5",
      "type": "Historical Commemoration",
      "description": "Marks Mexico’s victory over France at the Battle of Puebla."
    },
    {
      "name": "Día de la Independencia",
      "date": "September 16",
      "type": "National Holiday",
      "description": "Celebrates Mexico’s independence from Spain in 1810."
    },
    {
      "name": "Día de los Muertos",
      "date": "November 1–2",
      "type": "Cultural Holiday",
      "description": "Honors deceased loved ones with altars, offerings, and celebrations."
    },

    {
      "name": "Día de la Virgen de Guadalupe",
      "date": "December 12",
      "type": "Religious Holiday",
      "description": "Honors the Virgin of Guadalupe, the patron saint of Mexico."
    },
    {
      "name": "Navidad",
      "date": "December 25",
      "type": "Religious Holiday",
      "description": "Christmas celebrations with family gatherings and traditional meals."
    }
  ]
}



app.use((req,res,next)=>{
console.log(req.method +" "+ req.url)
next()
})

app.get("/",(req,res)=>{
res.status(200).send("<h1>Welcome to the Mexico API</h1>")    
})
app.get("/docs",(req,res)=>{
res.status(200).send("<h3>In order to start exploring Mexico API here are the following endpoints to help you get started: /foods{optionalId} & /holidays{optionalId}</h3>")
})
app.get('/foods',(req,res)=>{
res.status(200).json(mexicoData.foods)
})
app.get('/holidays',(req,res)=>{
res.status(200).json(mexicoData.holidays)
})

app.get('/foods/:id',(req,res)=>{
const id = req.params.id
res.status(200).send(mexicoData.foods[id].name + " are " + mexicoData.foods[id].description + " And made of " + mexicoData.foods[id].mainIngredients)
})
app.get('/holidays/:id',(req,res)=>{
const id = req.params.id
res.status(200).send(mexicoData.holidays[id].name + " is a " + mexicoData.holidays[id].type + " which is celebrated on " + mexicoData.holidays[id].date + " where " + mexicoData.holidays[id].description)
})







app.use((req,res,next)=>{
res.status(404).send("404 NOT FOUND")
})

app.listen(3000,()=>{
console.log("The server is running on 3000 port")
})


