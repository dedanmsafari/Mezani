import camelize from "camelize";
import { host, isMock } from "../../utils/env";
export const locationRequest = (searchTerm) => {
  //http urls dont work on android must use live to work..might show blank screen on android and local firebase dont run on https hence use live
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
    (response) => {
      return response.json();
    }
  );
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lng, lat } = geometry.location;

  return { lng, lat, viewport: geometry.viewport };
};
