import { useEffect } from "react";

const availableTimesByDate = {
  "2024-02-10": ["14:00", "15:00", "16:00"],
  "2024-02-11": ["10:00", "11:00", "12:00"],
  "2024-02-12": ["14:00", "15:00", "16:00"],
  "2024-02-13": ["10:00", "11:00", "12:00"],
  "2024-02-14": ["14:00", "15:00", "16:00"],
  "2024-02-15": ["10:00", "11:00", "12:00"],
  "2024-02-16": ["14:00", "15:00", "16:00"],
  "2024-02-17": ["10:00", "11:00", "12:00"],
  "2024-02-18": ["14:00", "15:00", "16:00"],
  "2024-02-19": ["10:00", "11:00", "12:00"],
  "2024-02-20": ["14:00", "15:00", "16:00"],
  "2024-02-21": ["10:00", "11:00", "12:00"],
  "2024-02-22": ["14:00", "15:00", "16:00"],
  "2024-02-23": ["10:00", "11:00", "12:00"],
  "2024-02-24": ["14:00", "15:00", "16:00"],
  "2024-02-25": ["10:00", "11:00", "12:00"],
  "2024-02-26": ["14:00", "15:00", "16:00"],
  "2024-02-27": ["10:00", "11:00", "12:00"],
  "2024-02-28": ["10:00", "11:00", "12:00"],
  "2024-03-01": ["14:00", "15:00", "16:00"],
  "2024-03-02": ["10:00", "11:00", "12:00"],
};

let reservationsArray = [];

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        setLocalStrorage(formData);
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

function setLocalStrorage(data) {
  reservationsArray.push(data);
  localStorage.setItem("reservation", JSON.stringify(reservationsArray));
}

function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem("reservation"));
  if (!data) return;
  reservationsArray = data;
}

export { fetchAPI, submitAPI, getLocalStorage };
