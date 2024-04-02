// Import the query function from the db.config.js file
const conn = require("../config/db.config");
// get vehicle by id
async function getVehicleById(vehicle_id) {
  const query = `
    SELECT vehicle_info.*, vehicle_identifier.vehicle_email, vehicle_identifier.vehicle_phone_number, vehicle_identifier.vehicle_added_date, vehicle_identifier.vehicle_hash
    FROM vehicle_info

    LEFT JOIN vehicle_identifier ON vehicle_info.vehicle_id = vehicle_identifier.vehicle_id
    WHERE vehicle_info.vehicle_id = ?
  `;
  const rows = await conn.query(query, [vehicle_id]);
  return rows;
}
module.exports = {getVehicleById};
