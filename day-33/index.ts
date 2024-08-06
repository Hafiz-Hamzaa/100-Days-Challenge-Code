 
///////------------ Day 33 Coding Challenge------------///////////
//=================>>>>>>>> Task 97
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0"); 
    const month = String(now.getMonth() + 1).padStart(2, "0"); 
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  console.log(getCurrentDateFormatted()); 

  //======================>>>>>>>>>> Task 98
  // Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); 
    const diff = newYear.getTime() - today.getTime(); 
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
    return days;
  }
  
  console.log(daysUntilNewYear() + " days until New Year.");

  //==============>>>>>>>> Task 99
function getNextBirthday(month: number, day: number): Date {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); 
    if (birthday < today) {
      birthday.setFullYear(year + 1);
    }
    return birthday;
  }
  const nextBirthday = getNextBirthday(11, 21); 
  console.log("Next birthday on:", nextBirthday.toLocaleDateString());