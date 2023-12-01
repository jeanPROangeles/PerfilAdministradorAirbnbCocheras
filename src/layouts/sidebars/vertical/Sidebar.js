import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Clientes",
    href: "/ui/clientes",
    icon: "bi-people"
  },
  {
    title: "Hosts",
    href: "/ui/hosts",
    icon: "bi-people"
  },

  {
    title: "Cocheras",
    href: "/ui/cocheras",
    icon: "bi-truck"
  },
  {
    title: "Dispute",
    href: "/ui/dispute",
    icon: "bi-exclamation-circle"
  },


];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
       
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
