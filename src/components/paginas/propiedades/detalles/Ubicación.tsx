import { useContext } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import Button from "../../../ui/button/Button";
import styles from "./Inmueble.module.css";

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Ubicacion = ({ inmuebles }: Props) => {
  const { auth } = useContext(AuthContext);
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: inmuebles.inmueble.lat,
                lng: inmuebles.inmueble.lng,
              }}
              zoom={16}
            >
              <Marker
                position={{
                  lat: inmuebles.inmueble.lat,
                  lng: inmuebles.inmueble.lng,
                }}
                icon="/images/icons/marcador-ubicacion.png"
              />
            </GoogleMap>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`${styles.inmuebleTitleUbicacion} mb-4`}>
              {inmuebles.inmueble.titulo}
            </div>
            <div className="mb-4">
              <div className="row">
                <div className="col-12 mb-4">
                  <span className={`${styles.inmuebleTipo2} me-4`}>
                    <img
                      src="/images/icons/deatails-icons/ubicacion.png"
                      alt="..."
                      width={25}
                    />
                    {inmuebles.inmueble.direccion}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.inmuebleContent}>
              {inmuebles.inmueble.descripcion
                ? inmuebles.inmueble.descripcion
                : "Aún no hay descripción para este inmueble"}
            </div>
          </div>
          <div className="col-12 text-center my-5">
            {auth.uid ? <Button titulo="Añadir a favoritos" /> : null}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Ubicacion;
