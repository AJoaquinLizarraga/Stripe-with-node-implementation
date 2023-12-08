/** @format */

import express from "express"
import paymentsRoutes from "./routes/payment.routes.js"
import morgan from "morgan"
import { PORT } from "./config.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use(paymentsRoutes)

app.listen(PORT || 3000, () => {
  console.log("Server on port: ", PORT)
})
