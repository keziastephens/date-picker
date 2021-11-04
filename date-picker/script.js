console.log('linked');
const submitBtn = document.querySelector('#submitBtn');




function userSubmit(event){
    event.preventDefault();

    // created an array of months of the year
    let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let msDay = 1000 * 3600 * 24;

    // how to get data from the date input
    const checkInDate = new Date($('#checkInDate').val());
    const checkOutDate = new Date($('#checkOutDate').val());
    console.log(checkInDate);

    // how to get the individual data of day, month and year
    let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();

    // looked at how to join the data - join function turns
    // an array into a string
    let checkInDetails = [checkInDay,checkInMonth,checkInYear].join('/');
    let checkOutDetails = [checkOutDay,checkOutMonth,checkOutYear].join('/');
    console.log(checkInDetails);
    console.log(checkOutDetails);
    console.log(checkInDate, checkOutDate);


    if(checkInDate == 'Invalid Date'){
        console.log('enter check in date');
    }

    // conditions for user
    // if ( (checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date') ){
    //     alert('please enter check in and check out dates');
    // } else if( checkInDate.getTime() >= checkOutDate.getTime() ){
    //     alert('check out day cant be before check in date');
    // }

   //    calculate the difference
   let difference = checkOutDate.getTime() - checkInDate.getTime();
//    console.log(difference);
   //converts time to a day value from ms
   let dayDifference = difference/msDay;
   console.log(dayDifference);

   let valueOfPeople = ($("#valueOfPeople").val());
   console.log(valueOfPeople)
    
};










submitBtn.addEventListener('click', userSubmit);