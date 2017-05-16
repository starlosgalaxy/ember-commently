export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');
  let geo = navigator.geolocation;
  app.deferReadiness();
  geo.getCurrentPosition((pos) => {
    let pt = pos.coords;
    let loc = {
      lat: pt.latitude,
      lng: pt.longitude
    };
    app.register('data:location', loc, {
      instantiate: false
    });
    app.advanceReadiness();
  });
}

export default {
  name: 'geo',
  initialize
};
