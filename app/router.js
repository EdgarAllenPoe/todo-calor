import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
//this.route('index', {path: 'inicio'});
  this.route('inicio');
  this.route('quienes-somos');
  this.route('nuestros-productos');
  this.route('servicio-tecnico');
  this.route('contactenos');
});

export default Router;
