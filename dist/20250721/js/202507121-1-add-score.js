let dom = {
    addScoreBtn: document.querySelector("#add-score-btn"),
    scoreTable: document.querySelector("#score-table"),
};

console.log(dom);

dom.addScoreBtn.addEventListener("click", () => {
    Swal.fire({
        title: "確定要加分嗎?",
        text: "加完分後無法復原!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確定",
        cancelButtonText: "取消",
    }).then((result) => {
        if (result.isConfirmed) {
            let scores = dom.scoreTable.querySelectorAll(
                "tbody tr td:nth-child(3)"
            );
            scores.forEach((score) => {
                let value = score.textContent;
                let newValue = +value + 10;
                if (newValue > 100) {
                    newValue = 100;
                }
                score.textContent = newValue;
            });
        }
    });
});
