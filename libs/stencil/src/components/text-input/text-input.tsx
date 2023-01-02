import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'text-input',
  styleUrl: 'text-input.scss'
})
export class TextInput {

  @State() value: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlfor="input">
          Name:
          </label>
          <span class="input">
          <input id="input" type="text" value={this.value} onKeyDown={(event) => this.handleChange(event)} />
        
        <ds-button type="primary" size="small" width="auto" disabled={false} >Search</ds-button>
        </span>
      </form>
    );
  }
}