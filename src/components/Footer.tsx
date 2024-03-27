import {
  BiLocationPlus,
  BiEnvelopeOpen,
  BiPhone,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import Logo from "./Logo";
function Footer() {
  return (
    <footer className="bg-zinc-900 mt-20 px-10">
      <section className="max-w-screen-2xl mx-auto ">
        <article className="md:flex md:items-start md:gap-7 md:flex-wrap lg:justify-between lg:gap-4 py-16 ">
          <div className="md:max-w-xl">
            <Logo type="dark" />
            <h1 className="text-2xl sm:text-5xl text-white font-extrabold mb-5 mt-3">
              The Best Restaurants in Your Home
            </h1>
            <p className="text-slate-300">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </p>
          </div>
          <div className="mt-5 lg:mt-0">
            <h2 className="text-zinc-500 text-3xl font-bold mb-5">Menu</h2>
            <ul className="text-slate-300 text-xl tracking-wide space-y-4">
              <li>
                <a href="#">Home &rarr;</a>
              </li>
              <li>
                <a href="#">Menu &rarr;</a>
              </li>
              <li>
                <a href="#">About &rarr;</a>
              </li>
              <li>
                <a href="#">Contact &rarr;</a>
              </li>
            </ul>
          </div>
          <div className="mt-5 lg:mt-0 divide-rose-50">
            <h2 className="text-zinc-500 text-3xl font-bold mb-5">Contact</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-slate-300">
                <BiLocationPlus className="text-lg" />
                <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <BiEnvelopeOpen className="text-lg" />
                <p>pizzify@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <BiPhone className="text-lg" />
                <p>+01 342342 42423</p>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-4xl">
                <div className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center">
                  <BiLogoFacebook />
                </div>
                <div className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center">
                  <BiLogoInstagram />
                </div>
                <div className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center">
                  <BiLogoTwitter />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="border-b-2 border-b-gray-400 w-full mb-8"></div>
        <div className="md:flex md:items-center md:justify-between w-full ">
          <p className="text-slate-100 md:mb-8">
            Copyright © {new Date().getFullYear()}. Pizzify All rights
            reserved.
          </p>
          <div className="text-slate-100 md:mb-8">
            <span>Privacy Policy </span>
            <span>Terms & Services</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
