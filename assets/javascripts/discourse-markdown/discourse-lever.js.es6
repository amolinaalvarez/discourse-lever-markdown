import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-lever'] = true;
});

export function setup(helper) {
  helper.whiteList([
    'div.border',
    'div.project-title',
    'div.subject',
    'div.subtitle',
    'div.text',
    'div.button',
    'span.user',
    'span.tag',
    'span.completed',
    'span.discarded'
    'a.link'
  ]);
}
