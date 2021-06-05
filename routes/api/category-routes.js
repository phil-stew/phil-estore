const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint
//connection.query = util.promisify(connection.query);

router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
    console.log(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products
});



  router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Location.findByPk(req.params.id, {
    
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No products found with this id!' });
        return;
      }
      
      res.status(200).json(categoryData);
      console.log('hilol', categoryData)
    } catch (err) {
      res.status(500).json(err);
    }
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
