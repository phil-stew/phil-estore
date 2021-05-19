const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {/*

  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products*/
});

  router.get('/:id', async (req, res) => {/*
    try {
      const categoryData = await Location.findByPk(req.params.id, {
        // JOIN with travellers, using the Trip through table
        include: [{ model: Category, through: Product , as: 'category_products' }]
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No products found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  // find one category by its `id` value
  // be sure to include its associated Products*/
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
