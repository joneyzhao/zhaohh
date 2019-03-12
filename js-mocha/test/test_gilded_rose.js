var {expect} = require('chai');
var { Shop, Item, AgedBrie} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("shows normal test", function() {
    const items = [new Item('normal', 10, 20), new Item('normal', 0, 0), new Item('normal', -1, 2), new Item('normal', 1, 1), new Item('normal', -1, 0)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(19);

    expect(shop.items[1].sellIn).to.equal(-1);
    expect(shop.items[1].quality).to.equal(0);

    expect(shop.items[2].sellIn).to.equal(-2);
    expect(shop.items[2].quality).to.equal(0);

    expect(shop.items[3].sellIn).to.equal(0);
    expect(shop.items[3].quality).to.equal(0);

    expect(shop.items[4].sellIn).to.equal(-2);
    expect(shop.items[4].quality).to.equal(0);
  });

  it("shows Aged Brie test", function () {
    // const items = [new Item('Aged Brie', 10, 20), new Item('Aged Brie', 10, 50)]
    const items = [new AgedBrie('Aged Brie', 10, 20), new AgedBrie('Aged Brie', 10, 50)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(21);

    expect(shop.items[1].sellIn).to.equal(9);
    expect(shop.items[1].quality).to.equal(50);
  });

  it("shows Sulfuras test", function () {
    const items = [new Item('Sulfuras', 10, 80)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(10);
    expect(shop.items[0].quality).to.equal(80);
  });

  it("shows Backstage passes test", function () {
    const items = [new Item('Backstage passes', 10, 20), new Item('Backstage passes', 12, 20), new Item('Backstage passes', 4, 20), new Item('Backstage passes', 0, 20)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(22);

    expect(shop.items[1].sellIn).to.equal(11);
    expect(shop.items[1].quality).to.equal(21);

    expect(shop.items[2].sellIn).to.equal(3);
    expect(shop.items[2].quality).to.equal(23);

    expect(shop.items[3].sellIn).to.equal(-1);
    expect(shop.items[3].quality).to.equal(0);
  });

});
