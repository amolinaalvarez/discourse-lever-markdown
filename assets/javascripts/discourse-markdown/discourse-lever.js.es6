import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-lever'] = true;
});

export function setup(helper) {
  helper.whiteList([
    'div[id=highlight]',
    'advisor-request',
    'advisor-request[title]',
    'advisor-request.elided'
  ]);
}
