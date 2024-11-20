import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("A Torre Eiffel iluminada a noite, com milhared de luzes citiland, criando um espetaculdo magico em paris");
})