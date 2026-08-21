# Support assets

Put partner logos and payment QR images in this directory, then enable their
entries in `src/data/supportConfig.js`.

Current published assets:

- `siqishu-logo-dark.svg` — 思齐塾 logo for light surfaces
- `siqishu-logo-light.svg` — 思齐塾 logo for dark surfaces
- `wechat.png` — original WeChat appreciation-code image; keep its white background and PNG format

Suggested filenames for future entries include `sustaining-partner-logo.png`
and `alipay-qr.png`.

Use tightly cropped PNG, WebP, or existing brand-provided SVG assets. Before
enabling a payment method, confirm that the recipient name shown by the payment
app matches the `recipientHint` in the configuration.
