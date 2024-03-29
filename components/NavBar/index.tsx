import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as SolidIcon from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/future/image";
import Link from "next/link";

type NavBarProps = {
  theme: "dark" | "corporate";
  onToggleTheme: () => void;
  path: string;
};

type NavLinkProps = {
  testId?: string;
  children: React.ReactNode;
  href: string;
  path: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  path,
  children,
  testId,
}) => {
  const active = path === href;
  return (
    <div
      data-testid={testId}
      className={`h-full flex items-center ${active ? "active" : "inactive"}`}
    >
      <Link href={href} passHref>
        {children}
      </Link>
    </div>
  );
};

const NavBar: React.FC<NavBarProps> = ({ onToggleTheme, theme, path }) => {
  return (
    <div
      className={
        "w-full bg-base-100 bg-opacity-75 backdrop-blur-sm fixed z-10 h-12"
      }
    >
      <div className="flex justify-between items-center h-full">
        <Link href="/" passHref>
          <div className="flex items-center">
            <>
              <Image
                src="/images/AnimojiMe.png"
                alt="iThanathat"
                width={30}
                height={30}
                className="logo-image"
              />
              <p
                className={`content-normal ml-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                } cursor-pointer`}
              >
                iThanathat
              </p>
            </>
          </div>
        </Link>
        <div className="flex h-full items-center justify-evenly w-80">
          <div className="h-full">
            <NavLink
              testId="experiences-path-link"
              path={path}
              href="/experiences"
            >
              <p
                className={`content-normal ${
                  theme === "dark" ? "text-white" : "text-black"
                } cursor-pointer mx-2`}
              >
                Experiences
              </p>
            </NavLink>
          </div>
          <div>
            <Link
              href={"https://github.com/iThanathat/iThanathat-Space"}
              passHref
            >
              <a target="_blank">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className={`text-primary-content ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  />
                  <p
                    className={`ml-2 content-normal ${
                      theme === "dark" ? "text-white" : "text-black"
                    } cursor-pointer hover:underline`}
                  >
                    Source
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div
          data-testid="toggle-theme-button"
          onClick={() => onToggleTheme()}
          className="ml-6 cursor-pointer"
        >
          <FontAwesomeIcon
            data-testid={theme === "corporate" ? "moon-button" : "sun-button"}
            icon={theme === "corporate" ? SolidIcon.faMoon : SolidIcon.faSun}
            size="2x"
            className={`content-normal ${
              theme === "dark" ? "text-white" : "text-black"
            } transition ease-in duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
