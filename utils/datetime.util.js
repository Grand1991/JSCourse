let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

class DateTimeUtil {

    
    today() {
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    setYear(year){
       return mm + '/' + dd + '/' + year;     
    }

    daysDifference(dateLeft, dateRight){
        const diffTime = Math.abs(dateRight.getTime() - dateLeft.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays;
    }
}

module.exports = new DateTimeUtil();