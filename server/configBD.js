const mongoose =require('mongoose');

// Conectar a la base de datos
mongoose.connect("mongodb://localhost:27017/analitica", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conexión exitosa a MongoDB");
}).catch(err => {
  console.error("Error de conexión a MongoDB:", err);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));


