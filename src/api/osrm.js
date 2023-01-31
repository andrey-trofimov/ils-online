export default function api(selectedRows) {
  const fromLat = selectedRows[0].fromLat;
  const fromLng = selectedRows[0].fromLng;

  const toLat = selectedRows[0].toLat;
  const toLng = selectedRows[0].toLng;

  const apiUrl = "https://router.project-osrm.org/route/v1/driving/";
  const options = "steps=false&geometries=geojson&overview=full";

  const url = `${apiUrl}${fromLng},${fromLat};${toLng},${toLat}?${options}`;

  return fetch(url);
}
