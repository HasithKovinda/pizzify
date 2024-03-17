type LinkProps = {
  name: string;
};

function Link({ name }: LinkProps) {
  return (
    <a
      href="#"
      className="block uppercase text-lg py-3  tracking-wide hover:bg-primary hover:text-gray-100 hover:px-7 transition-all duration-200"
    >
      {name}
    </a>
  );
}

export default Link;
