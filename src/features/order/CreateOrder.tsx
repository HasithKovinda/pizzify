import { Form, redirect, useNavigation } from "react-router-dom";
import { type Cart, type NewOrder } from "../../types/pizza";
import { createOrder } from "../../services/apiRestaurant";
import useFormErrors from "../../hooks/useFormErrors";
import useAppSelector from "../../hooks/useAppSelector";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { clearCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    userName: name,
    status,
    position,
    address,
  } = useAppSelector((state) => state.user);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useFormErrors<NewOrder>();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const totalCartPrice = useAppSelector((state) =>
    getTotalCartPrice(state.cart.cart)
  );

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const isPositionLoading = status === "loading";

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-2xl mx-auto px-12 mt-10">
      <h2 className="text-2xl font-semibold text-zinc-500 mb-5">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="space-y-5 lg:w-[500px]">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={name}
            className="input"
            required
          />
          <span className="text-red-500">
            {formErrors?.customer && formErrors.customer}
          </span>
        </div>

        <div>
          <label className="label">Phone number</label>
          <div>
            <input type="tel" name="phone" className="input" required />
          </div>
          <span className="text-red-500">
            {formErrors?.phone && formErrors.phone}
          </span>
        </div>

        <div className="relative">
          <label className="label">Address</label>
          <div>
            <input
              type="text"
              name="address"
              className="input"
              required
              disabled={isPositionLoading}
              defaultValue={address}
            />
            {!position.latitude && !position.longitude && (
              <button
                className={`absolute ${formErrors.address ? "bottom-[29px]" : "bottom-[5px]"}  right-[4px]  btn p-1  uppercase border text-white border-primary rounded-lg hover:text-primary  transition-all`}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                disabled={isPositionLoading}
              >
                get position
              </button>
            )}
            <span className="text-red-500">
              {formErrors?.address && formErrors.address}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-primary focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
            value={`${withPriority}`}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button
            className="btn px-2 py-3 text-xl text-white rounded-lg disabled:cursor-not-allowed hover:text-primary transition-all"
            disabled={isSubmitting || isPositionLoading}
          >
            {isSubmitting
              ? "Placing Order...."
              : `Order now ${formatCurrency(totalPrice)}`}
          </button>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const order: NewOrder = {
    customer: formData.get("customer") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    priority: (formData.get("priority") as string) === "true",
    cart: JSON.parse(formData.get("cart") as string) as Cart[],
  };

  const errors: Partial<NewOrder> = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please add a valid phone number";
  if (!order.customer) errors.customer = "Please add a name";
  if (!order.address) errors.phone = "Please add a address";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
