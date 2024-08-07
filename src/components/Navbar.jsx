import { NavLink, Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram, FaBars } from "react-icons/fa";
import logo from "../assets/images/logo-small.png";
import { useNavigationContext } from "../context/NavigationContext";
import { useLanguageContext } from "../context/LanguageContext";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import english from "../assets/images/english.png";
import serbian from "../assets/images/serbian.png";

const Navbar = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const {
    setSidebarStatus,
    rotateMenuButton,
    setRotateMenuButton,
    setRotateSidebarButton,
  } = useNavigationContext();

  const { setCurrentLanguage } = useLanguageContext();

  return (
    <nav className="px-8 h-24 bg-[#9e1918] text-white drop-shadow-2xl">
      <section className="flex justify-between max-w-[1200px] mx-auto">
        <span className="h-24">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-20 mt-2" />
          </NavLink>
        </span>

        {/* navigation links */}
        <div className="hidden lg:block w-[400px] justify-between">
          <ul className="h-24 w-full flex justify-between items-center gap-6 text-xl">
            <li>
              <NavLink
                to="/"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#d75b3f] font-bold text-3xl"
                //     : "hover:text-[#d75b3f]  font-bold"
                // }
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fff] hover:text-[#d75b3f] font-bold text-3xl"
                    : "text-[#fff] hover:text-[#d75b3f] font-bold"
                }
              >
                {t("Početna")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#d75b3f] font-bold text-3xl"
                //     : "hover:text-[#d75b3f]  font-bold"
                // }
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fff] hover:text-[#d75b3f] font-bold text-3xl"
                    : "text-[#fff] hover:text-[#d75b3f] font-bold"
                }
              >
                {t("Meni")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#d75b3f] font-bold text-3xl"
                //     : "hover:text-[#d75b3f]  font-bold"
                // }
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fff] hover:text-[#d75b3f] font-bold text-3xl"
                    : "text-[#fff] hover:text-[#d75b3f] font-bold"
                }
              >
                {t("Kontakt")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // className={({ isActive }) =>
                //   isActive
                //     ? "text-[#d75b3f] font-bold text-3xl"
                //     : "hover:text-[#d75b3f]  font-bold"
                // }
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fff] hover:text-[#d75b3f] font-bold text-3xl"
                    : "text-[#fff] hover:text-[#d75b3f] font-bold"
                }
              >
                {t("O nama")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* language buttons section */}
        <div className="w-content gap-4 hidden lg:flex">
          <button
            onClick={() => {
              changeLanguage("en");
              setCurrentLanguage("en");
            }}
          >
            <img src={english} alt="english" className="w-6" />
          </button>

          <button
            onClick={() => {
              changeLanguage("sr");
              setCurrentLanguage("sr");
            }}
          >
            <img src={serbian} alt="serbian" className="w-6" />
          </button>
        </div>

        {/* social links */}
        <div>
          <ul className="h-24 items-center gap-4 hidden lg:flex text-[#ffffef]">
            <li>
              <Link
                to="https://www.facebook.com/profile.php?id=61553023137564"
                target="_blank"
              >
                <FaFacebook size="1.5rem" className="hover:fill-[#d75b3f]" />
              </Link>
            </li>
            <li>
              <Link to="https://www.tiktok.com/@aigo_eat" target="_blank">
                <FaTiktok size="1.5rem" className="hover:fill-[#d75b3f]" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/aigo_eat" target="_blank">
                <FaInstagram size="1.5rem" className="hover:fill-[#d75b3f]" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex h-24 items-center lg:hidden">
          <button
            type="button"
            onClick={() => {
              setSidebarStatus("block");
              setRotateMenuButton("animate-[spin_0.4s_1]");
              setRotateSidebarButton("");
            }}
          >
            <FaBars className={`fill-[#fff] h-8 w-8 ${rotateMenuButton}`} />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default withNamespaces()(Navbar);
