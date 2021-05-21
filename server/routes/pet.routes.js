const PetController = require("../controllers/pet.controller");


module.exports = app =>{
    app.get("/api/pets", PetController.findAllPets)
    app.post("/api/pets/create", PetController.createPet)
    app.get("/api/pets/:id", PetController.findOnePet)
    app.put("/api/pets/update/:id", PetController.updateOnePet)
    app.delete("/api/pets/delete/:id", PetController.deletePet)
}