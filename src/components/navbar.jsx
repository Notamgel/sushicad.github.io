import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";

export const NavbarMenu = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/dashboard",
    },
    {
      label: "Grupos",
      icon: "pi pi-search",
      url: "/grupos",
    },
    {
      label: "Networking",
      icon: "pi pi-envelope",
      url: "/networking",
    },
  ];

  const end = (
    <div className="flex align-items-center gap-2">
      <span className="font-bold">Amy Elsner</span>
      <a href="/profile">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
      </a>
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
};
