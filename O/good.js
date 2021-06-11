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

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class DogFilter {
    filter(items, spec) {
        return items.filter(x => spec.isSatisfied(x));
    }
}

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every(x => x.isSatisfied(item));
    }
}

let rex = new Dog('Rex', Color.brown, Size.medium);
let thor = new Dog('Thor', Color.gold, Size.huge);
let pif = new Dog('Pif', Color.gold, Size.small);
let lady = new Dog('Lady', Color.white, Size.small);

let availableDogs = [rex, thor, pif, lady];


let dogFilter = new DogFilter();
console.log(`Gold dogs:`);
for (let p of dogFilter.filter(availableDogs,
    new ColorSpecification(Color.gold))) {
    console.log(` * ${p.name}`);
}

console.log(`Small dogs:`);
for (let p of dogFilter.filter(availableDogs,
    new SizeSpecification(Size.small))) {
    console.log(` * ${p.name}`);
}

console.log(`Small and gold dogs:`);
let spec = new AndSpecification(
    new ColorSpecification(Color.gold),
    new SizeSpecification(Size.small)
);
for (let p of dogFilter.filter(availableDogs, spec))
    console.log(` * ${p.name}`);
