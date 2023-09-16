document.addEventListener("DOMContentLoaded", function () {
	const pages = document.querySelectorAll(".page");
	const prevButton = document.getElementById("prevPage");
	const nextButton = document.getElementById("nextPage");
	let currentPage = 0;

	function showNumberedButtons() {
		const numbersDiv = document.querySelector(".pagination-numbers");
		for (let i = 0; i < pages.length; i++) {
			const btn = document.createElement("button");
			btn.className = "btn-num";
			btn.id = `numButton_${i + 1}`;
			btn.textContent = i + 1;
			btn.addEventListener("click", function (event) {
				currentPage = i;
				activateNumberedButtons(currentPage);
				showPage(currentPage);
				updateButtons();
			});
			numbersDiv.appendChild(btn);
		}
	}

	function activateNumberedButtons(pageNum) {
		const buttons = document.querySelectorAll(".btn-num");
		for (const btn of buttons) {
			if (btn.classList.contains("active")) {
				btn.classList.remove("active");
			}
		}

		document.getElementById(`numButton_${pageNum + 1}`).classList.add("active");
	}

	function showPage(pageNumber) {
		pages.forEach((page, index) => {
			if (index === pageNumber) {
				page.classList.add("active");
			} else {
				page.classList.remove("active");
			}
		});
	}

	function updateButtons() {
		prevButton.disabled = currentPage === 0;
		nextButton.disabled = currentPage === pages.length - 1;
	}

	prevButton.addEventListener("click", function () {
		if (currentPage > 0) {
			currentPage--;
			activateNumberedButtons(currentPage);
			showPage(currentPage);
			updateButtons();
		}
	});

	nextButton.addEventListener("click", function () {
		if (currentPage < pages.length - 1) {
			currentPage++;
			activateNumberedButtons(currentPage);
			showPage(currentPage);
			updateButtons();
		}
	});

	showPage(currentPage);
	showNumberedButtons();
	activateNumberedButtons(currentPage);
	updateButtons();
});


function CtrlA() {
  window.location.href = 'CtrlA/CtralA.html';
}

function CtrlT() {
  window.location.href = 'CtrlT/CtralT.html';
}


function popBalloon(element) {
  element.style.visibility = 'hidden';  // 風船を非表示にする
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById('message').textContent = messages[randomIndex];
}

function temp() {
  alert('実装中なのでちょっと待ってね♡');
}


