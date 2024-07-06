const convertDateToLocal = (fechaYHora, zonaHoraria = "es-Es") => {
  const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
  };
  
  const fecha = new Date(fechaYHora);
  return fecha.toLocaleDateString(zonaHoraria, options);
  
}

export default convertDateToLocal