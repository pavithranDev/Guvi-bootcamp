let bike = {
  company: "honda",
  model: "2010",
  engine: "109CC",
  tyre: "tubeless",
};

for (const key in bike) {
  console.log(bike[key]);
}
