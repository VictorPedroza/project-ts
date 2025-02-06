import { app } from "./server/server";

const PORT = process.env.PORT;

app.listen(PORT || 8000, () => {
    console.log(`Typescript server is Running on: http://localhost:${PORT}`)
})
