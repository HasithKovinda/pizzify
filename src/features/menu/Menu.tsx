import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useLoaderData from "../../hooks/useDataLoader";
import { getMenu } from "../../services/apiRestaurant";
import { MenuType } from "../../types/pizza";
import MenuItem from "./MenuItem";
import Model from "../../components/Model";
import { useNavigation } from "react-router-dom";

function Menu() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const data = useLoaderData<MenuType[]>();
  function openModel() {
    setIsModelOpen(true);
  }

  function handleClose() {
    setIsModelOpen(false);
  }
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return null;

  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-12 mt-10">
        <motion.article
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
          }}
          initial="initial"
          animate="animate"
        >
          {data.map((menu) => {
            const { id, name, imageUrl, ingredients, soldOut, unitPrice } =
              menu;
            return (
              <MenuItem
                id={id}
                name={name}
                imageUrl={imageUrl}
                ingredients={ingredients}
                soldOut={soldOut}
                unitPrice={unitPrice}
                handleModelOpen={openModel}
                key={id}
              />
            );
          })}
        </motion.article>
      </section>
      <AnimatePresence>
        {isModelOpen && <Model handleClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}

export async function loader(): Promise<MenuType[]> {
  const results = await getMenu();
  return results;
}

export default Menu;
