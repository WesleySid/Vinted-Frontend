import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51P17ZaI9qS51oPhKZNvOBoaePher7mF9IcsChsSzXcJT0agjdCnPn8Xla047oNpw1i7uWhHu843pOL5KwKi9GM1a00pbNgZKdB"
);

const CheckoutForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentIsDone, setPaymentIsDone] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (elements == null) {
        return;
      }

      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      const response = await axios.post("http://localhost:3200/payment");
      const clientSecret = response.data.client_secret;

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: "http://localhost:5173/",
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      }

      if (paymentIntent.status === "succeeded") {
        setPaymentIsDone(true);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return paymentIsDone ? (
    <div className="Payment-done">
      <p>Merci pour votre achat, vous pouvez suivre votre commande</p>
      <a href="https://www.youtube.com/watch?v=8ybW48rKBME&t=3s">ici</a>
    </div>
  ) : (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <CardElement />
        <button type="submit" disabled={!stripe || !elements || isLoading}>
          Pay
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </Elements>
  );
};

export default CheckoutForm;
