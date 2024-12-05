
  

export function getDaysOfMonth(year, monthIndex){
    const firstDay = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const weeks = [];

    let week = [];
  
    for (let i = 0; i < firstDay; i++) {
      week.push({ day: null, timestamp: null, tasks: [] });
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      week.push({ day, timestamp: new Date(year, monthIndex, day).getTime(), tasks: [] });
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
  
    if (week.length > 0) {
      while (week.length < 7) {
        week.push({ day: null, timestamp: null, tasks: [] });
      }
      weeks.push(week);
    }
  
    return weeks;
  }
  
  export function getDaysOfYear(year){
    const yearCalendar = [];
    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      yearCalendar.push(getDaysOfMonth(year, monthIndex));
    }
    return yearCalendar;
  }

  export function assignTasksToMonth(weeks, tasks ){
    tasks.forEach((task) => {
      const taskDate = new Date(task.timestamp);
      const taskYear = taskDate.getFullYear();
      const taskMonth = taskDate.getMonth();
      const taskDay = taskDate.getDate();
  
      for (let week of weeks) {
        for (let day of week) {
          if (day.timestamp) {
            const dayDate = new Date(day.timestamp);
            if (
              dayDate.getFullYear() === taskYear &&
              dayDate.getMonth() === taskMonth &&
              dayDate.getDate() === taskDay
            ) {
              day.tasks?.push(task);
            }
          }
        }
      }
    });
  
    return weeks;
  }