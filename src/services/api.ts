import type { Employee, Product, Incident } from "../types"

const URL_USERS = 'https://jsonplaceholder.typicode.com/users'
const URL_PRODUCTS = 'https://fakestoreapi.com/products?limit=6'
const URL_TODOS = 'https://jsonplaceholder.typicode.com/todos?_limit=8'

interface UsuarioApi{
  id: number
  name: string
  email: string
  address: {
    city: string
  }
}

export async function getPersonal(): Promise<Employee[]> {
  const res = await fetch(URL_USERS)
  if (!res.ok) throw new Error(`Error ${res.status} al cargar el personal.`)
  const datos: UsuarioApi[] = await res.json()
  return datos.map((u) => ({ 
    id: u.id, 
    name: u.name, 
    email: u.email, 
    city: u.address.city 
  }))
}

export async function getInventario(): Promise<Product[]> {
  const res = await fetch(URL_PRODUCTS)
  if (!res.ok) throw new Error(`Error ${res.status} al cargar el inventario.`)
  const datos: Product[] = await res.json()
  return datos
}

export async function getIncidencias() : Promise <Incident[]> {
  const res = await fetch(URL_TODOS)
  if (!res.ok) throw new Error (`Error ${res.status} al cargar las incidencias.`)
  const datos: Incident[] = await res.json()
  return datos
}