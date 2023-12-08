/** @format */

import Stripe from "stripe"

const stripe = new Stripe(
  "sk_test_51OKqgrDBCtd2xcDTYxuYx2TITk5ppR8U7Wau1HaVna4q83MjnMzp7LGLO8lh2o6z9SP3blHLGy0YJbuvpbfxzFgl00Qni5685k"
)
export const createSession = async (req, res) => {
  try {
    //esta funcion nos permide decirle a stripe porque queremos cobrar
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: "Laptop1",
              description: "gaming laptop",
            },
            currency: "usd",
            unit_amount: 20000, //esto son centavos, so... 200dolares
          },
          quantity: 1,
        },
        {
          price_data: {
            product_data: {
              name: "Laptop1",
              description: "gaming laptop",
            },
            currency: "usd",
            unit_amount: 80000, //esto son centavos, so... 200dolares
          },
          quantity: 2,
        },
        {
          price_data: {
            product_data: {
              name: "Lavadora",
              description: "smart lavadora",
            },
            currency: "usd",
            unit_amount: 60000, //esto son centavos, so... 200dolares
          },
          quantity: 1,
        },
      ],
      mode: "payment", // aqui son los metodos de pago, payment es una sola vez, subscription es una pago con frecuencia
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancelled",
    })
    res.status(200).send(session)
  } catch (error) {
    res.status(400).send("Todo falló, capo")
  }
}
