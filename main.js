var vm = new Vue({
  el: '#app',
  data: {
    imageStyle: {
      width: '960px'
    },
    date: {
      day: 10,
      month: 9,
      year: 1992
    }
  },
  computed: {
    imageUrl: function() {
      return (
        'ftp://howard.astro.ucla.edu/pub/obs/drawings/' +
        this.date.year + '/dr' +
        twoDigitString(this.date.year) + twoDigitString(this.date.month) +
        twoDigitString(this.date.day) + '.jpg'
      )
    }
  }
})

function twoDigitString(number) {
  var numberString = '0' + number.toString()
  return numberString.slice(numberString.length - 2, numberString.length)
}
