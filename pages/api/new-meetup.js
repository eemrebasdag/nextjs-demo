//  /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  //request object contains data about the incoming request.
  //response object will be needed for sending back response.

  //req.method provides us the find which kind of request is that.
  if (req.method === "POST") {
    const data = req.body; //req.body contains the data of the incoming request.

    const client = await MongoClient.connect(
      "mongodb+srv://eemrebasdag:475KnIoIzyaiztV6@cluster0.ipeizxu.mongodb.net/meetups?retryWrites=true&w=majority"
    ); // connecting Mongo DB

    const db = client.db(); //define db

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
};

export default handler;
