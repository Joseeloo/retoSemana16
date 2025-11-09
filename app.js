import express from 'express'
const app = express();
const PORT = 3000;

app.use(express.json());

let tareas = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('API de tareas funcionando 🚀');
});

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.post('/tareas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ error: 'El campo "titulo" es obligatorio.' });
  }
  const nuevaTarea = {
    id: nextId++,
    titulo,
    completada: false
  };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

app.put('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }
  tarea.completada = true;
  res.json(tarea);
});

app.delete('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada.' });
  }
  const tareaEliminada = tareas.splice(index, 1)[0];
  res.json({ mensaje: 'Tarea eliminada', tarea: tareaEliminada });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
