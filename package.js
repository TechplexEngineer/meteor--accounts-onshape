Package.describe({
  name: 'techplex:accounts-onshape',
  version: '0.0.1',
  summary: 'OAuth2 for Onshape',
  git: 'https://github.com/TechplexEngineer/meteor-accounts-onshape',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('techplex:onshape@0.0.1', ['client', 'server']);

  api.addFiles('accounts-onshape_login_button.css', 'client');

  api.addFiles('accounts-onshape.js');
});
