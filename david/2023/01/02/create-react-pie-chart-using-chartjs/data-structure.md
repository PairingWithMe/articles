## Install packages

* [chart.js](https://www.npmjs.com/package/chart.js)
* [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)

```bash
npm install chart.js react-chartjs-2
```

## Data Structure

We are going to mock the API response with the data structure.
The data structure is an array of genres; the `name`, `count`, and `color` represent each genre. 
It's essential to have the color. Otherwise, the whole chart will use the same color.

e.g.:

```json
{
  "name": "Comedy",
  "count": 29,
  "color": "red"
}
```

The following are the JSON data for classes *ALPHA* and *BETA*:

* genres-class-alpha.json
* genres-class-beta.json