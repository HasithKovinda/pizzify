import { Params } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  return <div>Order</div>;
}

export async function loader({ params }: { params: Params }) {
  const orderId = params.orderId as string;
  const res = await getOrder(orderId);
  return res;
}

export default Order;
