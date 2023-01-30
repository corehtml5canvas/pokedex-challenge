const filterBits = {
  Normal: 1, Fighting: 2, Flying: 4, Poison: 8, Ground: 16, Rock: 32, Bug: 64,
  Ghost: 128, Steel: 256, Fire: 512, Water: 1024, Grass: 2048, Electric: 4096,
  Psychic: 8192, Ice: 16384, Dragon: 32768, Dark: 65536, Fairy: 131072,
};

const getItemByName = (items, name) => items.find(item => item.name === name)
const processListItems = items => addEvolutionItems(addFilterValues(items));
const filterBySearchTerm = (items, searchTerm) => items.filter((item) => item.name.includes(searchTerm));

// pre_evolution and next_evolution arrays do not contain full-fledged items,
// so those items can't be displayed on the Details page. This function
// adds preEvolution and nextEvolution arrays to items that have pre_evolution
// and next_evolution arrays, respectively, and stocks them with full-fledged
// items. See the Details component to see how they are used.

const addEvolutionItems = items => {
  return items.map(item => {
    if (item.prev_evolution) {
      item.prevEvolution =
        item.prev_evolution.map(i => getItemByName(items, i.name))
    }

    if (item.next_evolution) {
      item.nextEvolution =
        item.next_evolution.map(i => getItemByName(items, i.name))
    }

    return item;
  })
}

// Reduce types and weaknesses to numbers whose bits represent an item's types
// and weaknesses, respectively, and add the numbers to the corresponding item

const addFilterValues = items => items.map((item) => {
  const typeValue = item.type.reduce((bits, type) =>
    bits |= filterBits[type], 0);

  const weaknessValue = item.weaknesses.reduce((bits, weakness) =>
    bits |= filterBits[weakness], 0);

  return {
    ...item,
    typeValue,
    weaknessValue,
  };
});

const filterByTypeAndWeakness = (items, bits) => { // bits come from FilterModal selections
  let typeItems = items;
  let weaknessItems = items;

  if (bits.typeBits !== 0) {
    typeItems = items.filter((item) =>
      (item.typeValue & bits.typeBits) === bits.typeBits)
  }
  
  if (bits.weaknessBits !== 0) {
    weaknessItems = typeItems.filter((item) =>
      (item.weaknessValue & bits.weaknessBits) === bits.weaknessBits);
  }

  return bits.weaknessBits === 0 ? typeItems : weaknessItems;
}

export { // Used in Pokedex.js and FilterModal.js
  filterBits,
  processListItems,
  filterBySearchTerm,
  filterByTypeAndWeakness,
};