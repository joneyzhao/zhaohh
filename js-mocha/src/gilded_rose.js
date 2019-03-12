class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.quality < 50) {
      this.quality++;
    } else {
      this.quality = 50;
    }
    this.sellIn--;
  }
}

class Shop {
  constructor(items) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // if (this.items[i].name == 'Aged Brie') {
      //   this.updateAgedBrie(this.items[i]);
      // } else if (this.items[i].name == 'Sulfuras') {
      //   this.updateSulfuras(this.items[i]);
      // } else if (this.items[i].name == 'Backstage passes') {
      //   this.updateBackstagePasses(this.items[i]);
      // } else {
      //   this.updateNormal(this.items[i]);
      // }
      this.items[i].update();
    }
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
    } else {
      item.quality = 50;
    }
    item.sellIn--;
  }

  updateSulfuras(item) {
    item.quality = item.quality;
    item.sellIn = item.sellIn;
  }

  updateBackstagePasses(item) {
    if (item.sellIn > 10) {
      item.quality++;
    } else if (item.sellIn > 5 && item.sellIn <= 10) {
      item.quality += 2;
    } else if (item.sellIn > 0 && item.sellIn <= 5) {
      item.quality += 3;
    } else {
      item.quality = 0;
    }
    item.sellIn--;
  }
  
  updateNormal(item) {
    if (item.sellIn >= 0) {
      if (item.quality >= 1) {
        item.quality--;
      } else {
        item.quality = 0;
      }
    } else if (item.sellIn < 0 && item.quality >= 2) {
      item.quality -= 2;
    } 
    item.sellIn--;
  }
}


module.exports = {
  Item,
  Shop,
  AgedBrie
}
