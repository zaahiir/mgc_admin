import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  Optional
} from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * Automatically expands a <textarea> to fit its content.
 *
 * Usage:
 *   <textarea formControlName="..." rows="2" autoResize></textarea>
 *
 * - Empty value  -> 2 rows tall
 * - With content -> grows to scrollHeight so no internal scrollbar appears
 * - Recalculates on input, programmatic FormControl changes (valueChanges),
 *   window resizes, and when the element is (re)rendered with existing data.
 */
@Directive({
  selector: 'textarea[autoResize]',
  standalone: true
})
export class AutoResizeDirective implements AfterViewInit, OnDestroy {
  private readonly element: HTMLTextAreaElement;
  private twoRowHeight = 0;
  private valueChangesSub: { unsubscribe: () => void } | null = null;
  private resizeTimer: ReturnType<typeof setTimeout> | null = null;
  private attachTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    elementRef: ElementRef<HTMLTextAreaElement>,
    @Optional() private readonly ngControl: NgControl,
    private readonly ngZone: NgZone
  ) {
    this.element = elementRef.nativeElement;

    // prevent a vertical scrollbar from appearing inside the textarea
    this.element.style.overflowY = 'hidden';
    this.element.style.resize = 'none';
    this.element.style.boxSizing = 'border-box';
  }

  ngAfterViewInit(): void {
    this.cacheTwoRowHeight();
    this.resize();
    this.attachValueChanges();
  }

  ngOnDestroy(): void {
    this.valueChangesSub?.unsubscribe();
    if (this.resizeTimer !== null) clearTimeout(this.resizeTimer);
    if (this.attachTimer !== null) clearTimeout(this.attachTimer);
  }

  @HostListener('input')
  onInput(): void {
    this.resize();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.scheduleResize();
  }

  /**
   * Subscribe to the Angular FormControl so programmatic updates
   * (patchValue/setValue/API responses) also trigger a resize.
   */
  private attachValueChanges(): void {
    if (this.valueChangesSub) {
      return;
    }

    const control = this.ngControl?.control;

    if (control) {
      this.ngZone.runOutsideAngular(() => {
        this.valueChangesSub = control.valueChanges.subscribe(() => {
          this.scheduleResize();
        });
      });
    } else {
      // The control may not be wired yet when the element renders
      // (e.g. directives inside a FormArray). Retry on the next tick.
      this.attachTimer = setTimeout(() => this.attachValueChanges(), 0);
    }
  }

  private scheduleResize(): void {
    // defer so Angular has written the new value into the DOM element
    if (this.resizeTimer !== null) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => this.resize(), 0);
  }

  private resize(): void {
    if (this.twoRowHeight === 0) {
      this.cacheTwoRowHeight();
    }

    const el = this.element;

    // reset to measure the natural content height
    el.style.height = 'auto';

    if (!el.value || el.value.trim() === '') {
      el.style.height = `${this.twoRowHeight}px`;
    } else {
      el.style.height = `${el.scrollHeight}px`;
    }
  }

  /**
   * Calculate the height for 2 rows from the textarea's actual
   * line-height, padding and borders (box-sizing: border-box).
   */
  private cacheTwoRowHeight(): void {
    const cs = getComputedStyle(this.element);
    const lineHeight = parseFloat(cs.lineHeight);
    const rowHeight =
      Number.isFinite(lineHeight) && lineHeight > 0
        ? lineHeight
        : (parseFloat(cs.fontSize) || 16) * 1.5;

    const paddingTop = parseFloat(cs.paddingTop) || 0;
    const paddingBottom = parseFloat(cs.paddingBottom) || 0;
    const borderTop = parseFloat(cs.borderTopWidth) || 0;
    const borderBottom = parseFloat(cs.borderBottomWidth) || 0;

    this.twoRowHeight =
      rowHeight * 2 + paddingTop + paddingBottom + borderTop + borderBottom;
  }
}
