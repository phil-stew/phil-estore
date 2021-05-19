// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete:'CASCADE'
})

Product.belongsTo(Category,{
  foreignKey: 'category_id',
  
})

Product.belongsToMany(Tag,{
  through:{
    model: Tag,
    unique: false

  } ,
  as: 'Product_Tagged'
})
Tag.belongsToMany(Product,{
  through:{
    model: ProductTag,
    unique: false,
  },
  as: 'Tagged_Products'

})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
