// jsdom does not implement the <dialog> modal APIs, so provide a minimal shim
// that matches the behavior the card relies on.
HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement): void {
  this.setAttribute('open', '');
};

HTMLDialogElement.prototype.close = function (this: HTMLDialogElement): void {
  if (!this.hasAttribute('open')) return;
  this.removeAttribute('open');
  this.dispatchEvent(new Event('close'));
};
