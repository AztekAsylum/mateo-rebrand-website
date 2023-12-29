import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { retrieveSession } from "stripe";

const Success = () => {
  const [session, setSession] = useState({});

  let [searchParams, setSearchParams] = useSearchParams();
  const sessParam = searchParams.get("session_id");
  console.log(sessParam);

  useEffect(() => {
    // Function to retrieve the session
    const fetchSession = async () => {
      try {
        // Use Stripe's retrieveSession method to get the session details
        const retrievedSession = await retrieveSession(sessParam); // Replace 'session_id_here' with your actual session ID
        setSession(retrievedSession);
      } catch (error) {
        console.error("Error retrieving session:", error);
      }
    };

    // Call the function to retrieve the session when the component mounts
    fetchSession();
    console.log("session");
  }, []);

  // useEffect(() => {
  //   const stripe = Stripe("pk_test_dPxHyGIFbeL8jrpFwj5X47Xb");
  //   stripe
  //     .retrieveSession(searchParams.get("session_id"))
  //     .then((sessState) => setSessState(sessState))
  //     .catch((error) => console.log(error));
  //   console.log("helloworld");
  //   // const retrieveSessState = async () => {
  //   //   const session = await stripe.checkout.sessions.retrieve(
  //   //     searchParams.get("session_id")
  //   //   );
  //   //   setSessState(session);
  //   // };
  //   // retrieveSessState();
  //   console.log(sessState);
  // }, []);
  console.log("swing");
  // const customer = await stripe.customers.retrieve(session.customer);

  return <h1>Payment Successful</h1>;
};

export default Success;
