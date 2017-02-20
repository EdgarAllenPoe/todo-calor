import Ember from 'ember';

export default Ember.Component.extend({



   didRender() {

 $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
  }



});
