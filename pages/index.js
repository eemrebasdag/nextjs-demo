//our-domain.com/
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";

const HomePage = props => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   //send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active routes'
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // it is the faster option than getServerSideProps if you are not working with the data which should always be regenerated
  // getStaticProps, you can use it when your pages has pre-rendered data you might need to wait for.
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://eemrebasdag:475KnIoIzyaiztV6@cluster0.ipeizxu.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1, // if there are request from the server it will regenerate itself in 1 seconds. Seconds depends on your website data changing. This page will updated regularly after deployment.
  };
};

// export const getServerSideProps = async context => {
//   //it is better option with dealing request and response object
//   //getServerSideProps function will not run during the build process but always on the server after deployment.
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },

//     //there is no need to revalidate it because it will be run on the server for every incoming request.
//   };
// };

export default HomePage;
