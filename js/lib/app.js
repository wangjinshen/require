require.config({
    baseUrl: "./js",
    paths: {
        "a": "lib/modul"
    }
});


require(["a"], function(a) {
  console.log(a.a(12,2))
});