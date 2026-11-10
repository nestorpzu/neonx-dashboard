export type Seccion = 'Personal' | 'Inventario' | 'Incidencias'

export interface Employee {
    id: number
    name: string
    email: string
    city: string
}

export interface Product {
    id: number
    title: string
    price: number
    category: string
    image: string
}

export interface Incident {
    id: number
    title: string
    completed: boolean
}