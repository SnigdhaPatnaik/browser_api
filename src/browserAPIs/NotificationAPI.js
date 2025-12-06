export  function NotificationAPI() {
  const notify = () => {
    Notification.requestPermission().then(() => {
      new Notification("Hello from Browser API!");
    });
  };
  return <button onClick={notify}>Show Notification</button>;
}
