import useLoaderData from "../../hooks/useDataLoader";
import { getMenu } from "../../services/apiRestaurant";
import { MenuType } from "../../types/pizza";
import MenuItem from "./MenuItem";

function Menu() {
  const data = useLoaderData<MenuType[]>();
  return (
    <section className="max-w-screen-2xl mx-auto px-12 mt-10">
      <article className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.map((menu) => {
          const { id, name, imageUrl, ingredients, soldOut, unitPrice } = menu;
          return (
            <MenuItem
              id={id}
              name={name}
              imageUrl={imageUrl}
              ingredients={ingredients}
              soldOut={soldOut}
              unitPrice={unitPrice}
              key={id}
            />
          );
        })}
      </article>
    </section>
  );
}

export async function loader(): Promise<MenuType[]> {
  const results = await getMenu();
  return results;
}

export default Menu;
