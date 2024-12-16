// config/multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig');

// Función para crear un storage dinámico según el tipo de recurso
const getStorage = (folder) => {
  return new CloudinaryStorage({
    cloudinary,
    params: {
      folder, 
      allowed_formats: ['jpg', 'jpeg', 'png'],
    },
  });
};

// Función para inicializar Multer con la carpeta deseada
const upload = (folder) => multer({ storage: getStorage(folder) });

module.exports = upload;
