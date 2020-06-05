import client from '../database/MySQLClient.ts';
import IMaterial from '../models/IMaterial.ts';

const addMaterial = (mate : IMaterial) => {
  const results = client.execute(`
    INSERT INTO materials (
      mate_name
    ) VALUES (
      ?
    );
  `, [mate.mate_name]);

  return results;
}

const MateRepository = {
  addMaterial,
}

export default MateRepository;