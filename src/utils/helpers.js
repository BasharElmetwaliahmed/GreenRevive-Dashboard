import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

const { VITE_APP_VAPID_KEY } = import.meta.env;

export async function requestPermission() {
  //requesting permission using Notification API
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: VITE_APP_VAPID_KEY,
    });

    //We can send token to server
    console.log("Token generated : ", token);
  } else if (permission === "denied") {
    //notifications are blocked
    alert("You denied for the notification");
  }
}










// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function objectToFormData(obj) {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

export const headers = {
  Accept: "application/json",
  Authorization: `Bearer ${
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : ""
  }`,
};
