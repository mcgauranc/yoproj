'use strict';

var express = require('express');
var controller = require('./role.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/:id/skills/:skills_id/', controller.destroySkill);
router.post('/:id/achievment/', controller.addAchievment);
module.exports = router;