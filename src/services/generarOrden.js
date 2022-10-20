const generarOrden = (nombre, apellido, telefono, email, direccion, cart, total) => {
  return {
   buyer: {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    direccion: direccion
    },
    items:cart,
    total: total,
    createdAt: new Date().toLocaleString()

}
}

export default generarOrden