import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss'],
})
export class DynamicIslandComponent implements OnInit {

  dynamicIslandState: number | 1 | 2 | 3 | 4 = 1;

  constructor(
    private platform: Platform,
  ) {
    if (this.platform.is('capacitor')) {
      StatusBar.hide();
    }
  }

  ngOnInit() { }

  expanded() {

    if (this.dynamicIslandState === 1) {
      this.dynamicIslandState = 2;
    } else if (this.dynamicIslandState === 2) {
      this.dynamicIslandState = 3;
    } else if (this.dynamicIslandState === 3) {
      this.dynamicIslandState = 4;
      setTimeout(() => this.dynamicIslandState = 1, 500);
    }

  }

}
