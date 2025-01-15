import mongoose from "mongoose";
type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};
export async function connect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Mongodb connected ");
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
}
// import mongoose from "mongoose";

// type ConnectionObject = {
//   isConnected?: number;
// };

// const connection: ConnectionObject = {};

// export async function connect(): Promise<void> {
//   if (connection.isConnected) {
//     console.log("Already connected to MongoDB.");
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGO_URI!, {
//       connectTimeoutMS: 30000,
//       socketTimeoutMS: 45000,
//     });

//     connection.isConnected = db.connection.readyState; // Updated to access the correct property
//     console.log("MongoDB connected successfully.");
//   } catch (error: any) {
//     console.error("MongoDB connection error:", error.message);
//     console.error(error.stack);
//   }
// }
