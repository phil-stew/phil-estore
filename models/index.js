// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category,{
  foreignKey: 'category_id'
})
Category.hasMany(Product,{
  foreignKey: 'catergoty_id'
})
Product.belongsToMany(Tag,{
  foreignKey: 'Product_id'
})
Tag.belongsToMany(Product,{
  foreignKey: 'Tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
