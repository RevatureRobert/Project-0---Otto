"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leylines_1 = require("./leylines");
const buildRoute = new express_1.Router();
buildRoute.get('/all', leylines_1.getAllGames);
buildRoute.get('/read/:id', leylines_1.getByIdGames);
buildRoute.get('/add', leylines_1.addGames);
buildRoute.get('/update', leylines_1.updateGames);
buildRoute.get('/delete/:genre/:id', leylines_1.delGames);
const totalRouter = express_1.Router();
totalRouter.use('/games', buildRoute);
exports.default = totalRouter;
//# sourceMappingURL=vortex.js.map