import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slider = document.querySelector('.overflow-x-auto');

    if (nextButton && prevButton && slider) {
      nextButton.addEventListener('click', () => {
        slider.scrollBy({ left: 200, behavior: 'smooth' });
      });

      prevButton.addEventListener('click', () => {
        slider.scrollBy({ left: -200, behavior: 'smooth' });
      });
    }
  }
}
