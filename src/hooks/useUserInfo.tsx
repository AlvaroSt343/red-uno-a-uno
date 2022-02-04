import { useContext, useEffect, useState } from "react";
import { InmuebleContext } from "../context/inmuebles/InmuebleContext";
import { production } from "../credentials/credentials";
import { InmuebleUsuario } from "../interfaces/CrearInmuebleInterface";
import { HistorialResp, PedidosUsuario } from "../interfaces/Historial";
import { Usuario } from "../interfaces/UserInterface";

const devURL = "http://localhost:8080/api";
const baseURL = "https://prueba-red1a1.herokuapp.com/api";

export const useUserInfo = (uid: string | undefined | null) => {
  const [user, setUser] = useState<Usuario>();
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    setLoading(true);

    const data = await fetch(baseURL + "/usuarios/" + uid);
    const resp = await data.json();

    setLoading(false);
    setUser(resp);
  };

  useEffect(() => {
    getUserInfo();
  }, [uid]);

  return { user, loading };
};

export const useUserInmuebles = (
  uid: string | undefined | null,
  desde?: number
) => {
  const [inmuebles, setInmuebles] = useState<InmuebleUsuario>();
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);
  const { orden } = useContext(InmuebleContext);

  const obtenerInmueblesDeUsuario = async () => {
    const data = await fetch(
      `${baseURL}/inmuebles/usuario/${uid}?orden=${orden}&desde=${desde}&limite=20`
    );
    const resp = await data.json();
    setInmuebles(resp);
    setCargando(false);
    // console.log(inmuebles);
    setTotal(resp.total);
  };

  useEffect(() => {
    obtenerInmueblesDeUsuario();
  }, [inmuebles?.inmueblesUsuario, orden]);

  return { inmuebles, cargando, total };
};

export const useHistorial = (uid: string | undefined | null, desde: number) => {
  const [historial, setHistorial] = useState<HistorialResp>();
  const [isLoading, setIsLoading] = useState(true);

  const obtenerHistorial = async () => {
    const resp = await fetch(
      `${baseURL}/historial/usuario/${uid}?desde=${desde}&limite=15`
    );
    const data = await resp.json();

    setHistorial(data);

    setIsLoading(false);
  };

  useEffect(() => {
    obtenerHistorial();
  }, [desde, historial]);

  return { historial, isLoading };
};

export const useHistorialPagos = (
  uid: string | undefined | null,
  desde: number
) => {
  const [historialPago, setHistorialPago] = useState<PedidosUsuario[]>([]);
  const [cargando, setCargando] = useState(true);
  const [total, setTotal] = useState(0);

  const obtenerHistorialPagos = async () => {
    const resp = await fetch(
      `${production}/pedidos/usuarios/${uid}?desde=${desde}&limite=15`
    );
    const data = await resp.json();

    setTotal(data.total);
    setHistorialPago(data.pedidosUsuario);
    setCargando(false);
  };

  useEffect(() => {
    obtenerHistorialPagos();
  }, [desde]);

  return { historialPago, cargando, total };
};
