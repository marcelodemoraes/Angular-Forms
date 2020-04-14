import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };

  postError = false;
  postErrorMessage = '';

  userSettings: UserSettings = { ...this.originalUserSettings };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    if (form.valid) {
      this.dataService.postUserSettingsForms(this.userSettings).subscribe(
        (result) => console.log('success: ', result),
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

  onBlur(field: NgModel) {
    console.log('in blur: ', field.valid);
  }
}
