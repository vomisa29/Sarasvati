"use client";

import { MipymeEjemplo, post_mipyme } from "@/shared/services/BackEnd";

export async function postMipyme(mipyme: MipymeEjemplo) {
    try {
      const data = await post_mipyme(mipyme);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      }
    }
  }
