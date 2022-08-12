async function foo() {
    let res = await fetch("https://api.openbrewerydb.org/breweries");
    let result = await res.json();
    console.log(result);

    for (let i = 0; i < result.length; i++) {
        var div = document.createElement("div");
        div.style.color =
            div.style.fontsize = "32px";
        div.innerHTML = `<div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">${result[i].name}</h5>
          <p class="card-text1">${result[i].brewery_type}</p>
          <p class="card-text2">${result[i].address_2}</p>
          <p class="card-text3">${result[i].phone}</p>
          <a href="website_url" class="btn btn-primary">website_url</a>
        </div>
      </div>
      `
        document.body.append(div)

    }
}
foo();