import { useFetcher, type Params } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import useLoaderData from "../../hooks/useDataLoader";
import { MenuType, OrderType } from "../../types/pizza";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useEffect } from "react";

function Order() {
  const order = useLoaderData<OrderType>();
  const fetcher = useFetcher<MenuType[]>();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  fetcher.state === "idle";

  useEffect(() => {
    console.log(fetcher);
    if (!fetcher.data && fetcher.state === "idle") {
      fetcher.load("/menu");
    }
  }, [fetcher]);

  useEffect(() => {
    document.title = "Pizzify | Your Order";
  }, []);

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <section className="max-w-screen-2xl px-12 mx-auto">
      <div className="space-y-8 px-4 py-6 w-full">
        <div className="flex flex-wrap items-center justify-between gap-2 lg:gap-9">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Order #{id} status
          </h2>

          <div className="space-x-2">
            {priority && (
              <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                Priority
              </span>
            )}
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
              {status} order
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 bg-orange-50 px-6 py-5">
          <p className="font-medium lg:text-xl">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-xs lg:text-sm text-stone-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>

        <ul className=" border-b border-t">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              ingredients={
                fetcher.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
              isLoadingIngredients={fetcher.state === "loading"}
            />
          ))}
        </ul>

        <div className="space-y-2 bg-orange-50 px-6 py-5">
          <p className="text-sm lg:text-xl font-medium text-stone-600">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p className="text-sm lg:text-xl  font-medium text-stone-600">
              Price priority: {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold">
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
      </div>
    </section>
  );
}

export async function loader({ params }: { params: Params }) {
  const orderId = params.orderId as string;
  const res = await getOrder(orderId);
  return res;
}

export default Order;
