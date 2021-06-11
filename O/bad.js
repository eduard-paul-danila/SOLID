let Color = Object.freeze({
    white: 'white',
    black: 'black',
    brown: 'brown',
    red: 'red',
    gold: 'gold',
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
    huge: 'huge'
});

class Dog {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class DogFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color === color);
    }

    filterBySize(products, size) {
        return products.filter(p => p.size === size);
    }

    filterBySizeAndColor(products, size, color) {
        return products.filter(p =>
            p.size === size && p.color === color);
    }

    // state space explosion
    // 3 criteria (+weight) = 7 methods

    // OCP = open for extension, closed for modification
}

let rex = new Dog('Rex', Color.brown, Size.medium);
let thor = new Dog('Thor', Color.gold, Size.huge);
let pif = new Dog('Pif', Color.gold, Size.small);
let lady = new Dog('Lady', Color.white, Size.small);

let availableDogs = [rex, thor, pif, lady];

let pf = new DogFilter();
console.log(`Gold dogs are :`);
for (let p of pf.filterByColor(availableDogs, Color.gold))
    console.log(` * ${p.name}`);

console.log(`Small and gold dogs are :`);
for (let p of pf.filterBySizeAndColor(availableDogs, Size.small, Color.gold))
    console.log(` * ${p.name}`);
