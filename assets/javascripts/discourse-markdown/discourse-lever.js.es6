import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-lever'] = true;
});

export function setup(helper) {
  helper.whiteList([
    'div.project-title',
    'div.subject',
    'div.subtitle',
    'div.text',
    'div.button',
    'span.user',
    'span.tag',
    'a.link'
  ]);
}
