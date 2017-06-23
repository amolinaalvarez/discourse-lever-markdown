import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-lever'] = true;
});

export function setup(helper) {
  helper.whiteList([
    'div.ticket-border',
    'div.ticket-project-title',
    'div.ticket-subject',
    'div.ticket-subtitle',
    'div.ticket-text',
    'div.ticket-button',
    'span.ticket-user',
    'span.ticket-tag',
    'span.ticket-completed',
    'span.ticket-discarded',
    'a.ticket-link'
  ]);
}
