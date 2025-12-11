import * as sdk from "node-appwrite";

const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_TABLE_ID,
  DOCTOR_TABLE_ID,
  APPOINTMENT_TABLE_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  APPWRITE_ENDPOINT: ENDPOINT,
} = process.env;

// Debug logs (optional for checking env loading)
console.log("ENDPOINT =", ENDPOINT);
console.log("PROJECT_ID =", PROJECT_ID);


const client = new sdk.Client();

client.setEndpoint(ENDPOINT!)
      .setProject(PROJECT_ID!)
      .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);


