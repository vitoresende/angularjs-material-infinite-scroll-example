class AppCtrl {
  constructor($timeout) {
    'ngInject';
    var ctrl = this;

    this.getValue = 'TEST';

    this.infiniteItems = {
      numLoaded_: 0,
      toLoad_: 0,
      value_: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
      ],

      // Required.
      getItemAtIndex: function (index) {
        if (index > this.numLoaded_) {
          this.fetchMoreItems_(index);
          return null;
        }

        return this.value_[index] ? this.value_[index] : 'test';
      },

      // Required.
      // For infinite scroll behavior, we always return a slightly higher
      // number than the previously loaded items.
      getLength: function () {
        return this.numLoaded_ + 5;
      },

      fetchMoreItems_: function (index) {
        // For demo purposes, we simulate loading more items with a timed
        // promise. In real code, this function would likely contain an
        // $http request.

        if (this.toLoad_ < index) {
          this.toLoad_ += 20;
          $timeout(angular.noop, 300).then(
            angular.bind(this, function () {
              this.numLoaded_ = this.toLoad_;
            })
          );
        }
      },
    };
  }
}

export default AppCtrl;
