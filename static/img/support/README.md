# Support assets

Put partner logos and payment QR images in this directory, then enable their
entries in `src/data/supportConfig.js`.

Suggested filenames are already present in the configuration examples:

- `strategic-partner-logo.png`
- `sustaining-partner-logo.png`
- `alipay-qr.png`
- `wechat-qr.png`

Use tightly cropped PNG, WebP, or existing brand-provided SVG assets. Before
enabling a payment method, confirm that the recipient name shown by the payment
app matches the `recipientHint` in the configuration.

