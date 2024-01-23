import mongoose from "mongoose"

export async function connect() {
  try {
    const MONGO_URI = process.env.MONGO_URI!
    mongoose.connect(MONGO_URI)
    const connection = mongoose.connection

    connection.on("connected", () => {
      console.info("MongoDB connected Successfully!")
    })

    connection.on("error", (error) => {
      console.error(
        "MongoDB Connection Error. Please make sure MongoDB is running",
        { mongoDBConnectionError: error }
      )

      process.exit()
    })
  } catch (error) {
    console.error("Something went wrong while connecting...", {
      connectError: error
    })
  }
}
