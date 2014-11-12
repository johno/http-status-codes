import Ember from 'ember';

export default Ember.Component.extend({
  list: [],
  attributes: 'id',
  filterQuery: '',
  strictMatch: false,
  listClass: '',
  placeholder: 'Search...',
  autofocus: false,

  filteredList: function() {
    var attrs = this.get('formattedAttributes');
    var query = this.get('filterQuery').trim();
    var strictMatch = this.get('strictMatch');

    return this.get('list').filter(function(object) {
      if (Ember.isEmpty(query)) {
        return true;
      }

      var filterMatch = false;

      attrs.forEach(function(attribute) {
        if (strictMatch) {
          if (isMatch(object.get(attribute.trim()), query)) {
            filterMatch = true;
          }
        } else {
          if (isLike(object.get(attribute.trim()), query)) {
            filterMatch = true;
          }
        }
      });

      return filterMatch;
    });
  }.property('list', 'filterQuery'),

  formattedAttributes: function() {
    return this.get('attributes').split(',');
  }.property('attributes')
});

function isMatch(one, two) {
  return one.toString() === two.toString();
}

function isLike(one, two) {
  return one.toString().indexOf(two.toString()) !== -1;
}
