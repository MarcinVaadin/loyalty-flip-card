import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ha-card {
    height: 100%;
    overflow: hidden;
  }

  .face {
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 100%;
    min-height: 128px;
    margin: 0;
    padding: 18px 20px;
    border: 0;
    border-radius: inherit;
    text-align: left;
    font-family: var(--ha-font-family-body, Roboto, 'Noto Sans', sans-serif);
    color: var(--loyalty-ink, var(--primary-text-color, #212121));
    background-color: var(
      --loyalty-accent,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(0, 0, 0, 0.18));
    cursor: pointer;
    transition: filter 150ms ease;
  }

  .face:hover {
    filter: brightness(1.06);
  }

  .face:active {
    filter: brightness(0.95);
  }

  .face:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -3px;
  }

  .face__head {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .badge {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.22);
  }

  .badge img {
    width: 100%;
    height: 100%;
    padding: 5px;
    object-fit: contain;
  }

  .badge ha-icon {
    --mdc-icon-size: 28px;
    color: inherit;
  }

  .face__copy {
    min-width: 0;
  }

  .face__title {
    overflow: hidden;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .face__subtitle {
    overflow: hidden;
    margin-top: 2px;
    font-size: 13px;
    line-height: 1.35;
    opacity: 0.82;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .face__hint {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.02em;
    opacity: 0.88;
  }

  .face__hint ha-icon {
    --mdc-icon-size: 17px;
  }

  .face__chevron {
    margin-left: auto;
    transition: transform 150ms ease;
  }

  .face:hover .face__chevron {
    transform: translateX(2px);
  }

  dialog {
    width: min(92vw, 440px);
    max-width: none;
    max-height: 92dvh;
    margin: auto;
    padding: 0;
    border: 0;
    background: transparent;
    color: #111111;
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.58);
    backdrop-filter: blur(3px);
  }

  dialog[open] {
    animation: loyalty-pop 170ms cubic-bezier(0.2, 0.8, 0.3, 1);
  }

  dialog[open]::backdrop {
    animation: loyalty-fade 170ms ease-out;
  }

  @starting-style {
    dialog[open] {
      opacity: 0;
      transform: scale(0.96) translateY(6px);
    }

    dialog[open]::backdrop {
      opacity: 0;
    }
  }

  .panel {
    width: 100%;
    max-height: 92dvh;
    padding: 18px;
    overflow: auto;
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    font-family: var(--ha-font-family-body, Roboto, 'Noto Sans', sans-serif);
  }

  .panel__head {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
  }

  .panel__title {
    flex: 1;
    min-width: 0;
    margin: 0;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    color: #111111;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon-btn {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: #f1f3f5;
    color: #333333;
    cursor: pointer;
  }

  .icon-btn:hover {
    background: #e6e9ec;
  }

  .icon-btn:focus-visible,
  .copy:focus-visible {
    outline: 2px solid #1a73e8;
    outline-offset: 2px;
  }

  .icon-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .code {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 80px;
    padding: 8px 0 12px;
  }

  .qr {
    width: min(var(--qr-size, 320px), 74vw);
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
  }

  .qr svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .barcode {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
  }

  .loading {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 32px 8px;
    font-size: 13px;
    color: #5f6368;
  }

  .loading::before {
    content: '';
    width: 18px;
    height: 18px;
    border: 2px solid #d6dbe0;
    border-top-color: #1a73e8;
    border-radius: 50%;
    animation: loyalty-spin 0.8s linear infinite;
  }

  .message {
    margin: 12px 4px;
    padding: 20px 8px;
    text-align: center;
    font-size: 13px;
    line-height: 1.5;
    color: #b00020;
  }

  .message code {
    padding: 1px 4px;
    border-radius: 4px;
    background: #f1f3f5;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px;
  }

  .note {
    margin: -4px 0 10px;
    text-align: center;
    font-size: 11.5px;
    line-height: 1.4;
    color: #5f6368;
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 12px;
    border-top: 1px solid #eceff1;
  }

  .value {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 13px;
    letter-spacing: 0.05em;
    color: #333333;
    user-select: all;
  }

  .value--muted {
    font-family: inherit;
    font-size: 12px;
    letter-spacing: 0;
    color: #5f6368;
  }

  .copy {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex: 0 0 auto;
    margin-left: auto;
    padding: 8px 12px;
    border: 0;
    border-radius: 999px;
    background: #f1f3f5;
    color: #111111;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }

  .copy:hover {
    background: #e6e9ec;
  }

  .copy.copied {
    background: #e6f4ea;
    color: #137333;
  }

  .copy ha-icon {
    --mdc-icon-size: 16px;
  }

  @keyframes loyalty-pop {
    from {
      opacity: 0;
      transform: scale(0.96) translateY(6px);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes loyalty-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes loyalty-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .face,
    .face__chevron {
      transition: none;
    }

    dialog[open],
    dialog[open]::backdrop {
      animation: none;
    }

    .loading::before {
      animation: none;
    }
  }
`;
