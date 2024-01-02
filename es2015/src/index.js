import { choice, remove } from './helpers';
import fruits from './food';

function randomFruit(fruits) {
    const randomFruit = choice(fruits);
    console.log(`I'd like one ${randomFruit}`);
    console.log(`Here you go: ${randomFruit}`);
    console.log("Delicious! May I have another?");
    remove(fruits, randomFruit);
    console.log(`I'm sorry, we're out. We have ${fruits.length} left`);
} 

randomFruit(fruits);