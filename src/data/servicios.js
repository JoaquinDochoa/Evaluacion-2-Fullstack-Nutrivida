import { imagenes } from '../assets/imagenes';
export const SERVICIOS = [
  {
    id: 1,
    codigo: "SRV-001",
    categoria: "Control de peso",
    stock: 10,
    nombre: "Control de peso",
    descripcion: "Plan de seguimiento nutricional para pérdida o mantención de peso, con control cada 15 días.",
    precio: 25000,
    imagen: imagenes.servicio1,
  },
  {
    id: 2,
    codigo: "SRV-002",
    categoria: "Nutrición deportiva",
    stock: 10,
    nombre: "Nutrición deportiva",
    descripcion: "Asesoría enfocada en rendimiento físico y recuperación para deportistas.",
    precio: 30000,
    imagen: imagenes.servicio2,
  },
  {
    id: 3,
    codigo: "SRV-003",
    categoria: "Enfermedades metabólicas",
    stock: 10,
    nombre: "Control de enfermedades metabólicas",
    descripcion: "Plan alimenticio para pacientes con diabetes, hipertensión u otras condiciones metabólicas.",
    precio: 28000,
    imagen: imagenes.servicio3,
  },
  {
    id: 4,
    codigo: "SRV-004",
    categoria: "Alimentación vegetariana",
    stock: 10,
    nombre: "Alimentación vegetariana / vegana",
    descripcion: "Planes balanceados 100% vegetales, adaptados a tus objetivos de salud.",
    precio: 26000,
    imagen: imagenes.servicio4,
  },
];
export const formatearPrecio = valor => valor.toLocaleString("es-CL", {style:"currency",currency:"CLP",maximumFractionDigits:0});
