import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission

    // Example logic to handle the form submission
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });

    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
    
    // Optionally show a success message or redirect
  }
}
