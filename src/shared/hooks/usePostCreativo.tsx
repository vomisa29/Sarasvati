"use client";

import { useState, useEffect } from "react";
import { Creativo, post_creativo } from "@/shared/services/BackEnd";


export function usePostCreativo(creativo: Creativo) {
    const [Id, setId] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const loadId = async () => {
        try {
  
          setIsLoading(true);
          setError(null);
          const data = await post_creativo(creativo);
          setId(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Ocurrió un error desconocido.");
          }
        } finally {
          setIsLoading(false);
        }
      };
  
      loadId();
    }, []);
    return { Id, isLoading, error };
}