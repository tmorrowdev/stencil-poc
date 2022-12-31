import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'ds-modal',
  styleUrl: 'ds-modal.scss',
  scoped: true
})
export class DsModal {
  @State() isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  render() {
    return (
      <div>
        {this.isOpen ? (
          <div class="modal">
            <div class="modal-content">
              <button onClick={() => this.close()}>Close</button>
              <slot />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
