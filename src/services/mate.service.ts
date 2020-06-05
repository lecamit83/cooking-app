import IMaterial from "../models/IMaterial.ts"
import MateRepository from "../repository/mate.ts";

export const addMaterial = async (mate : IMaterial) => {
  try {
    const results = await MateRepository.addMaterial(mate);
    return results;
  } catch (error) {
    throw error;
  }
}