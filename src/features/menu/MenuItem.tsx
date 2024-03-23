import { type MenuType } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({
  name,
  imageUrl,
  ingredients,
  soldOut,
  unitPrice,
}: MenuType) {
  return (
    <div className="flex items-start gap-3">
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "grayscale" : ""}  rounded-lg `}
      />
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-1">
          <p className="text-2xl tracking-wider font-semibold">{name}</p>
          <div className="space-x-2">
            <span className="text-md text-zinc-600 italic text-wrap">
              {ingredients.join(", ")}
            </span>
          </div>
          <p className="text-3xl text-primary">{formatCurrency(unitPrice)}</p>
        </div>
        {soldOut ? (
          <p className="uppercase text-slate-400 text-2xl">sold out</p>
        ) : (
          <button className="btn px-2 py-2 text-white rounded-xl w-32">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
