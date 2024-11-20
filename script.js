const taskDetails = document.getElementById("newTask");
const priorityValue = document.getElementById("priority");
const submitBtn = document.getElementById("add");
const unorderdListLowPriority = document.getElementById("unorderedLowPriority");
const unorderdListMediumPriority = document.getElementById(
  "unorderedMediumPriority"
);
const unorderdListHighPriority = document.getElementById(
  "unorderedHighPriority"
);

submitBtn.addEventListener("click", function () {
  const listDetails = document.createElement("li");
  listDetails.className = "list-group-item";
  listDetails.innerHTML = `<p class="d-flex justify-content-between align-items-center fw-medium mb-0">${taskDetails.value} <button class="btn btn-danger" onClick="deletePriority(this)">Delete</button></p>`;

  if (priorityValue.value === "low") {
    unorderdListLowPriority.appendChild(listDetails);
  } else if (priorityValue.value === "medium") {
    unorderdListMediumPriority.appendChild(listDetails);
  } else {
    unorderdListHighPriority.appendChild(listDetails);
  }
});

function deletePriority(delBtn) {
  const listItem = delBtn.parentElement.parentElement;

  listItem.remove();
}
