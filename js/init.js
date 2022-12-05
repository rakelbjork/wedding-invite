const timer = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("August, 04 2023 15:00:00"),
    backgroundColor: "rgba(0,0,0,.03)",
    foregroundColor: "rgba(#fff)",
});

timer.startTimer(); 