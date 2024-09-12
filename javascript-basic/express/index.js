import express from "express";
import upload  from "./middleware/file.js";

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const port = 3000;

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.post("/user", upload.fields([
    { name: 'images', maxCount: 10 }, // Handle up to 10 files in 'images' field
    { name: 'documents', maxCount: 5 } // Handle up to 5 files in 'documents' field
]), (req, res) => {
    const { name, email } = req.body; // Form fields
    const images = req.files['images']; // Array of uploaded images
    const documents = req.files['documents']; // Array of uploaded documents

    console.log('Images:', images); // Log the uploaded images details
    console.log('Documents:', documents); // Log the uploaded documents details

    // Respond with status 200 and the user details
    res.status(200).send(`Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
