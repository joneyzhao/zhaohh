class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  // constructor(items=[]){
  //   this.items = items;
  // }
  constructor(items) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') {
        console.log('this.items[i]==' + this.items[i].name);
        this.updateAgedBrie(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras') {
        this.updateSulfuras(this.items[i]);
      } else if (this.items[i].name == 'Backstage passes') {
        if (this.items[i].sellIn > 10) {
          this.items[i].quality++; 
          this.items[i].sellIn--;
        } else if (this.items[i].sellIn > 5 && this.items[i].sellIn <= 10) {
          this.items[i].quality += 2;
          this.items[i].sellIn--;
        } else if (this.items[i].sellIn > 0 && this.items[i].sellIn <= 5) {
          this.items[i].quality += 3;
          this.items[i].sellIn--;
        } else {
          this.items[i].quality = 0;
        }
      } else if (this.items[i].sellIn >= 0) {
        if (this.items[i].quality >= 1) {
          this.items[i].quality--;
          this.items[i].sellIn--;
        } else {
          this.items[i].quality = 0;
          this.items[i].sellIn--;
        }
      } else if (this.items[i].sellIn < 0 && this.items[i].quality >= 2) {
        this.items[i].quality -= 2;
        this.items[i].sellIn--;
      } 
    }
  }
  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
      item.sellIn--;
    } else {
      item.quality = 50;
      item.sellIn--;
    }
  }
  updateSulfuras(item) {
    console.log('this.item==' + item);
    console.log('this.item.name==' + item.name);
    item.quality;
    item.sellIn;
  }
}


module.exports = {
  Item,
  Shop
}
