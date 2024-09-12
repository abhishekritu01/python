// import multer from 'multer';
// import path from 'path';

// // Define storage configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Directory where files will be stored
//     },
//     filename: (req, file, cb) => {
//         // Create a unique filename based on the current timestamp and original name
//         const ext = path.extname(file.originalname);
//         const filename = `${Date.now()}${ext}`;
//         cb(null, filename);
//     }
// });

// // Initialize multer with the storage configuration
// const upload = multer({ storage });

// export default upload;





// ----------- for multiple files ------------
import multer from 'multer';
import path from 'path';

// Define storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be stored
    },
    filename: (req, file, cb) => {
        // Create a unique filename based on the current timestamp and original name
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;
        cb(null, filename);
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

export default upload;
