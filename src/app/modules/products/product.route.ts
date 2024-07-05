import { Schema, model, connect } from 'mongoose';
import express, { Router } from 'express';
import { productControllers } from './product.controller';

const router = express.Router();
router.post('/', productControllers.createProductController);
router.get('/', productControllers.getAllProductController);
router.get('/:productId', productControllers.getOneProductController);
router.put('/:productId', productControllers.updateOneProductController);
router.delete('/:productId', productControllers.deleteOneProductController);

export const productRouter = router;
