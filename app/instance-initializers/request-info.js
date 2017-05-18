export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');

  let fbService = appInstance.lookup('service:fastboot');
  let shoebox = fbService.get('shoebox');
  let shoeboxStore = shoebox.retrieve('request-data');
  let ua = null;
  // if rendering on fastboot server make the request
  if (fbService.get('isFastBoot')) {
    let headers = fbService.get('request.headers');
    ua = headers.get('user-agent');
    // console.log('USER AGENT:', ua);
    appInstance.register('data:request', {
      userAgent: ua
    }, {
      instantiate: false
    });
    if (!shoeboxStore) {
      shoeboxStore = {};
      shoebox.put('request-data', shoeboxStore);
    }
    shoeboxStore.userAgent = ua;
  } else if (shoeboxStore) {
      // rendering on the client having been served w/ fastboot
    ua = shoeboxStore.userAgent;
    appInstance.register('data:request', {
      userAgent: ua
    }, {
      instantiate: false
    });
  } // else do nothing. No ua possible w/ static hosting
}

export default {
  name: 'request-info',
  initialize
};
