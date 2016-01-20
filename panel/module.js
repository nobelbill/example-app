define([
], function(angular, app)  {

  function nginxPanelDirective() {
    return {
      template: '<grafana-panel><h2>Nginx panel</h2></grafana-panel>',
    };
  }

  return {
    panel: nginxPanelDirective,
  };
});
