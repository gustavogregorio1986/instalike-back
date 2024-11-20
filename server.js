import express from 'express';

const posts = [
  { id: 1, descricao: "Uma foto incrível de um gato", imagem: "https://placekitten.com/400/300" },
  { id: 2, descricao: "Paisagem deslumbrante ao pôr do sol", imagem: "https://placekitten.com/400/300" },
  { id: 3, descricao: "Cachorro fazendo uma pose fofa", imagem: "https://placekitten.com/400/300" },
  { id: 4, descricao: "Comida deliciosa e apetitosa", imagem: "https://placekitten.com/400/300" },
  { id: 5, descricao: "Natureza exuberante em uma floresta", imagem: "https://placekitten.com/400/300" }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// Rota para obter todos os posts
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// Rota para obter um post específico
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({ message: 'Post 1  não encontrado' });
  }

  res.status(200).json(post);
});