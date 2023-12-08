/** @format */

import { Router } from "express"
import { createSession } from "../controllers/payment.controller.js"

const paymentsRoutes = Router()

paymentsRoutes.post("/createCheckoutSession", createSession)
paymentsRoutes.get("/success", (req, res) => {
  res.status(200).send("success")
})
paymentsRoutes.get("/cancelled", (req, res) => {
  res.status(200).send("cancelled")
})

export default paymentsRoutes
