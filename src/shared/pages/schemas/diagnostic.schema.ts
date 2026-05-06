import { z } from "zod";

/**
 * Opciones de cada pregunta
 */
export const QuestionSchema = z.object({
  l: z.string(), // label
  o: z.array(z.string()).optional(), // opciones
  type: z.boolean().optional(),
  top3: z.boolean().optional(),
  multi: z.boolean().optional(),  
});

/**
 * Paso del formulario
 */
export const StepSchema = z.object({
  title: z.string(),
  sub: z.string(),
  qs: z.array(QuestionSchema),
});

/**
 * Todo el diagnóstico
 */
export const DiagnosticSchema = z.array(StepSchema);// Se relaciona con DiagnosticProps

/**
 * Respuestas del usuario
 * clave: "stepIndex-questionIndex"
 * valor: array de strings seleccionados
 */
export const AnswersSchema = z.record(
  z.string(),
  z.union([
    z.string().min(1, "El nombre es obligatorio"),
    z.array(z.string())
  ])
);

let Diagnostic = {};
const respuestas_esperadas = {};

export function SetDiagnostic(diagnostic){
    Diagnostic = diagnostic;
    
    let conteo = 0;
    for (const pagina in diagnostic){
        const preguntas = diagnostic[pagina]["qs"]

        
        for (const pregunta in preguntas){
            conteo++;
        }
        respuestas_esperadas[pagina]=conteo;
    }
}

/**
 * Validación adicional (reglas de negocio)
 */
export const AnswersWithRulesSchema = AnswersSchema.superRefine((answers, ctx) => {
  Object.entries(answers).forEach(([key, value]) => {

    const pagina = Number(key[0]);
    const pregunta = Number(key[2]);
    const multi_pregunta = Diagnostic[pagina]["qs"][pregunta]["multi"] ?? false;

    const num_respuestas_actual = Object.keys(answers).length;

    if (key === "0-0" && typeof value === "string" && value.trim() === "") {
      ctx.addIssue({
        code: "custom",
        message: "Debes ingresar tu nombre"
      });
    }

    if (num_respuestas_actual < respuestas_esperadas[pagina]) {
      ctx.addIssue({
        code: "custom",
        message: `Debes responder todas las preguntas`,
      });
    }

    if (value.length > 3 && !multi_pregunta && key !== "0-0") {
      ctx.addIssue({
        code: "custom",
        message: `Máximo 3 opciones permitidas en ${key}`,
      });
    }
  });
});

export type DiagnosticType = z.infer<typeof DiagnosticSchema>;
export type AnswersType = z.infer<typeof AnswersSchema>;