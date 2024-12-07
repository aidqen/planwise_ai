
  

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

  export function assignTasksToMonth(weeks, tasks) {
    const updatedWeeks = weeks.map(week =>
      week.map(day => {
        if (day.timestamp) {
          const dayDate = new Date(day.timestamp);
          const dayTasks = tasks.filter(task => {
            const taskDate = new Date(task.timestamp);
            return (
              taskDate.getFullYear() === dayDate.getFullYear() &&
              taskDate.getMonth() === dayDate.getMonth() &&
              taskDate.getDate() === dayDate.getDate()
            );
          });
          
          return { ...day, tasks: [...(day.tasks ?? []), ...dayTasks] };
        }
        return day; 
      })
    );
  
    return updatedWeeks;
  } 
  export function assignTasksToDay(day, tasks) {
    console.log('day:', day)
    if (day.timestamp) {
      const dayDate = new Date(day.timestamp);
      console.log('dayDate:', dayDate.getDate())
      const dayTasks = tasks.filter(task => {
        const taskDate = new Date(task.timestamp);
        console.log('taskDate:', taskDate.getDate())
        // console.log(taskDate.getFullYear(), dayDate.getFullYear(), taskDate.getMonth(), dayDate.getMonth(), taskDate.getDate(), dayDate.getDate());
        // console.log(taskDate.getFullYear() === dayDate.getFullYear() &&
        // taskDate.getMonth() === dayDate.getMonth() &&
        // taskDate.getDate() === dayDate.getDate());
        
        return (
          taskDate.getFullYear() === dayDate.getFullYear() &&
          taskDate.getMonth() === dayDate.getMonth() &&
          taskDate.getDate() === dayDate.getDate()
        );
      });
  
      return { ...day, tasks: [...(day.tasks ?? []), ...dayTasks] };
    }
    return day; // Return unchanged if no timestamp
  }