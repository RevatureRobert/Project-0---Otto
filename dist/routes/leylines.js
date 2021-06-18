"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delGames = exports.updateGames = exports.addGames = exports.getByIdGames = exports.getAllGames = void 0;
const Build_1 = require("../Dao/Build");
const gameDao = new Build_1.default();
console.log('Hello');
async function getAllGames(req, res) {
    console.log('Hello');
    const users = await gameDao.getAll();
    return res.status(200).json({ users });
}
exports.getAllGames = getAllGames;
async function getByIdGames(req, res) {
    const { id } = req.params;
    const users = await gameDao.getById(id);
    return res.status(200).json({ users });
}
exports.getByIdGames = getByIdGames;
async function addGames(req, res) {
    const { game } = req.params;
    const users = await gameDao.add(game);
    return res.status(200).json({ users });
}
exports.addGames = addGames;
async function updateGames(req, res) {
    const { game } = req.params;
    const users = await gameDao.update(game);
    return res.status(200).json({ users });
}
exports.updateGames = updateGames;
async function delGames(req, res) {
    const { genre } = req.params;
    const { id } = req.params;
    const users = await gameDao.delById(genre, id);
    return res.status(200).json({ users });
}
exports.delGames = delGames;
//# sourceMappingURL=leylines.js.map