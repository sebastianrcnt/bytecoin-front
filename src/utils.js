export const WeatherMap = [
  {
    range: { start: 0, end: 0.4 },
    iconClassNames: [
      "wi-ligntning",
      "wi-storm-showers",
      "wi-thunderstorm",
      "wi-tsunami"
    ]
  },
  {
    range: { start: 0.45, end: 0.475 },
    iconClassNames: ["wi-rain", "wi-windy"]
  },
  {
    range: { start: 0.475, end: 0.525 },
    iconClassNames: ["wi-cloudy-windy", "wi-sleet", "wi-fog"]
  }, // Windy
  {
    range: { start: 0.525, end: 0.55 },
    iconClassNames: ["wi-day-cloudy"]
  },
  {
    range: { start: 0.55, end: 1 },
    iconClassNames: ["wi-day-sunny"]
  }
];

export function getClassName(label) {
  for (let map of WeatherMap) {
    if (map.range.start < label < map.range.end) {
      var index = Math.floor(Math.random() * map.iconClassNames.length);
      return map.iconClassNames[index];
    }
  }
}
