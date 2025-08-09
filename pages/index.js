import ButtonComponent from "./components/buttonComponent";
import CheckboxComponents from "./components/checkboxComponents";

export default function Home() {
  const pages = [
    { id: 1, name: "Page 1", selected: false, isDisabled: false },
    { id: 2, name: "Page 2", selected: false, isDisabled: true },
    { id: 3, name: "Page 3", selected: false, isDisabled: false },
    { id: 4, name: "Page 4", selected: false, isDisabled: false },
  ];

  const checkAll = () => {
    const checkAll = document.getElementById("checkAll");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.disabled) return;
      checkbox.checked = checkAll.checked;
    });
  };

  const removeCheckAll = () => {
    const checkAll = document.getElementById("checkAll");
    checkAll.checked = false;
  };

  const doneAction = () => {
    console.log("Done action");
    const selectedPages = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedPages.push(
          checkbox.parentElement.querySelector("label").textContent
        );
      }
    });
    if (selectedPages.length === 0) {
      alert("Please select at least one page");
      return;
    }
    alert(`Selected pages: ${selectedPages.join(", ")}`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="p-4 w-80 shadow-lg rounded-lg">
        <CheckboxComponents
          id="checkAll"
          index={0}
          title="Check All"
          onChange={checkAll}
          isDisabled={false}
          value={false}
        />
        {pages.map((page, index) => (
          <CheckboxComponents
            key={page.id}
            id={`page-${index}`}
            index={index}
            title={page.name}
            onChange={removeCheckAll}
            isDisabled={page.isDisabled}
            value={page.selected}
          />
        ))}
        <ButtonComponent onClick={doneAction}>Done</ButtonComponent>
      </div>
    </div>
  );
}
