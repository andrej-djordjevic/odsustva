export function paintField(date: number, vacationType: string) {
  const Day = Number(date);
  const elements = document.querySelectorAll(
    `.x${Day}.y${5}`
  ) as NodeListOf<HTMLElement>;
  elements.forEach((el) => {
    if (vacationType == "vacation") {
      el.style.backgroundColor = "var(--vacationColor)";
      el.textContent = "V";
    }
    if (vacationType == "personalLeave") {
      el.style.backgroundColor = "var(--personalLeaveColor)";
      el.textContent = "P";
    }
    if (vacationType == "sickDays") {
      el.style.backgroundColor = "var(--sickDaysColor)";
      el.textContent = "S";
    }
    if (vacationType == "workingRemotely") {
      el.style.backgroundColor = "var(--workingRemotelyColor)";
      el.textContent = "R";
    }
    if (vacationType == "slava") {
      el.style.backgroundColor = "var(--slavaColor)";
      el.textContent = "Slava";
    }
  });
}
export function unPaintField(date: number) {
  const Day = Number(date);
  const elements = document.querySelectorAll(
    `.x${Day}.y${5}`
  ) as NodeListOf<HTMLElement>;
  elements.forEach((el) => {
    {el.style.backgroundColor = "var(--tableBackground)";el.textContent="";}
  });
}
