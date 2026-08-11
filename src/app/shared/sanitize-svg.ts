/**
 * Scrub an SVG string before it is handed to bypassSecurityTrustHtml.
 *
 * Amenity/course/event icons are stored server-side and rendered with
 * `[innerHTML]` after `bypassSecurityTrustHtml`, which switches Angular's
 * built-in sanitizer off completely. An SVG carrying `<script>`, an
 * `onload=` handler or a `javascript:` href therefore executed in the admin
 * session. This allow-lists the markup instead of trusting it wholesale.
 *
 * Returns '' when the input is not parseable as SVG, so callers can fall back
 * to rendering nothing rather than raw markup.
 */

const ALLOWED_TAGS = new Set([
  'svg', 'g', 'path', 'circle', 'ellipse', 'line', 'polygon', 'polyline',
  'rect', 'defs', 'title', 'desc', 'tspan', 'text', 'use', 'symbol',
  'linearGradient', 'radialGradient', 'stop', 'clipPath', 'mask', 'pattern',
]);

const ALLOWED_ATTRS = new Set([
  'd', 'cx', 'cy', 'r', 'rx', 'ry', 'x', 'y', 'x1', 'x2', 'y1', 'y2',
  'width', 'height', 'viewbox', 'fill', 'fill-rule', 'fill-opacity',
  'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin',
  'stroke-dasharray', 'stroke-opacity', 'opacity', 'transform', 'points',
  'class', 'id', 'style', 'offset', 'stop-color', 'stop-opacity',
  'gradientunits', 'gradienttransform', 'patternunits', 'clip-path',
  'xmlns', 'preserveaspectratio', 'text-anchor', 'font-size', 'font-family',
  'dx', 'dy', 'mask',
]);

export function sanitizeSvg(raw: string | null | undefined): string {
  if (!raw || typeof raw !== 'string') {
    return '';
  }

  let doc: Document;
  try {
    doc = new DOMParser().parseFromString(raw, 'image/svg+xml');
  } catch {
    return '';
  }

  if (doc.querySelector('parsererror')) {
    return '';
  }

  const root = doc.documentElement;
  if (!root || root.nodeName.toLowerCase() !== 'svg') {
    return '';
  }

  scrub(root);
  return new XMLSerializer().serializeToString(root);
}

function scrub(node: Element): void {
  // Walk a copy: the live list shifts as elements are removed.
  for (const child of Array.from(node.children)) {
    if (!ALLOWED_TAGS.has(child.nodeName)) {
      // Drops <script>, <foreignObject>, <animate>, <iframe>, <a>, …
      child.remove();
      continue;
    }
    scrub(child);
  }

  for (const attr of Array.from(node.attributes)) {
    const name = attr.name.toLowerCase();
    const value = attr.value;

    // Every on* handler, plus anything not on the allow-list.
    if (name.startsWith('on') || !ALLOWED_ATTRS.has(name)) {
      node.removeAttribute(attr.name);
      continue;
    }

    // style can still smuggle a url() or an expression.
    if (name === 'style' && /url\s*\(|expression|javascript:/i.test(value)) {
      node.removeAttribute(attr.name);
      continue;
    }

    if (/^\s*(javascript|data|vbscript):/i.test(value)) {
      node.removeAttribute(attr.name);
    }
  }
}
