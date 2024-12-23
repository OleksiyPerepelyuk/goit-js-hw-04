// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return 'List of all available potions';
//     },

//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));

// const atTheOldToad = {
//     potions: ['Speed potion', 'Stone skin'],
//     getPotions() {
//         return 'List of all available potions';
//     },
//     getPotions() {
//         return this.potions;
//     },
// };
// console.log(atTheOldToad.getPotions());

const atTheOldToad = {
    potions: ['Speed potion', 'Stone skin'],
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        this.potions.push(potionName);
    },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion('Invisibility'));
console.log(atTheOldToad.addPotion('Power potion'));
