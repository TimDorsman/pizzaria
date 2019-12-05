import $ from 'jquery';

export function toggleShoppingList() {
    $('.cartList').fadeToggle();
    $('.cartListOverlay').toggle();
    $('body').toggleClass('no-scroll');
}