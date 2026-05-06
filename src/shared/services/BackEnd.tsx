export interface cardInfo {
  alias:string,
  areas_principales:string[]
}

export interface MipymeEjemplo {
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


const base_url = `http://127.0.0.1:8000`

// Simulated fetching function that will be in another file in the future.
// We export the function so that it can be called from our hooks or components.
export async function fetchResultadoDiagnostico(id_mipyme:string){
  const rta_modelo = await fetch(base_url + `/modelo_matematico/${id_mipyme}`);
  const data_modelo = await rta_modelo.json();
  return data_modelo
}

export async function post_mipyme(mipyme:MipymeEjemplo){
  console.log(mipyme);
  const response = await fetch(base_url + `/mipymes/`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mipyme),
  });
  const result = await response.json();
  console.log(result);
  return result
}

