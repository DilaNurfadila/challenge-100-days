const clearBtn = document.querySelector("#clear");

function onClear() {
  //   alert("Clear items");
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  //   itemList.innerHTML = "";

  //   items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Javascript Event Listener
// clearBtn.onclick = function () {
//   alert("Clear Items 2");
// };

// clearBtn.onclick = function () {
//   console.log("Clear Items 2");
// };

// addEventListener
// clearBtn.addEventListener('click', function() {
//     alert('Clear Items 3')
// })

// clearBtn.addEventListener('click', () => alert('Clear Items 4'))
// clearBtn.addEventListener('click', () => console.log('Clear Items 4'))
clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
