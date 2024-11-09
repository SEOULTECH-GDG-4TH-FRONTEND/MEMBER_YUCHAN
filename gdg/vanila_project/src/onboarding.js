
document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".main_2_subDesc", {
        speed: 100,
        loop: true
    })
    .type("카드 클릭!, 원하는 멤버에게 바로 질문하기!")
    .pause(2000)
    .delete()
    .go();
});
