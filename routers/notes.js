const router     = require ("express").Router ();
const controller = require ("../controllers/notes");

router.post ("/save", controller.save);
router.get ("/all", controller.all);

module.exports = router;
