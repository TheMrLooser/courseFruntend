import axios from "axios";

export const checkoutHandler = async (amount) => {
  const {
    data: { order },
  } = await axios.post("http://localhost:3001/orders", {
    amount,
  });

  const options = {
    key: "rzp_test_Nu3n0iPV10sDEC", // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Varun Patel",
    description: "Course Purchase",
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "/cart",
    prefill: {
      name: "Varun Patel",
      email: "varunpatel473@gmail.com",
      contact: "9999999999",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};
