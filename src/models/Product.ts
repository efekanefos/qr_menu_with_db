import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this product.'],
    maxlength: [200, 'Description cannot be more than 200 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this product.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL for this product.'],
  },
  category: {
    type: String,
    required: [true, 'Please specify the category of this product.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model is already defined to prevent recompilation error
export default mongoose.models.Product || mongoose.model('Product', productSchema); 