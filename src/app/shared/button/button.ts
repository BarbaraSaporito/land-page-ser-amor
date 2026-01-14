import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

type ButtonVariant = 'primary' | 'accent' | 'warn' | 'outline';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButton],
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      mat-button
      [color]="color"
      [disabled]="disabled"
      [class.mat-stroked-button]="isOutlined"
    >
      {{ label }}
    </button>
  `
})
export class Button {
  @Input({ required: true }) label!: string;
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false;

  get color(): 'primary' | 'accent' | 'warn' | undefined {
    return this.variant === 'outline' ? undefined : this.variant;
  }

  get isOutlined(): boolean {
    return this.variant === 'outline';
  }
}
