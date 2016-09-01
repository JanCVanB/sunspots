Vue.filter('wordifyMonth', getMonthWord)
var vm = new Vue({
  el: '#app',
  data: {
    imageStyle: {
      'max-width': '100%',
      width: '960px'
    },
    possibleDays: _.range(1, 32),
    possibleMonths: _.range(1, 13),
    possibleYears: _.range(1917, 2017),
    selectedDate: {
      day: 10,
      month: 9,
      year: 1992
    }
  },
  computed: {
    imageUrl: function() {
      return (
        'ftp://howard.astro.ucla.edu/pub/obs/drawings/' +
        (this.selectedDate.year < 2014 ? (this.selectedDate.year + '/') : '') +
        'dr' +
        twoDigitString(this.selectedDate.year) +
        twoDigitString(this.selectedDate.month) +
        twoDigitString(this.selectedDate.day) + '.jpg'
      )
    }
  }
})

function getMonthWord(monthNumber) {
  switch (monthNumber) {
    case 1:
      return 'January'
    case 2:
      return 'February'
    case 3:
      return 'March'
    case 4:
      return 'April'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
    default:
      return 'None'
  }
}

function twoDigitString(number) {
  var numberString = '0' + number.toString()
  return numberString.slice(numberString.length - 2, numberString.length)
}
