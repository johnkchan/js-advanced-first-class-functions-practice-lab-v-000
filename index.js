// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  let driversCopy = drivers.slice(0);
  driversCopy.sort(function compare(a, b) {
    return a.revenue - b.revenue;
  });
  return driversCopy;
}