import useLoaderData from "../../hooks/useDataLoader";
import { getMenu } from "../../services/apiRestaurant";
import { MenuType } from "../../types/pizza";

function Menu() {
  const data = useLoaderData<MenuType[]>();
  return <div>Menu</div>;
}

export async function loader(): Promise<MenuType[]> {
  const results = await getMenu();
  return results;
}

export default Menu;
