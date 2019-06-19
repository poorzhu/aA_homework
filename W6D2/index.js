const $form = $("#cool-thing-form");
$form.on("submit", event => {
    event.preventDefault();

    const $input = $("#cool_thing");
    const coolThing = $input.val();
    $input.val("");

    $("ul.cool-things").append($("<li></li>").text(coolThing));
});

const $listItems = $("li");
$listItems.on("mouseover", event => {
    const currentTarget = event.currentTarget;
    const $currentTarget = $(currentTarget);
    alert($currentTarget.text());
});