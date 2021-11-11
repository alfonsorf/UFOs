// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody= d3.select("body");

// Create function to build table and clears data first
function buildTable(data) {
  tbody.html("");

// Create for loop to append rows to the table
  data.forEach((dataRow) => {
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow)forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// Create handleClick function
function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see it a date was entered and filter using that date
  if (date) {
    
    //Apply filter to the table data to keep only the rows where the datetime value matches the filter
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Rebuild the table using filtered data. If no date, filteredData will just be original table
  buildTable(filteredData);
}

// Tells D3 to run handleClick function when a filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);