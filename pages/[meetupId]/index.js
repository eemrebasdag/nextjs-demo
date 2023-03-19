import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const MeetupDetails = props => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description}></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDetail>
    </Fragment>
  );
};

// you need to export another function when the case you are dealing with getStaticProps and dynamic pages; because Next.js wants to pre-render on the build, every version of the dynamic page

export const getStaticPaths = async context => {
  const client = await MongoClient.connect(
    "mongodb+srv://eemrebasdag:475KnIoIzyaiztV6@cluster0.ipeizxu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking", // if fallback is true, next.js will generate a page which we didnt have on the path.(let's say m3 in our case). But if its false it will redirect you a 404 page

    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },

    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },

    //   //that is just for hardcoding example, you can generate automatically.
    // ],
  };
};

export const getStaticProps = async context => {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://eemrebasdag:475KnIoIzyaiztV6@cluster0.ipeizxu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.data.title,
        address: selectedMeetup.data.address,
        image: selectedMeetup.data.image,
        description: selectedMeetup.data.description,
      },
    },
  };
};

export default MeetupDetails;
