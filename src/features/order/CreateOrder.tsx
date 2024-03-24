import { Form, redirect, useNavigation } from "react-router-dom";
import { type Cart, type NewOrder } from "../../types/pizza";
import { createOrder } from "../../services/apiRestaurant";
import useFormErrors from "../../hooks/useFormErrors";
import useAppSelector from "../../hooks/useAppSelector";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const name = useAppSelector((state) => state.user.userName);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useFormErrors<NewOrder>();
  const cart = fakeCart;

  return (
    <div className="max-w-2xl mx-auto px-12 mt-10">
      <h2 className="text-2xl font-semibold text-zinc-500 mb-5">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="space-y-5">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={name}
            className="input"
            required
          />
        </div>

        <div>
          <label className="label">Phone number</label>
          <div>
            <input type="tel" name="phone" className="input" required />
          </div>
          <span> {formErrors?.phone && formErrors.phone}</span>
        </div>

        <div>
          <label className="label">Address</label>
          <div>
            <input type="text" name="address" className="input" required />
          </div>
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-primary focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button
            className="btn px-2 py-3 text-xl text-white rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order...." : "Order now"}{" "}
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
    priority: (formData.get("priority") as string) === "on",
    cart: JSON.parse(formData.get("cart") as string) as Cart[],
  };

  const errors: Partial<NewOrder> = {};

  if (!isValidPhone(order.phone))
    errors.phone = "Please add a valid phone number";
  if (!isValidPhone(order.customer)) errors.customer = "Please add a name";
  if (!isValidPhone(order.address)) errors.phone = "Please add a address";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
