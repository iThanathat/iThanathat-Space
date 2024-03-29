import Head from "next/head";
import { NextRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
  router: NextRouter;
};

const Layout: React.FC<LayoutProps> = ({ children, router }) => {
  const [theme, setTheme] = useState<"dark" | "corporate">("corporate");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme === "dark") {
        setTheme("dark");
      } else {
        setTheme("corporate");
      }
    } else {
      localStorage.setItem("theme", "corporate");
    }
  }, []);

  const onToggleTheme = () => {
    setTheme(theme === "dark" ? "corporate" : "dark");
    localStorage.setItem("theme", `${theme === "dark" ? "corporate" : "dark"}`);
  };

  return (
    <div data-theme={theme} className="overflow-scroll">
      <Head>
        <title>{"iThanathat's Space"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="iThanathat's Personal Space" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
      <NavBar
        path={router.asPath}
        theme={theme}
        onToggleTheme={() => onToggleTheme()}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
