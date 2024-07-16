import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo-small.png";
import glovo from "../assets/images/glovo-logo.png";
import mrd from "../assets/images/mrd-logo.png";
import wolt from "../assets/images/wolt-logo.png";
import english from "../assets/images/english.png";
import serbian from "../assets/images/serbian.png";
import { useLanguageContext } from "../context/LanguageContext";
import i18n from "../i18n";

const BigOrdersModal = ({ t }) => {
  const [modalVisibility, setModalVisibility] = useState(
    JSON.parse(sessionStorage.getItem("bigOrdersModalVisibility")) || "visible"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { setCurrentLanguage } = useLanguageContext();

  return (
    // visibility wrapper
    <main className={modalVisibility}>
      {/* 100 width & height wrapper */}
      <section className="fixed w-[100vw] h-[100vh] bg-slate-400 z-10 opacity-95">
        {/* modal content wrapper - red field */}
        <div className="bg-[#fffeff] z-11 rounded-xl w-[96vw] md:w-[70vw] lg:w-[40vw] h-[96vh] md:h-[80vh] lg:h-[70vh] mt-[2vh] md:mt-[10vh] lg:mt-[15vh] mx-auto flex flex-col justify-between">
          {/* logo and toggle button bar section */}
          {/* logo */}
          <div className="flex justify-between items-center px-8 h-24 bg-[#fffeff] rounded-t-xl">
            <div>
              <span className="text-3xl font-bold">
                <img
                  src={logo}
                  className="w-12 rounded-full"
                  alt="company logo"
                />
              </span>
            </div>
            {/* end of logo */}

            {/* language buttons */}
            <section className="flex justify-center">
              <div className="w-6 h-6 mr-2 md:mr-4 lg:mr-8">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setCurrentLanguage("en");
                  }}
                  className="rounded-full"
                >
                  <img src={english} alt="english" />
                </button>
              </div>

              <div className="w-6 h-6 ml-2">
                <button
                  onClick={() => {
                    changeLanguage("sr");
                    setCurrentLanguage("sr");
                  }}
                  className="rounded-full"
                >
                  <img src={serbian} alt="serbian" />
                </button>
              </div>
            </section>
            {/* end of language buttons */}

            {/* close button */}
            <div>
              <button
                type="button"
                className="float-right"
                onClick={() => {
                  setModalVisibility("invisible");
                  sessionStorage.setItem(
                    "bigOrdersModalVisibility",
                    JSON.stringify("invisible")
                  );
                }}
              >
                <FaTimes className="fill-[#9e1918] h-8 w-8" />
              </button>
            </div>
          </div>
          {/* end of close button */}
          {/* end of logo and button section */}

          {/* text & image content section */}
          <div className="text-center mx-auto px-8 mb-4">
            <h1 className="text-[#9e1918] text-2xl font-extrabold">
              {t("BigOrderBannerNaslov")}
            </h1>
            <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
            <p className="mt-4 text-justify">{t("BigOrderBannerText")}</p>
            <p className="mt-4 text-justify text-xl"></p>
          </div>

          <div className="text-center mx-auto px-8">
            <div className="flex justify-center pb-8">
              <img src={glovo} alt="logo" className="w-12 h-12 mr-4" />
              <img src={mrd} alt="logo" className="w-12 h-12 mr-4" />
              <img src={wolt} alt="logo" className="w-12 h-12" />
            </div>
          </div>
          {/* end of text & image content section */}
        </div>
      </section>
    </main>
  );
};

export default withNamespaces()(BigOrdersModal);
