import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userId: number | null = null;
  userType: string | null = null;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.userType = this.authService.getUserType();
    this.profileForm = this.formBuilder.group({
      username: [this.authService.getUsername() || '', [Validators.required, Validators.minLength(3)]],
      email: [this.authService.getEmail() || '', [Validators.required, Validators.email]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.profileForm.invalid) return;

    this.loading = true;
    try {
      const response = await this.authService.updateProfile(this.profileForm.value).toPromise();
      if (response && response.code === 1) {
        this.authService.updateStoredProfile(response.data.username, response.data.email);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Profile updated successfully'
        });
      } else {
        throw new Error(response?.message || 'Failed to update profile');
      }
    } catch (error: any) {
      console.error('Error updating profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error?.error?.message || error?.message || 'Failed to update profile'
      });
    } finally {
      this.loading = false;
    }
  }
}
