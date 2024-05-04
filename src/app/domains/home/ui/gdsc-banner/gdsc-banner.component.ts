import { Component } from '@angular/core';

@Component({
  selector: 'gdsc-banner',
  standalone: true,
  imports: [],
  templateUrl: './gdsc-banner.component.html',
  styleUrl: './gdsc-banner.component.scss',
})
export class GdscBannerComponent {
  desktopBannerUrl: String =
    'https://firebasestorage.googleapis.com/v0/b/nass-eu.appspot.com/o/gdsc%2FGDSC23-Landing%20Page%20Header-1440x500.png?alt=media&token=e3d05d3f-7fe3-4ae9-8acf-bebcf068ebcd';

  mobileBannerUrl: String =
    'https://firebasestorage.googleapis.com/v0/b/nass-eu.appspot.com/o/gdsc%2FGDSC23-DevSite-640x500.png?alt=media&token=bfdc17c1-56e6-419e-ba1c-d07164f603f6';

  onClick(): void {
    window.open(
      'https://gdsc.community.dev/elizade-university-ilara-mokin-nigeria/',
      '_blank'
    );
  }
}
