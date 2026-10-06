document.addEventListener("DOMContentLoaded", () => {
    const yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    const searchInput = document.getElementById("subjectSearch");
    const cards = Array.from(document.querySelectorAll(".subject-card"));
    const resultCount = document.getElementById("resourceCount");
    const emptyState = document.getElementById("emptyState");

    if (searchInput && cards.length) {
        searchInput.addEventListener("input", (event) => {
            const query = event.target.value.trim().toLowerCase();
            let visibleCount = 0;

            cards.forEach((card) => {
                const data = (card.dataset.search || card.textContent || "").toLowerCase();
                const isVisible = data.includes(query);
                card.classList.toggle("hidden-card", !isVisible);
                visibleCount += Number(isVisible);
            });

            if (resultCount) {
                resultCount.textContent = query
                    ? `Showing ${visibleCount} of ${cards.length} subjects`
                    : `Showing all ${cards.length} subjects`;
            }

            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
        });
    }
});
