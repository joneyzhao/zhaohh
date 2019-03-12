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

class Sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    this.quality = this.quality;
    this.sellIn = this.sellIn;
  }
}

class BackstagePasses extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.sellIn > 10) {
      this.quality++;
    } else if (this.sellIn > 5 && this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn > 0 && this.sellIn <= 5) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn--;
  }
}

class Normal extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    if (this.sellIn >= 0) {
      if (this.quality >= 1) {
        this.quality--;
      } else {
        this.quality = 0;
      }
    } else if (this.sellIn < 0 && this.quality >= 2) {
      this.quality -= 2;
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
      this.items[i].update();
    }
  }
}


module.exports = {
  Item,
  Shop,
  AgedBrie,
  Sulfuras,
  BackstagePasses,
  Normal
}
