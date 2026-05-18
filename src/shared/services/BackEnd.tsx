export interface cardInfo {
  alias:string,
  areas_principales:string[],
  Id:string,
}

export interface Mipyme {
  "Apoyo creativo":string[],
  "Años operando":string,
  "Claridad actual":string,
  "Dificultades previas":string,
  "Empleados":string,
  "Empresa":string,
  "Experiencia previa":string;
  "Materiales listos":string[],
  "Objetivo":string,
  "Plazo":string[],
  "Presencia digital":string,
  "Presupuesto":string,
  "Sector":string,
  "Top 3 al elegir":string[]
}

export interface Creativo {
  "% >2 ajustes":string[],
  "Alias":string,
  "Area principal":string[],
  "Años exp":string[],
  "Claridad briefs":string[],
  "Criterios para aceptar":string,
  "Experiencia con Mipymes":string[],
  "Fricciones frecuentes":string,
  "Herramientas":string,
  "Modalidad":string[],
  "Portafolio":string,
  "Proyectos simultáneos":string[],
  "Que espera de Sarasvati":string,
  "Rango precio":string[],
  "Sectores con experiencia":string[]
}


const base_url = `https://sarasvatiback-1.onrender.com`

export async function fetchResultadoDiagnostico(id_mipyme:string){
  const rta_modelo = await fetch(base_url + `/modelo_matematico/${id_mipyme}`);
  const data_modelo = await rta_modelo.json();
  return data_modelo
}

export async function post_mipyme(mipyme:Mipyme){
  const response = await fetch(base_url + `/mipymes/`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mipyme),
  });
  const result = await response.json();

  return result
}

export async function post_creativo(creativo:Creativo){
  const response = await fetch(base_url + `/creativos/`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creativo),
  });
  const result = await response.json();

  return result
}

