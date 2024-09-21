import { useState } from "react";
import { NavbarMenu } from "../components/navbar";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";

export const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <NavbarMenu />

      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <span className="p-input-icon-left" style={{ width: "60%" }}>
          <i className="pi pi-search" />
          <InputText
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar..."
            style={{ width: "100%" }}
          />
        </span>
      </div>

      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Card
          style={{
            width: "60%",
          }}
        >
          <div>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span>Amy Elsner</span>
          </div>
          <p className="m-0">
            Lorem Ipsum, es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>

          <div>
            <img src="../assets/like-icon.png" alt="" />
            <img src="../assets/comment-icon.png" alt="" />
            <img src="../assets/share-icon.png" alt="" />
          </div>
        </Card>
      </div>

      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Card
          style={{
            width: "60%",
          }}
        >
          <div>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span>Amy Elsner</span>
          </div>
          <p className="m-0">
            Lorem Ipsum, es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>

          <div>
            <img src="../assets/like-icon.png" alt="" />
            <img src="../assets/comment-icon.png" alt="" />
            <img src="../assets/share-icon.png" alt="" />
          </div>
        </Card>
      </div>

      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Card
          style={{
            width: "60%",
          }}
        >
          <div>
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span>Amy Elsner</span>
          </div>
          <p className="m-0">
            Lorem Ipsum, es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </p>

          <div>
            <img src="../assets/like-icon.png" alt="" />
            <img src="../assets/comment-icon.png" alt="" />
            <img src="../assets/share-icon.png" alt="" />
          </div>
        </Card>
      </div>
    </div>
  );
};
