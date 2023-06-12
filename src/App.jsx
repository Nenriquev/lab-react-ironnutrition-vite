import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import foodJson from "./foods.json"
import { motion, AnimatePresence} from "framer-motion"

function App() {

  const [foods, setFoods] = useState(foodJson)
  const [foodsDelete, setFoodDelete] = useState(foodJson)


 

  const handleDelete = (id) => {
    const result = foods.filter((food)=> food.id !== id)
    const haSalido = foods.find((food) => food.id == id)
    setFoods(result)
    setFoodDelete(haSalido)
  }

  

  return (
    <div className="App">
      {
        foods.map((food, index) => (
          <AnimatePresence key={index} initial={false}>
            { 
             (
            <motion.div key={food.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
              <FoodBox data={food} key={index} onDelete={handleDelete}/>
            </motion.div>)
            }
          </AnimatePresence>
        ))
      }
     
    </div>
  );
}

export default App;
