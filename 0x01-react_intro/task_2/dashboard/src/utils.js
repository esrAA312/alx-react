/* A function to return the current year 
*/

function getFullYear() {
  const thisYear = new Date();
  return thisYear.getFullYear();
}

function getFooterCopy(isIndex) {
  if(isIndex) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

function getLatestNotification() {
  const lastnotify = <strong>Urgent requirement</strong> + - complete by EOD;
  return lastnotify;
}

export {getFullYear, getFooterCopy, getLatestNotification};
