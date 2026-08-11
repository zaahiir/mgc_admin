import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';
import {
  SystemSettingsService,
  SystemSetting
} from '../../common-service/system-settings/system-settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  loading = false;
  saved = false;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SystemSettingsService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadSettings();
  }

  private initializeForm(): void {
    this.settingsForm = this.formBuilder.group({
      SMTP_HOST: [''],
      SMTP_PORT: [''],
      SMTP_USERNAME: [''],
      SMTP_PASSWORD: [''],
      SMTP_USE_TLS: ['true'],
      SMTP_FROM_EMAIL: [''],
      TINYMCE_API_KEY: ['']
    });
  }

  private async loadSettings(): Promise<void> {
    try {
      this.loading = true;
      const response = await this.settingsService.getSettings().toPromise();
      if (response && response.data) {
        const values: Record<string, string> = {};
        for (const item of response.data as SystemSetting[]) {
          values[item.key] = item.value;
        }
        this.settingsForm.patchValue(values);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load settings'
      });
    } finally {
      this.loading = false;
    }
  }

  async onSubmit(): Promise<void> {
    this.saved = false;
    const payload = this.settingsForm.value;

    try {
      this.loading = true;
      const response = await this.settingsService.updateSettings(payload).toPromise();

      if (response && response.code === 1) {
        this.saved = true;
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Settings updated successfully'
        });
      } else {
        throw new Error(response?.message || 'Failed to update settings');
      }
    } catch (error: any) {
      console.error('Error updating settings:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to update settings'
      });
    } finally {
      this.loading = false;
    }
  }
}
