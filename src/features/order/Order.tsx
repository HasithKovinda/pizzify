import { type Params } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import useLoaderData from "../../hooks/useDataLoader";
import { OrderType } from "../../types/pizza";

function Order() {
  const order = useLoaderData<OrderType>();
  console.log("🚀 ~ Order ~ order:", order);
  return <div>Order</div>;
}

export async function loader({ params }: { params: Params }) {
  const orderId = params.orderId as string;
  const res = await getOrder(orderId);
  return res;
}

export default Order;
