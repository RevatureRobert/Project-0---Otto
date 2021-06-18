"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const vortex_1 = require("./routes/vortex");
const app = express();
app.use('/api', vortex_1.default);
app.listen(4000, () => {
    console.log('Listening on port 4000...');
});
//# sourceMappingURL=app.js.map