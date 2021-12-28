interface Location {
  lng: number;
  lat: number;
}

interface Inmuebles {
  _id: string;
  titulo: string;
  precio: number;
  categoria: string;
}

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  img: string;
  role: string;
  estado: boolean;
  online: boolean;
  google: boolean;
  perfilEmpresarial: string;
  telefonoOficina: string;
  telefonoPersonal: string;
  nombreInmobiliaria: string;
  direccionFisica: string;
  coordenadas: Location;
  facebookpage: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  logo: string;
  inmuebles: Inmuebles[];
}
