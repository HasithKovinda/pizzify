import { type Params, useFetcher } from "react-router-dom";
import Button from "../../components/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button name="make priority" />
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }: { params: Params }) {
  const orderId = params.orderId as string;
  await updateOrder(orderId, { priority: true });
  return null;
}
