define([
  'app/features/panel/panel'
], function(panel) {

  function NginxPanel($scope, $injector) {
    panel.PanelCtrl.call(this, $scope, $injector);
  }

  NginxPanel.template = '<h2>nginx!</h2>';
  NginxPanel.prototype = Object.create(panel.PanelCtrl.prototype);
  NginxPanel.prototype.constructor = NginxPanel;

  return {
    PanelCtrl: NginxPanel
  };
});
