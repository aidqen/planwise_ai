export const userEx = {
  "userId": "12345",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "tasks": [
    {
      "id": "task1",
      "type": "event",
      "title": "Team Meeting",
      "description": "Monthly team meeting",
      "timestamp": 1733420400000, // December 6, 2024, 10:00 AM
      "finishTimestamp": 1733424000000, // One hour after start
      "recurrence": {
        "type": "monthly",
        "onDay": [6]
      },
      "importance": "high",
      "bg": "#22d3ee",
      "logo": "team_meeting_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Prepare presentation",
          "isDone": false
        },
        {
          "id": "subtask2",
          "title": "Send agenda",
          "isDone": true
        }
      ]
    },
    {
      "id": "task2",
      "type": "task",
      "title": "Grocery Shopping",
      "description": "Weekly grocery run for household supplies",
      "timestamp": 1733506800000, // December 7, 2024, 12:00 PM
      "finishTimestamp": 1733510400000, // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Saturday"]
      },
      "importance": "medium",
      "bg": "#f9a8d4",
      "logo": "grocery_shopping_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Make a list",
          "isDone": true
        },
        {
          "id": "subtask2",
          "title": "Check pantry",
          "isDone": false
        },
        {
          "id": "subtask3",
          "title": "Check fridge",
          "isDone": false
        }
      ]
    },
    {
      "id": "task3",
      "type": "habit",
      "title": "Morning Jog",
      "description": "Daily morning jog around the park",
      "timestamp": 1733184000000, // December 3, 2024, 6:00 AM
      "finishTimestamp": 1733187600000, // One hour after start
      "recurrence": {
        "type": "daily"
      },
      "importance": "high",
      "bg": "#EA6C70ff",
      "logo": "morning_jog_logo.png",
      "isDone": false,
      "subtasks": []
    },
    {
      "id": "task4",
      "type": "event",
      "title": "Doctor Appointment",
      "description": "Yearly health check-up",
      "timestamp": 1733858400000, // December 12, 2024, 3:00 PM
      "finishTimestamp": 1733862000000, // One hour after start
      "recurrence": {
        "type": "yearly",
        "onDay": [12]
      },
      "importance": "high",
      "bg": "#ff6961",
      "logo": "doctor_appointment_logo.png",
      "isDone": false,
      "subtasks": []
    },
    {
      "id": "task5",
      "type": "task",
      "title": "Finish Project Report",
      "description": "Complete the pending project report for the client",
      "timestamp": 1733944800000, // December 13, 2024, 10:00 AM
      "finishTimestamp": 1733948400000, // One hour after start
      "recurrence": {
        "type": "none"
      },
      "importance": "high",
      "bg": "#98FB98",
      "logo": "project_report_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Compile research data",
          "isDone": false
        },
        {
          "id": "subtask2",
          "title": "Write introduction",
          "isDone": false
        },
        {
          "id": "subtask3",
          "title": "Review for accuracy",
          "isDone": false
        }
      ]
    },
    {
      "id": "task6",
      "type": "habit",
      "title": "Drink Water",
      "description": "Drink 8 glasses of water",
      "timestamp": 1733184000000, // December 3, 2024, 9:00 AM
      "finishTimestamp": 1733187600000, // One hour after start
      "recurrence": {
        "type": "daily"
      },
      "importance": "low",
      "bg": "#76b5c5",
      "logo": "water_logo.png",
      "isDone": false,
      "subtasks": []
    },
    {
      "id": "task7",
      "type": "event",
      "title": "Client Call",
      "description": "Discuss project status and next steps with the client",
      "timestamp": 1733764800000, // December 11, 2024, 2:00 PM
      "finishTimestamp": 1733768400000, // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Wednesday"]
      },
      "importance": "high",
      "bg": "#8a2be2",
      "logo": "client_call_logo.png",
      "isDone": false,
      "subtasks": []
    },
    {
      "id": "task8",
      "type": "task",
      "title": "Laundry",
      "description": "Do the laundry for the week",
      "timestamp": 1734038400000, // December 16, 2024, 11:00 AM
      "finishTimestamp": 1734042000000, // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Monday"]
      },
      "importance": "medium",
      "bg": "#f3a683",
      "logo": "laundry_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Sort clothes",
          "isDone": false
        },
        {
          "id": "subtask2",
          "title": "Wash whites",
          "isDone": false
        },
        {
          "id": "subtask3",
          "title": "Fold and organize",
          "isDone": false
        }
      ]
    },
    {
      "id": "task9",
      "type": "habit",
      "title": "Read a Book",
      "description": "Read at least 20 pages of a book",
      "timestamp": 1733184000000, // December 3, 2024, 8:00 PM
      "finishTimestamp": 1733187600000, // One hour after start
      "recurrence": {
        "type": "daily"
      },
      "importance": "medium",
      "bg": "#ffcccb",
      "logo": "reading_logo.png",
      "isDone": false,
      "subtasks": []
    }
  ]
}
